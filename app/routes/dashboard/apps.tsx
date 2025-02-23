import { Button, Grid } from "@pokt-foundation/pocket-blocks"
import { json, LoaderFunction } from "@remix-run/node"
import { Link, Outlet, useLoaderData, useNavigation } from "@remix-run/react"
import { PocketUser } from "../api/user"
import FeedbackCard, {
  links as FeedbackCardLinks,
} from "~/components/application/FeedbackCard"
import Card, { links as CardLinks } from "~/components/shared/Card"
import CardList, {
  CardListItem,
  links as CardListLinks,
} from "~/components/shared/CardList"
import Loader, { links as LoaderLinks } from "~/components/shared/Loader"
import { useMatchesRoute } from "~/hooks/useMatchesRoute"
import { initPortalClient } from "~/models/portal/portal.server"
import { EndpointsQuery } from "~/models/portal/sdk"
import styles from "~/styles/dashboard.apps.css"
import { getRequiredClientEnvVar } from "~/utils/environment"
import { MAX_USER_APPS } from "~/utils/pocketUtils"
import {
  getPoktId,
  getUserPermissions,
  Permissions,
  requireUser,
} from "~/utils/session.server"

export const links = () => {
  return [
    ...CardLinks(),
    ...CardListLinks(),
    ...FeedbackCardLinks(),
    ...LoaderLinks(),
    { rel: "stylesheet", href: styles },
  ]
}

export type AllAppsLoaderData = {
  endpoints: EndpointsQuery | null
  isEnterprise: boolean
  user: PocketUser
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request)
  const portal = initPortalClient(user.accessToken)
  const endpointsResponse = await portal.endpoints().catch((e) => {
    console.log(e)
  })

  const userId = user.profile.id ? getPoktId(user.profile.id) : ""

  const permissions = getUserPermissions(user.accessToken)
  const isEnterprise =
    permissions.includes(Permissions.AppsUnlimited) ||
    getRequiredClientEnvVar("GODMODE_ACCOUNTS")?.includes(userId)

  return json<AllAppsLoaderData>({
    endpoints: endpointsResponse ? endpointsResponse : null,
    isEnterprise,
    user,
  })
}

export const Apps = () => {
  const { endpoints, isEnterprise } = useLoaderData() as AllAppsLoaderData
  const appIdRoute = useMatchesRoute("routes/dashboard/apps/$appId")
  const navigation = useNavigation()

  const userAppsStatus: CardListItem[] = [
    {
      label: "Current Apps",
      value: Number(endpoints?.owner.length) || 0,
    },
    {
      label: "Max Apps",
      value: isEnterprise ? "unlimited" : MAX_USER_APPS,
    },
  ]

  if (!appIdRoute) {
    return (
      <Grid gutter={32}>
        <Grid.Col md={8}>
          {navigation.state === "loading" && <Loader />}
          <Outlet />
        </Grid.Col>
        <Grid.Col md={4}>
          <Card>
            <div className="pokt-card-header">
              <h3>Account</h3>
            </div>
            <CardList items={userAppsStatus} />
            {(!endpoints || endpoints.owner.length < MAX_USER_APPS || isEnterprise) && (
              <Button fullWidth component={Link} mt={32} to="/dashboard/create">
                Create New Application
              </Button>
            )}
          </Card>
          <section>
            <FeedbackCard />
          </section>
        </Grid.Col>
      </Grid>
    )
  }

  return <Outlet />
}

export default Apps

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error-container">
      <h3>{error.message}</h3>
      <p>{error.stack}</p>
    </div>
  )
}
