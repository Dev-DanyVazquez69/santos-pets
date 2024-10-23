import { auth } from "@/app/auth"
import Image from "next/image"
import { signOut } from "@/app/auth"

const ProfileTutor: React.FC = async () => {

    const session = await auth()
    if (!session?.user) return null

    return (
        <div className="h-screen w-screen">
            <p>{session.expires}</p>
            <p>{session.user.name}</p>
            <p>{session.user.id}</p>
            <p>{session.user.image}</p>
            <p>{session.user.email}</p>
            <div className="w-40 h-40 rounded-full relative">
                <Image
                    src={session.user.image ?? ''}
                    alt="Foto de perfil"
                    fill
                    className="object-fill" />
            </div>
            <form
                action={async () => {
                    "use server"
                    await signOut({ redirectTo: "/signin" })
                    //Faz logout e redireciona a uma rota especifica
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    )
}

export default ProfileTutor