import Image from "next/image";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export const Avatar: React.FC = () => {
    return (
        <main className="flex flex-col gap-5 flex-1 items-center justify-center p-5">
            <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={'/assets/omalley.jpeg'}
                    alt={"O Malley"}
                    fill
                    className="object-cover"
                />
            </div>
            <h4 className="text-3xl font-bold text-center text-foreground">{'Hades'}</h4>
            <div className="flex flex-col justify-center items-center absolute right-0 md:right-16 top-1/2 transform -translate-y-1/2 w-16 h-20 bg-foreground rounded-xl border border-background">
                <p className="text-center text-background font-semibold text-sm">Trocar<br />Pet</p>
                <PublishedWithChangesIcon className="text-background" />
            </div>
        </main>
    );
}