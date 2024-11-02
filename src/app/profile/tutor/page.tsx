import { auth } from "@/app/auth"
import { AvatarTutor } from "@/components/(avatar)/avatar-tutor/avatar-tutor"
import { Header } from "@/components/header/header"
import Link from "next/link"

const ProfileTutor: React.FC = async () => {

    const session = await auth()
    if (!session?.user) return null

    return (
        <>
            <Header
                title="Perfil do Tutor" />
            <AvatarTutor />
            <main className="flex flex-col flex-1 items-center ">
                <div className="flex flex-1 flex-col w-full max-w-4xl px-5 items-center justify-around text-white">
                    <div className="flex w-full bg-blue justify-around rounded-lg p-1">
                        <div className="border-r border-black flex-1 flex justify-center items-center ">
                            <strong>ID</strong>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <p>{session.user.id ?? "User Google"}</p>
                        </div>
                    </div>
                    <div className="flex w-full bg-blue justify-around rounded-lg p-1">
                        <div className="border-r border-black flex-1 flex justify-center items-center ">
                            <strong>NOME</strong>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <p>{session.user.name}</p>
                        </div>
                    </div>
                    <div className="flex w-full bg-blue justify-around rounded-lg p-1">
                        <div className="border-r border-black flex-1 flex justify-center items-center ">
                            <strong>EMAIL</strong>
                        </div>
                        <div className="flex-1 flex justify-center items-center text-sm">
                            <p>{session.user.email}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 w-full max-w-4xl p-5 justify-around items-center">
                    <button className="flex text-xs p-1 md:text-base md:w-32 h-14 rounded-lg items-center justify-center">
                        <p>Atualizar dados</p>
                    </button>
                    <button className="flex text-xs p-1 md:text-base md:w-32 h-14 rounded-lg items-center justify-center">
                        <p>Adicionar PET</p>
                    </button>
                    <Link
                        href={"/signout"}
                        className="flex text-xs p-1 md:text-base md:w-32 h-14 items-center justify-center">
                        <p>Fazer LogOff</p>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default ProfileTutor