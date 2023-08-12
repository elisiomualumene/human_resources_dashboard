import Image from "next/image"

export type IMessageCardProps = {
    profile: any;
    name: string;
    message: string
}

export const MessageCard = ({profile, name, message}: IMessageCardProps) => {
    return (
        <div className="flex flex-row items-center m-2 gap-2 px-2 py-[5px] bg-neutral-50 rounded-lg cursor-pointer hover:bg-neutral-100">
            <Image src={profile} alt="message photo" className="w-[40px] h-[40px]"/>
            <div>
                <h4 className="text-xs text-gray-800 font-bold">{name}</h4>
                <p className="text-[10px] text-zinc-400">{message.length > 20 ? (message.slice(0, 25) + "...") : message}</p>
            </div>
        </div>
    )
}