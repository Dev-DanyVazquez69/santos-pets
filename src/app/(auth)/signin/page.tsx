import Image from "next/image"
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "@/app/auth"
import Link from "next/link";
import CredentialsLoginForm from "@/components/credential-login-form/credentialsLoginForm";


export default function Login() {


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
                <div className="flex flex-col gap-5">
                    <CredentialsLoginForm />
                    <Link
                        className="self-center font-extralight text-xs"
                        href={"/register"}>
                        Ainda não possui conta?
                    </Link>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <button 
                        type="submit"
                        className="text-xs flex gap-2 bg-background p-2 rounded-full justify-center items-center">
                            <GoogleIcon />
                            Faça login com o Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}