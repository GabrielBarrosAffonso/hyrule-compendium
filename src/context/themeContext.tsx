import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { sortListByID, sortListByName } from '../constants/sorting'

interface APIResponse {
  name: string, // string; entry name
  id: number,  // integer; ID as shown in compendium
  category: string, // string; "equipment"
  description: string, // string; short paragraph
  image: string, // string; URL of image
  common_locations: string[] | unknown, // array of strings or null for unknown; where the entry is commonly seen
  drops?: string[] | unknown,
  dlc?: boolean,
  properties?: {
    attack: number, // integer; damage the entry does (0 for sheilds and arrows)
    defense: number, // integer; defense the entry offers (0 for equipment that aren't shields)
    effect: string, // string; special effect of the weapon (e.g. "wind razor"), empty if none
    type: string // string; type of weapon (e.g. "one-handed weapon")
  }
  hearts_recovered?: number, // float; health recovered when eaten raw
  cooking_effect?: string, // string; special effect when used in a dish/elixir (e.g. "stamina recovery"), empty if none
  fuse_attack_power?: number // integer; damage added when fused with a weapon
  edible?: boolean
}

interface ThemeInterface {
    compendium: APIResponse[], 
    loading: boolean,
    filteredList: APIResponse[],
    sort: string,
    setCompendium: React.Dispatch<React.SetStateAction<APIResponse[]>>,
    setCategory: React.Dispatch<React.SetStateAction<string | undefined>>
    setSort: React.Dispatch<React.SetStateAction<string>>
}

type SortFunction = (a: APIResponse, b:APIResponse) => number

const ThemeContext = createContext<ThemeInterface | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [compendium, setCompendium] = useState<APIResponse[]>([])
    const [filteredList, setFilteredList] = useState<APIResponse[]>(compendium)
    const [loading, setLoading ] = useState<boolean>(false)
    const [category, setCategory] = useState<string | undefined>(undefined)
    const [sort, setSort] = useState<string>("name")

    const sortDictionary: Record<string, SortFunction> = {
      "name": sortListByName,
      "id": sortListByID
    }

    useEffect(() => {
        async function getData() {
          try { 
            setLoading(true)
            const response = await axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`);
            setCompendium(response?.data?.data);
            setLoading(false)
          } catch (error) {
            console.error("Erro ao obter dados:", error);
          }
        }
      
        getData();
    }, []);



    useEffect(() => {
      if(category){
        setLoading(true)
        const filtered = compendium.filter(obj => obj.category === category)
        const sorted = filtered.sort(sortDictionary[sort])
        setFilteredList(sorted)
        setLoading(false)
      } else {
        setFilteredList(compendium.sort(sortDictionary[sort]))
      }
    }, [category, compendium])

    useEffect(() => {
      const newFiltered = [...filteredList]
      setFilteredList(newFiltered.sort(sortDictionary[sort]))
    }, [sort])


    return (
        <ThemeContext.Provider value={{compendium, loading, filteredList, sort, setCompendium, setCategory, setSort}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = (): ThemeInterface => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
  };

export { ThemeProvider, ThemeContext, useThemeContext }

