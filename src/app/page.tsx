import { Card, ICardProps } from "@/components/card";
import { Header } from "@/components/header";

export default function Home() {
  const cards: ICardProps[] = [
    {percentage: 14, range: 5672, title: "Total de Candidatos",},
    {percentage: 14, range: 3045, title: "Shotlisted"},
    {percentage: 14, range: 1055, title: "Candidatos Rejeitados"},
  ]

  return (
    <main className="m-4 w-full">
      <Header />
      <div className="grid grid-cols-3 gap-6 mt-6">
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
    </main>
  )
}
