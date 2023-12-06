import { useMemo, useState } from "react"
import { useThemeContext } from "../../context/themeContext"
import { APIResponse } from "../typings/typings"

const Header = () => {
    const { compendium } = useThemeContext()
    const [searchValue, setSearchValue] = useState<string>('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value.toLowerCase())
    }

    const searchItems: APIResponse[] = useMemo(() => {
        return searchValue.length > 3 ? compendium.filter((i: APIResponse) => i.name.match(searchValue)).slice(0, 4) : []
    }, [compendium, searchValue])

    return(
        <header className="p-6 flex justify-between flex-row">
            <a href="/">
                <h1 className="text-center font-thin text-2xl">HYRULE COMPENDIUM</h1>
            </a>
            <div className="relative min-w-[300px]">
                <input type="text" 
                className="border p-2 w-full"
                placeholder="Search"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
                />
                <div className={`absolute h-fit p-2 bg-white z-20 w-full rounded-b border}`}>
                    {searchItems.map((i) => {
                        return <a href={`/${i.id}`} className="flex flex-row max-h-[50px] mt-5">
                                    <img src={i.image} alt={`${i.name}`} width={50} className="rounded-full"/>
                                    <span className="p-1">{i.name}</span>
                                </a>    
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header