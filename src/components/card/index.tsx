export type ICardProps = {
    title: string;
    range: number;
    percentage: number;
}

export const Card = ({percentage,range,title}: ICardProps) => {

    return (
        <aside className="flex flex-row justify-between items-center p-2 bg-white rounded">
            <div>
                <p className="text-xs text-zinc-300 mb-2">{title}</p>
                <p className="text-lg font-bold">{range}</p>
                <p className="text-xs text-blue-300 my-2">+{percentage}% Inc</p>
            </div>
        </aside>
    )
}