export { auth as middleware } from "@/app/auth"

import { auth } from "@/app/auth"

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/signin") {
        const newUrl = new URL("/signin", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ['/((?!public|_next/static|_next/image|signin|register).*)'],
}