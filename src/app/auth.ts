import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      }
    },
  }),
  Google,
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")


export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      //Usuários logados são autenticados, caso contrário, redirecionam para a página de login      return !!auth
      return !!auth
    },
  },
  providers,
  pages: {
    signIn: "/signin",
    error: "/error",
    signOut: "/signout",

  },
})