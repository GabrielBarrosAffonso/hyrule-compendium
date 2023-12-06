import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { APIResponse, ThemeInterface } from '../components/typings/typings';

const ThemeContext = createContext<ThemeInterface | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [compendium, setCompendium] = useState<APIResponse[]>([])
    const [loading, setLoading ] = useState<boolean>(false)

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



    return (
        <ThemeContext.Provider value={{compendium, loading, setCompendium}}>
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

