'use client'

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("@/components/(lottieAnimation)/loading/animation"), {
    ssr: false,
});

const AnimationLoading = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Garante que o código só execute no lado do cliente
    }, []);

    return (
        <div className="mx-5">
            {isClient && <LottieAnimation />} {/* Só renderiza no cliente */}
        </div>
    );
};

export default AnimationLoading;
