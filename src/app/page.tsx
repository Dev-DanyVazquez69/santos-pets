import { Header } from "@/components/header/header";
import { Avatar } from "@/components/avatar/avatar";
import { ButtonMenu } from "@/components/buttomMenu/buttonMenu";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background from-0% via-sky-500 via-15% to-background to-65% ">
      <Header title="Inicio" />
      <Avatar />
      <section className="flex flex-1">
        {/* Menu Grid */}
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-10 content-center justify-items-center p-2">
          {/* Button 1 - pet */}
          <ButtonMenu
            title="Pet"
            pathImage="/assets/icons/icon-pet.png"
            patchLink="pet"
            descriptionImage="Icone botão PET" />
          {/* Button 2 - tutor */}
          <ButtonMenu
            title="Tutor"
            patchLink="tutor"
            pathImage="/assets/icons/icon-tutor.png"
            descriptionImage="Icone botão Tutor" />
          {/* Button 3 - settings */}
          <ButtonMenu
            title="Ajustes"
            patchLink="settings"
            pathImage="/assets/icons/icon-settings.png"
            descriptionImage="Icone botão de Ajustes" />
          {/* button 4 Saúde */}
          <ButtonMenu
            title="Saúde"
            patchLink="health"
            pathImage="/assets/icons/icon-saude.png"
            descriptionImage="Icone botão de saúde" />
          {/* button 5 Remédios */}
          <ButtonMenu
            title="Remédios"
            patchLink="medicines"
            pathImage="/assets/icons/icon-remedio.png"
            descriptionImage="Icone botão de Remedios" />
          {/* button 6 Exames */}
          <ButtonMenu
            title="Exames"
            patchLink="exams"
            pathImage="/assets/icons/icon-exames.png"
            descriptionImage="Icone botão de Exames" />
        </div>
      </section>
    </main>
  );
}