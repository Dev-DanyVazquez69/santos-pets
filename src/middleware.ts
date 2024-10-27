export { auth as middleware } from "@/app/auth"

import { auth } from "@/app/auth"

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/signin") {
        const newUrl = new URL("/signin", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}