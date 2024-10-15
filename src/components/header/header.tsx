'use client'

import React, { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";

interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {

    const [modalMenu, setModalMenu] = useState<boolean>(false)

    const handleModalMenu = () => {
        setModalMenu(!modalMenu)
    }

    return (
        <>
            <header className="px-5 pt-5 lg:h-22 xl:h-24 flex items-center justify-items-center bg-transparent">
                <div className="flex flex-1 lg:hidden">
                    <button onClick={handleModalMenu}>
                        <MenuIcon className="size-6 lg:size-10 text-foreground" />
                    </button>
                </div>
                <div className="hidden lg:flex flex-1 items-center justify-center">
                    <ul className="flex flex-row gap-5 font-md text-xl justify-between text-background">
                        <li className="hover:animate-pulse">
                            <a href="/">Inicio</a>
                        </li>
                        <li className="hover:animate-pulse">
                            <a href="health">Saúde</a>
                        </li>
                        <li className="hover:animate-pulse">
                            <a href="medicines">Remédio</a>
                        </li>
                        <li className="hover:animate-pulse">
                            <a href="exams">Exame</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-blue flex-1 text-center rounded-md max-w-sm lg:max-w-36 p-1 border border-black">
                    <h1 className="text-base text-background font-bold">{title}</h1>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="rounded-full h-10 w-10 bg-slate-600">
                        <Image
                            src={'/assets/avatar.png'}
                            alt={"Avatar"}
                            width={50}
                            height={50}
                            className="rounded-full bg-cover border border-black"
                        />
                    </div>
                </div>
                {
                    modalMenu &&
                    <div className="fixed size-full top-0 left-0 bg-black/50 z-50">
                        <div className="h-72 w-full bg-blue/90 flex p-5 rounded-b-3xl">
                            <section className="flex-1">

                            </section>
                            <section className="flex-1 flex items-start justify-center">
                                <ul className="flex flex-col gap-5 font-bold text-lg">
                                    <li className="text-center hover:animate-pulse">
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li className="text-center hover:animate-pulse">
                                        <a href="health">Saúde</a>
                                    </li>
                                    <li className="text-center hover:animate-pulse">
                                        <a href="medicines">Remedio</a>
                                    </li>
                                    <li className="text-center hover:animate-pulse">
                                        <a href="exams">Exame</a>
                                    </li>
                                </ul>
                            </section>
                            <section className="flex-1 flex-col flex justify-between items-end">
                                <button onClick={handleModalMenu}>
                                    <CloseIcon
                                        width={35}
                                        height={35}
                                    />
                                </button>
                                <button className="w-fit bg-background h-fit p-2 rounded hover:p-3 animate-bounce">
                                    <p>Logout</p>
                                </button>
                            </section>
                        </div>
                    </div>
                }
            </header>
        </>
    )
}