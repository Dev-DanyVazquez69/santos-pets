import Image from "next/image";
import cat from "@/assets/hades.jpeg";

export const Avatar: React.FC = () => {
    return (
        <main className="flex flex-col gap-2 flex-1 items-center justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={cat}
                    alt={"O Malley"}
                    fill
                    className="object-cover"
                />
            </div>
            <h4 className="text-3xl font-bold">{'Hades'}</h4>
        </main>
    );
}
