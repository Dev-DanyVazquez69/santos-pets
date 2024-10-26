// app/error.tsx
"use client";
import GppBadIcon from '@mui/icons-material/GppBad';
import AnimationError from "@/components/lottieAnimation/error/animation";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error); // Log do erro para desenvolvimento
    }, [error]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-blue gap-5">
            <a
                href="#"
                className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Erro na aplicação
                    <GppBadIcon/>
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    {error.message}
                </div>
            </a>
            <button
                className="p-3 bg-background rounded-lg"
                onClick={() => reset()}>Tentar Novamente</button>
            <AnimationError />
        </div>
    );
}
