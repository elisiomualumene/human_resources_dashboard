import {ComponentProps, ReactNode} from "react"

interface IButtonProps extends ComponentProps<'button'> {
    icon: ReactNode,
    title: string
}

export const Button = ({icon, title, ...rest}: IButtonProps) => {
    return (
        <button 
            className=" flex flex-row text-zinc-300 hover:text-white hover:font-bold text-sm items-center hover:bg-blue-500 px-2 py-[13px] gap-x-2 w-full rounded transition ease-in-out delay-50"
            {...rest}>
            {icon && icon}
            <p>{title}</p>
        </button>
    )
}