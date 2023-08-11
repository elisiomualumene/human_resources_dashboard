import { ReactNode } from "react"
import Link from "next/link";

import {
    MacCommandFilled,
    MessageFilled,
    CalendarFilled,
    ShoppingFilled,
    UsergroupAddOutlined,
    PushpinFilled
} from "@ant-design/icons"

import { Button } from "@/components/button";

type ItemProps = {
    icon: ReactNode;
    title: string;
    isStart?: boolean;
    startTitle?: string
};

export default function SidebarItems() {

    const items: ItemProps[] = [
        { icon: <MacCommandFilled />, title: "Dashboard", isStart: true, startTitle: "Menu" },
        { icon: <MessageFilled />, title: "Mensagens" },
        { icon: <CalendarFilled />, title: "Calendário" },
        { icon: <ShoppingFilled />, title: "Vagas", isStart: true, startTitle: "Candidatos" },
        { icon: <UsergroupAddOutlined />, title: "Candidatos" },
        { icon: <PushpinFilled />, title: "Encaminhados" },
    ];
    return (
        <ul className="flex flex-col mx-2 gap-2 mt-4">
            {
                items.map((item: ItemProps, index) => (
                    <Link href="/" key={index}>
                        {item.isStart && <p className="px-2 my-2 text-zinc-800 font-medium text-sm">{item.startTitle}</p>}
                        <Button title={item.title} icon={item.icon} />
                    </Link>
                ))
            }
        </ul>
    )
}