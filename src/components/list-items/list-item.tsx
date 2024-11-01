import VisibilityIcon from '@mui/icons-material/Visibility';

interface ItemListProps {
    health: {
        id: string,
        type: "vaccine" | "exam" | "consultation" | "medicine",
        data: {
            id: string,
            title: string,
            status: "pendente" | "concluido"
            date: Date,
        }[]
    }[]
}

const ListItem: React.FC<ItemListProps> = (props) => {
    return (
        <main className="size-full flex bg-red-600">
            {
                props.health.map(item => (
                    <div
                        key={item.id}
                        className="w-full flex flex-1 border border-black rounded-2xl">
                        <header className="w-full h-1/4 bg-foreground">
                            <p>{item.type}</p>
                        </header>
                        <main className="flex flex-1 items-center justify-center">
                            {
                                item.data.map(itemData => (
                                    <div
                                        className="bg-blue w-full flex-1"
                                        key={itemData.id}
                                    >
                                        <p>{itemData.title}</p>
                                        <p>{itemData.status}</p>
                                        <p>{JSON.stringify(itemData.date)}</p>
                                        <VisibilityIcon />
                                    </div>
                                ))
                            }
                        </main>
                    </div>
                ))
            }
        </main>
    )
}

export default ListItem;