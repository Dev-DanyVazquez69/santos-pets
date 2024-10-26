import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Secret para o JWT do next-auth
const secret = process.env.AUTH_SECRET;

export async function middleware(req: NextRequest) {
    try {
        // Extrai o token JWT para verificar a autenticação
        const token = await getToken({ req, secret });

        // Se o usuário não estiver autenticado e a página não for "/signin"
        if (!token && req.nextUrl.pathname !== "/signin") {
            return NextResponse.redirect(new URL("/signin", req.nextUrl.origin), {
                headers: {
                    "Set-Cookie": `error=You need to log in; Path=/; HttpOnly`,
                },
            });
        }

        // Continua o processamento da página se autenticado ou se for "/login"
        return NextResponse.next();
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

// Define as rotas protegidas (ignora api, static files, etc.)
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};