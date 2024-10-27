'use client'

import Image from "next/image";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { useEffect, useState } from "react";

export const AvatarPet: React.FC = () => {

    const [modalSelectCat, setModalSelectCat] = useState<boolean>()
    const [isClient, setIsClient] = useState(false);


    const changeModal = () => {
        setModalSelectCat(!modalSelectCat)
    }

    useEffect(() => {
        setIsClient(true); // só define como true após o carregamento no cliente
    }, []);

    const pets = [
        {
            id: "34354534543543",
            name: "O' malley",
            age: "3",
            color: "white and black",
            race: "srd"
        },
        {
            id: "34354534543546",
            name: "Hades",
            age: "2",
            color: "bage",
            race: "srd"
        },
        {
            id: "34354534543547",
            name: "Caju",
            age: "1",
            color: "striped",
            race: "srd"
        },
    ]

    return (
        <>
            {isClient ? (
                <main className="flex flex-col gap-5 flex-1 items-center justify-center p-5">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                            src={'/assets/omalley.jpeg'}
                            alt={"O Malley"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h4 className="text-3xl font-bold text-center text-foreground">{'O´ malley'}</h4>
                    <button onClick={changeModal} className="flex flex-col justify-center items-center absolute right-0 md:right-16 top-1/2 transform -translate-y-1/2 w-16 h-20 bg-foreground rounded-xl border border-background">
                        <p className="text-center text-background font-semibold text-sm">Trocar<br />Pet</p>
                        <PublishedWithChangesIcon className="text-background" />
                    </button>
                    {
                        modalSelectCat &&
                        <div className="fixed w-screen h-screen bg-transparent z-50 flex items-center justify-center">
                            <div className="h-1/2 w-3/4 max-w-lg bg-background rounded z-50 flex items-center justify-around flex-col p-5 gap-2">
                                <h1 className="font-bold text-lg">ESCOLHA O PET</h1>
                                <ul className="w-4/5 h-2/3 flex flex-col justify-around gap-3">
                                    {
                                        pets.map(pet => (
                                            <button
                                                key={pet.id}
                                                onClick={() => { }}
                                                className="relative flex flex-1 rounded bg-blue justify-center gap-2 items-center hover:bg-blue/50">
                                                <p className="text-xl md:text-2xl">{pet.name}</p>
                                            </button>
                                        ))
                                    }
                                </ul>
                                <button
                                    className="bg-blue p-2 rounded"
                                    onClick={changeModal}>FECHAR</button>
                            </div>
                        </div>
                    }
                </main>
            ) : (
                <div>Conteúdo inicial do servidor</div>
            )}
        </>
    );
}