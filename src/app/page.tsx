import { ActivityCard, IActivityProps } from "@/components/activityCard";
import { IMessageCardProps, MessageCard } from "@/components/messageCard";
import { Card, ICardProps } from "@/components/card";

import PR1 from "../assets/avatars/avatar3.png"
import PR2 from "../assets/avatars/avatar1.png"
import PR3 from "../assets/avatars/avatar4.png"
import PR4 from "../assets/avatars/avatar2.png"
import calendar from "../assets/icons/calendar.png"


export default function Home() {
  const cards: ICardProps[] = [
    {percentage: 14, range: 5672, title: "Total de Candidatos",},
    {percentage: 14, range: 3045, title: "Shotlisted"},
    {percentage: 14, range: 1055, title: "Candidatos Rejeitados"},
  ]

  const activities: IActivityProps[] = [
    {job: "Desenvolvedor/a de Software", name: "Cláudia Armando", profile: PR1, time: "10 minutos"},
    {job: "Product Designer", name: "Janice Pedro", profile: PR2, time: "1 hora"},
    {job: "Global Market Manager", name: "José Francisco", profile: PR3, time: "45 minutos"},
    {job: "Data Analyst Senior", name: "Liliana Lopes", profile: PR4, time: "1 semana"},
  ]

  const meetings: IMessageCardProps[] = [
    {message: "08:00 am - 09:30 am", name:"Entrevista", profile: calendar},
    {message: "10:00 am - 12:00 am", name:"Reunião Organizacional", profile: calendar},
    {message: "01:00 pm - 02:00 pm", name:"Entrevista", profile: calendar},
    {message: "04:00 pm - 05:00 pm", name:"Reunião Organizacional", profile: calendar},
  ]

  return (
    <main className="m-4 w-full pb-4">
      <div className="grid grid-cols-3 gap-6 my-6">
        {
          cards.map((card, index) => (
            <Card 
              title={card.title} 
              range={card.range} 
              percentage={card.percentage}
            />
          ))
        }
      </div>
      <article className="w-full h-[300px] bg-white p-2 rounded">
        <h4 className="text-sm text-zinc-700 font-bold">Estátistica - Candidaturas Ativas</h4>
      </article>

      <article className="grid grid-cols-3 gap-6 my-6">

        <div className="col-span-2 bg-white rounded p-2">
          <div className="flex flex-row justify-between text-sm font-bold">
            <h4>Atividades</h4>
            <p className="text-xs text-blue-500 cursor-pointer">todas</p>
          </div>
          {
            activities.map((activity) => (
              <ActivityCard 
                profile={activity.profile} 
                name={activity.name} 
                job={activity.job}
                time={activity.time}              
              />
            ))
          }
        </div>

        <div className="bg-white rounded p-2">
          <div className="flex flex-row justify-between items-center">
              <h4 className="text-sm font-bold">Reuniões</h4>
              <button className="border py-[5px] px-6 rounded text-xs hover:border-blue-500">Criar Nova</button>
          </div>
          {
            meetings.map((meet) => (
              <MessageCard 
                profile={meet.profile} 
                name={meet.name} 
                message={meet.message}
              />
            ))
          }
        </div>
      </article>
    </main>
  )
}
