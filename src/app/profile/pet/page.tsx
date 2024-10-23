import { auth } from "@/app/auth"
import Image from "next/image"

const ProfilePet: React.FC = async () => {

    const session = await auth()
    if (!session?.user) return null

    return (
        <div className="h-screen w-screen">
            <h1>Pet</h1>
            <div className="w-40 h-40">
                <Image
                    src={session.user.image ?? ''}
                    alt="Foto de perfil"
                    fill
                    className="object-cover" />
            </div>
        </div>
    )
}

export default ProfilePet