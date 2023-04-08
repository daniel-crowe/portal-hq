import { LinksFunction, LoaderFunction } from "@remix-run/node"
import { Outlet, useCatch } from "@remix-run/react"
import styles from "~/styles/dashboard.css"
import { requireUserProfile } from "~/utils/session.server"
import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-react';
import { PLASMIC } from '../plasmic-init';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserProfile(request, "/api/auth/auth0")
  return null
}

export default function Dashboard() {
  return <Outlet />
}

export const CatchBoundary = () => {
  const caught = useCatch()
  if (caught.status === 404) {
    return (
      <div className="error-container">
        <h1>Dashboard Error</h1>
        <p>{caught.statusText}</p>
      </div>
    )
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error-container">
      <h1>Dashboard Error</h1>
      <p>{error.message}</p>
    </div>
  )
}

export const loader = async () => {
  const plasmicData = await PLASMIC.fetchComponentData('Homepage');
return json(plasmicData);
};

export default function MyPage() {
  const plasmicData = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}; 

