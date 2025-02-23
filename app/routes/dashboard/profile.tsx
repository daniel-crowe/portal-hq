import { ActionFunction, LinksFunction, LoaderFunction, json } from "@remix-run/node"
import { useActionData, useCatch, useLoaderData } from "@remix-run/react"
import { useEffect } from "react"
import { Auth0Profile } from "remix-auth-auth0"
import invariant from "tiny-invariant"
import { AmplitudeEvents, trackEvent } from "~/utils/analytics"
import { getRequiredServerEnvVar } from "~/utils/environment"
import { requireUser } from "~/utils/session.server"
import ProfileView, {
  links as ProfileViewLinks,
} from "~/views/dashboard/apps/profile/profileView"

export const links: LinksFunction = () => [...ProfileViewLinks()]

type LoaderData = {
  profile: Auth0Profile
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request)
  return json<LoaderData>({
    profile: user.profile,
  })
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get("email")
  invariant(email, "user email not found")

  try {
    const res = await fetch(
      `https://${getRequiredServerEnvVar("AUTH0_DOMAIN")}/dbconnections/change_password`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          client_id: getRequiredServerEnvVar("AUTH0_CLIENT_ID"),
          email,
          connection: getRequiredServerEnvVar("AUTH0_CONNECTION"),
        }),
      },
    )

    return res
  } catch (e) {
    return e
  }
}

export default function Profile() {
  const { profile } = useLoaderData()
  const actionData = useActionData()

  useEffect(() => {
    trackEvent(AmplitudeEvents.ProfileView)
  }, [])

  return <ProfileView actionData={actionData} profile={profile} />
}

export const CatchBoundary = () => {
  const caught = useCatch()
  if (caught.status === 404) {
    return (
      <div className="error-container">
        <h1>Profile Catch Error</h1>
        <p>{caught.statusText}</p>
      </div>
    )
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error-container">
      <h1>Profile Error</h1>
      <p>{error.message}</p>
    </div>
  )
}
