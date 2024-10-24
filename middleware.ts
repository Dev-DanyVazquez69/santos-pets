import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Secret para o JWT do next-auth
const secret = process.env.AUTH_SECRET;

export async function middleware(req: NextRequest) {
    // Extrai o token JWT para verificar a autenticação
    const token = await getToken({ req, secret });

    // Se o usuário não estiver autenticado e a página não for "/signin"
    if (!token && req.nextUrl.pathname !== "/signin") {
        const loginUrl = new URL("/signin", req.nextUrl.origin);
        return NextResponse.redirect(loginUrl); // Redireciona para a página de login
    }

    // Continua o processamento da página se autenticado ou se for "/login"
    return NextResponse.next();
}

// Define as rotas protegidas (ignora api, static files, etc.)
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
