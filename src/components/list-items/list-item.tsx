import VisibilityIcon from '@mui/icons-material/Visibility';
import { ItemListProps } from '@/interfaces/health-list';
import Link from 'next/link';

const ListItem: React.FC<ItemListProps> = (props) => {
    return (
        <main className="size-full flex flex-col gap-10 items-center">
            {
                props.health.map(item => (
                    <div
                        key={item.id}
                        className="w-full flex flex-1 flex-col bg-indexGray rounded-2xl p-5 gap-5 max-w-screen-lg">
                        <header className="w-full h-6 md:h-10 bg-white text-black font-bold capitalize rounded-md flex items-center justify-center">
                            <p>{item.type}</p>
                        </header>
                        <main className="flex flex-1 flex-col gap-4 items-center justify-center text-white">
                            {
                                item.data.map(itemData => (
                                    <div
                                        className="bg-blue w-full flex flex-row flex-1 capitalize text-xs items-center justify-around rounded-xl px-2"
                                        key={itemData.id}>
                                        <section className='flex flex-col flex-1 justify-around items-center h-full'>
                                            <div className='uppercase font-bold'>
                                                <p>{itemData.title}</p>
                                            </div>
                                            <div className='flex w-full justify-around font-extralight'>
                                                <p>{itemData.status}</p>
                                                <p>{JSON.stringify(itemData.date)}</p>
                                            </div>
                                        </section>
                                        <section>
                                            <VisibilityIcon />
                                        </section>
                                    </div>
                                ))
                            }
                        </main>
                        <Link 
                            href={`/${item.type}`}
                            className='bg-foreground w-fit py-1 px-3 text-background capitalize rounded-md text-sm self-end'>Ver mais</Link>
                    </div>
                ))
            }
        </main>
    )
}

export default ListItem;