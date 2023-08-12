import { ReactNode } from "react"
import Link from "next/link";

import {
    MacCommandFilled,
    MessageFilled,
    CalendarFilled,
    ShoppingFilled,
    UsergroupAddOutlined,
    PushpinFilled,
    WarningFilled
} from "@ant-design/icons"

import { Button } from "@/components/button";

type ItemProps = {
    icon: ReactNode;
    title: string;
    path: string;
    isStart?: boolean;
    startTitle?: string
};

export default function SidebarItems() {

    const items: ItemProps[] = [
        { icon: <MacCommandFilled />, title: "Dashboard", isStart: true, startTitle: "Menu", path: "/" },
        { icon: <MessageFilled />, title: "Mensagens", path: "messages" },
        { icon: <CalendarFilled />, title: "Calendário", path: "calender"  },
        { icon: <ShoppingFilled />, title: "Vagas", isStart: true, startTitle: "Candidatos", path: "jobs"  },
        { icon: <UsergroupAddOutlined />, title: "Candidatos", path: "candidates"  },
        { icon: <PushpinFilled />, title: "Encaminhados", path: "retrieveds"  },
        { icon: <WarningFilled />, title: "Ajuda", isStart: true, startTitle: "Ajuda", path: "help"  },
    ];
    return (
        <ul className="flex flex-col mx-2 gap-2 mt-4">
            {
                items.map((item: ItemProps, index) => (
                    <Link href={item.path} key={index}>
                        {item.isStart && <p className="px-2 my-2 text-zinc-800 font-medium text-sm">{item.startTitle}</p>}
                        <Button title={item.title} icon={item.icon} />
                    </Link>
                ))
            }
        </ul>
    )
}