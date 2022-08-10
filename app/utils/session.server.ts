import { createCookieSessionStorage, redirect } from "@remix-run/node"
import jwt_decode from "jwt-decode"
import { Auth0Profile } from "remix-auth-auth0"
import { authenticator } from "./auth.server"
import { getRequiredServerEnvVar } from "./environment"

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    httpOnly: true, // for security reasons, make this cookie http only
    path: "/", // remember to add this so the cookie will work in all routes
    sameSite: "lax", // this helps with CSRF
    secrets: [getRequiredServerEnvVar("SESSION_SECRET")], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
})

export const requireUser = async (request: Request, defaultRedirect = "/") => {
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    throw redirect(defaultRedirect)
  }
  if (!user?.profile._json.email_verified) {
    throw await authenticator.logout(request, { redirectTo: "/validate" })
  }
  const decode = jwt_decode<{
    exp: number
  }>(user.accessToken)

  if (Date.now() >= decode.exp * 1000) {
    try {
      const refreshUser = await authenticator.authenticate("auth0", request)
      return refreshUser
    } catch (error) {
      throw await authenticator.logout(request, {
        redirectTo: defaultRedirect,
      })
    }
  }
  return user
}

export const requireUserProfile = async (
  request: Request,
  defaultRedirect = "/",
): Promise<Auth0Profile> => {
  const user = await requireUser(request)
  return user.profile
}

export const requireAdmin = async (
  request: Request,
  defaultRedirect = "/",
): Promise<Auth0Profile> => {
  let user = await authenticator.isAuthenticated(request)
  if (!user || !user.profile.emails[0].value.includes("@pokt.network")) {
    throw redirect(defaultRedirect)
  }
  return user.profile
}

export const getUserId = async (request: Request) => {
  const user = await authenticator.isAuthenticated(request)
  if (!user) return undefined
  return getPoktId(user.profile.id)
}

export const getPoktId = (id: string) => {
  return id.split("|")[1]
}

export const getUserProfile = async (request: Request) => {
  const user = await authenticator.isAuthenticated(request)
  return user?.profile
}
