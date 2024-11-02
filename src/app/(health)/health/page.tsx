import { Header } from "@/components/header/header";
import ListItem from "@/components/list-items/list-item";
import { ItemListProps } from "@/interfaces/health-list";
import Image from "next/image";

const Exams: React.FC = async () => {

    const healthCats: ItemListProps = {
        health: [
            {
                id: "0001",
                type: "vaccines" as "vaccines" | "exams" | "consultations" | "medicines",
                data: [
                    {
                        id: "001",
                        title: "vacina contra raiva",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                    {
                        id: "002",
                        title: "vacina contra xxx",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                ]
            },
            {
                id: "0002",
                type: "exams" as "vaccines" | "exams" | "consultations" | "medicines",
                data: [
                    {
                        id: "001",
                        title: "exame de sangue",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                    {
                        id: "002",
                        title: "exame da patinha",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                ]
            },
            {
                id: "0003",
                type: "medicines" as "vaccines" | "exams" | "consultations" | "medicines",
                data: [
                    {
                        id: "001",
                        title: "paracetamol",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                    {
                        id: "002",
                        title: "ibuprofeno",
                        status: "pendente" as "pendente" | "concluido",
                        date: new Date()
                    },
                ]
            },
        ]

    }

    return (
        <div className="w-screen h-screen flex flex-col bg-background">
            <Header
                title="Saúde"
            />
            <main className="size-full p-6 md:p-20">
                <div className= "size-full rounded-2xl">
                    <header className="relative gap-5 p-5 flex flex-col items-center justify-evenly">
                        <Image
                            alt="icone de saúde"
                            src={"/assets/icons/icon-saude.png"}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <h1 className="text-foreground text-base font-extrabold md:text-2xl">REGISTROS DE SAÚDE</h1>
                    </header>
                    <ListItem
                        health={healthCats.health} />
                </div>
            </main>
        </div>
    )
}

export default Exams;