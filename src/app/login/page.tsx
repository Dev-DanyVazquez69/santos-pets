import { signIn } from "@/app/auth"
import Image from "next/image"

export const Login: React.FC = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue">
            <div className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={'/web-app-manifest-512x512.png'}
                    alt="logo"
                    fill
                    className="object-cover" />
            </div>
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <button
                    type="submit"
                    className="bg-background p-2 rounded ">
                    Faça Login com o Google
                </button>
            </form>
        </div>
    )
}

export default Login;