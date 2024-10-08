import { Avatar } from "@/components/avatar/avatar";
import { Header } from "@/components/header/header";
import Image from "next/image";
import backgroundBottom from "@/assets/bg-bottom.png"

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header title="Inicio" />
      <div className="flex flex-col pt-5 gap-2">
        <Avatar />
        <div className="flex flex-1">
          <Image
            src={backgroundBottom}
            alt={"background bottom"}
            className="md:hidden"
          >
          </Image>
          <div className="grid grid-cols-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}