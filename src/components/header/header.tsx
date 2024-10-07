import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import avatar from "@/assets/avatar.png"

interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <header className="px-5 pt-5 lg:h-22 xl:h-24 flex items-center justify-items-center">
                <div className="flex-1">
                    <button>
                        <MenuIcon className="size-6 lg:size-10" />
                    </button>
                </div>
                <div className="border border-black bg-blue flex-1 text-center rounded-md max-w-sm p-1">
                    <h1 className="text-base lg:text-2xl">{title}</h1>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="rounded-full h-10 w-10 bg-slate-600">
                        <Image
                            src={avatar}
                            alt={"Avatar"}
                            width={50}
                            height={50}
                            layout="responsive"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}