import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { sortListByID, sortListByName } from '../constants/sorting'
import { APIResponse, SortFunction, ThemeInterface } from '../components/typings/typings';

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
    }, [category, compendium, sort, sortDictionary])

    useEffect(() => {
      const newFiltered = [...filteredList]
      setFilteredList(newFiltered.sort(sortDictionary[sort]))
    }, [filteredList, sort, sortDictionary])


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

