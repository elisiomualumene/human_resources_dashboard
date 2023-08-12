import Image from "next/image"

export type IActivityProps = {
    profile: any;
    name: string;
    job: string;
    time: string
}

export const ActivityCard = ({name,profile, job, time}: IActivityProps) => {
    return (
        <div className="flex flex-row items-center gap-4 mt-6 hover:bg-zinc-50 p-2 rounded cursor-pointer">
            <Image src={profile} alt={name} className="w-[50px] h-[50px] border-2 rounded-full border-sky-100 p-[5px]"/>
            <div className="flex flex-col gap-2">
                <p className="text-xs text-zinc-700">
                    <span className="font-bold text-zinc-700">{name} </span> 
                    candidatou-se para a vaga de 
                    <span className="font-bold text-zinc-700"> {job}</span>
                </p>
                <p className="text-xs text-zinc-300">{time} atrás</p>
            </div>
        </div>
    )
}