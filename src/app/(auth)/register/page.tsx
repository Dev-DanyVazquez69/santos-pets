import Image from "next/image"
import GoogleIcon from '@mui/icons-material/Google';
import { redirect } from "next/navigation"
import { signIn } from "@/app/auth"
import { AuthError } from "next-auth"

export default function Register() {

    return (
        <div className="w-screen h-screen flex gap-10 flex-col items-center justify-center bg-blue">
            <h1 className="text-4xl font-extrabold">Santos Petz</h1>
            <div className="flex flex-col gap-2 md:flex-row md:gap-5  items-center justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden flex gap-7 items-center justify-center">
                    <Image
                        src={'/web-app-manifest-512x512.png'}
                        alt="logo"
                        fill
                        className="object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <form
                        className="flex flex-col gap-5 items-center"
                        action={async (formData) => {
                            "use server"
                            try {
                                await signIn("credentials", formData)
                            } catch (error) {
                                if (error instanceof AuthError) {
                                    return redirect(`error?error=${error.type}`)
                                }
                                throw error
                            }
                        }}
                    >
                        <label
                            htmlFor="nome"
                            className="flex flex-col items-start justify-center">
                            Nome
                            <input
                                className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                                placeholder="Insira seu email"
                                name="nome"
                                id="nome" />
                        </label>
                        <label
                            htmlFor="email"
                            className="flex flex-col items-start justify-center">
                            Email
                            <input
                                className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                                placeholder="Insira seu email"
                                name="email"
                                id="email" />
                        </label>
                        <label
                            htmlFor="password"
                            className="flex flex-col items-start justify-center">
                            Password
                            <input
                                className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                                placeholder="Insira sua senha"
                                name="password"
                                id="password" />
                        </label>
                        <input
                            className="p-1 bg-foreground rounded text-background font-bold"
                            type="submit"
                            value="Sign In" />
                    </form>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <div className="flex gap-2 bg-background p-2 rounded-full justify-center">
                            <GoogleIcon />
                            <button
                                className="text-xs"
                                type="submit">
                                Cadastre-se com o Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}