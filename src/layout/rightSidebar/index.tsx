import Image from "next/image"
import {
    QuestionCircleFilled,
    BellFilled
} from "@ant-design/icons"
import AM1 from "../../assets/avatars/avatar2.png"
import AM2 from "../../assets/avatars/avatar4.png"
import jobIcon from "../../assets/icons/kayako.png"

import avatar from "../../assets/avatars/avatar1.png"
import { IMessageCardProps, MessageCard } from "@/components/messageCard"

export const RightSidebar = () => {

    const messages: IMessageCardProps[] = [
        {profile: AM2, name: "Elisio Mualumene", message: "como foi a entrevista com aquele cara?"},
        {profile: AM1, name: "Neusa dos Santos", message: "Já ultrapassamos o máximo de candidatos para esta vaga!"},
    ]

    const jobs: IMessageCardProps[] = [
        {profile: jobIcon, name: "Software Developer", message: "Publicado á 6 horas"},
        {profile: jobIcon, name: "Product Designer", message: "Publicado á 2 dias"},
        {profile: jobIcon, name: "Data Analyst Senior", message: "Publicado á 6 dias"},
        {profile: jobIcon, name: "Global Market Manager", message: "Publicado á 1 semana"},
    ]

    return (
        <nav className="fixed w-[250px] bg-white right-0 top-0 h-full p-2">
            <div className="flex flex-row gap-2 justify-end items-center text-zinc-300 text-xl">
            <QuestionCircleFilled />
            <BellFilled />
            <Image src={avatar} alt="profile avatar" className="w-6" />
            </div>
            <div className="flex flex-col items-center mt-6">
                <Image src={avatar} alt="profile avatar" className="w-[140px]"/>
                <h2 className="font-xl font-bold text-zinc-800 mt-2">Naiara Machado</h2>
                <p className="text-xs text-zinc-400">Gestora de Recursos Humanos</p>
            </div>
            <div>
                <h4 className="text-zinc-800 text-sm font-bold mt-6">Mensagens</h4>
                {
                    messages.map((message) => (
                        <MessageCard 
                            profile={message.profile} 
                            name={message.name} 
                            message={message.message} 
                        />
                    ))
                }
            </div>
            <div>
                <h4 className="text-zinc-800 text-sm font-bold mt-6">Vagas Recentes</h4>
                {
                    jobs.map((job) => (
                        <MessageCard 
                            profile={job.profile} 
                            name={job.name} 
                            message={job.message} 
                        />
                    ))
                }
            </div>
        </nav>
    )
}