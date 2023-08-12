import { SearchOutlined } from "@ant-design/icons"

export const Header = () => {
    return(
        <div className="flex flex-row justify-between mt-4 ml-4">

        <div>
          <h4 className="font-bold text-zinc-600 mb-2">Dashboard</h4>
          <p className="text-xs text-zinc-400">Olá Naiara, bem vinda novamente!</p>
        </div>

        <div className="flex flex-row items-center h-full bg-white rounded">
          <input type="text" placeholder="Procurar" className="w-[300px] px-2 outline-none text-sm font-bold"/>
          <SearchOutlined className="bg-blue-500 hover:bg-blue-600 text-xl p-[4px] rounded-r text-white cursor-pointer"/>
        </div>

      </div>
    )
}