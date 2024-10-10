import { Header } from "@/components/header/header";
import { Avatar } from "@/components/avatar/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background from-15% via-blue via-45% to-foreground to-90%">
      <Header title="Inicio" />
      <Avatar />

      <section className="flex flex-1">
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-10 content-center justify-items-center p-2">
          {/* Button 1 - pet */}
          <Link
            href={'/pet'}
            className="size-24 sm:size-32 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-pet.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Pet</p>
          </Link>
          {/* Button 2 - tutor */}
          <Link
            href={'/tutor'}
            className="size-24 md:size-28 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-tutor.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Tutor</p>
          </Link>
          {/* Button 3 - settings */}
          <Link
            href={'/settings'}
            className="size-24 md:size-28 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-settings.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Ajustes</p>
          </Link>
          {/* button 4 Saúde */}
          <Link
            href={'/health'}
            className="size-24 md:size-28 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-saude.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Saúde</p>
          </Link>
          {/* button 5 Remédios */}
          <Link
            href={'/remedy'}
            className="size-24 md:size-28 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-remedio.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Remédios</p>
          </Link>
          {/* button 6 Exames */}
          <Link
            href={'/exams'}
            className="size-24 md:size-28 lg:size-36 bg-blue justify-center flex flex-col p-3 rounded-xl border-2 border-black">
            <div className="relative flex-1 items-center justify-center">

              <Image
                src={'/assets/icons/icon-exames.png'}
                alt="Icone botão PET"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs md:text-base font-semibold text-black">Exames</p>
          </Link>
        </div>
      </section>
    </main>
  );
}