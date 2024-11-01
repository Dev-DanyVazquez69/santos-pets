import { Header } from "@/components/header/header";
import { AvatarPet } from "@/components/(avatar)/avatar-pet/avatar-pet";
import { ButtonMenu } from "@/components/buttomMenu/buttonMenu";

export default async function Home() {

  return (
    <>
      <Header
        title="Inicio" />
      <AvatarPet />
      <section className="flex flex-1">
        {/* Menu Grid */}
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-10 content-center justify-items-center p-2">
          {/* Button 1 - pet */}
          <ButtonMenu
            title="Pet"
            pathImage="/assets/icons/icon-pet.png"
            patchLink="profile/pet"
            descriptionImage="Icone botão PET" />
          {/* Button 2 - tutor */}
          <ButtonMenu
            title="Tutor"
            patchLink="profile/tutor"
            pathImage="/assets/icons/icon-tutor.png"
            descriptionImage="Icone botão Tutor" />
          {/* button 3 Saúde */}
          <ButtonMenu
            title="Saúde"
            patchLink="health"
            pathImage="/assets/icons/icon-saude.png"
            descriptionImage="Icone botão de saúde" />
          {/* button 4 Remédios */}
          <ButtonMenu
            title="Remédios"
            patchLink="medicines"
            pathImage="/assets/icons/icon-remedio.png"
            descriptionImage="Icone botão de Remedios" />
          {/* button 5 Exames */}
          <ButtonMenu
            title="Exames"
            patchLink="exams"
            pathImage="/assets/icons/icon-exames.png"
            descriptionImage="Icone botão de Exames" />
          {/* Button 6 - settings */}
          <ButtonMenu
            title="Ajustes"
            patchLink="settings"
            pathImage="/assets/icons/icon-settings.png"
            descriptionImage="Icone botão de Ajustes" />
        </div>
      </section>
    </>
  );
}