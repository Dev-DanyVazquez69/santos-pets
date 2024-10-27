import Image from "next/image";
import { auth } from "@/app/auth"

export const AvatarTutor: React.FC = async () => {

    const session = await auth()

    return (
        <main className="flex flex-col gap-5 flex-1 items-center justify-center p-5">
            <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={session?.user?.image ?? '/assets/avatar.png'}
                    alt={"O Malley"}
                    fill
                    className="object-cover"
                />
            </div>
            <h4 className="text-3xl font-bold text-center text-foreground">{session?.user?.name}</h4>
        </main>
    );
}