import './App.css';
import { useThemeContext } from './context/themeContext';
import { capitalizeFirstLetter, categories } from './constants/listing'

function App() {
  const { loading, filteredList, sort, setSort, setCategory } = useThemeContext()

  return (
    <div className="App">
        <main className="bg-zeldaPattern p-3 bg-[length:30rem] h-full min-h-screen">
        <nav className="p-2 flex justify-between">
          <div className=''>
            {
              categories.map((c: string) => {
                return <button className="m-1 p-1 bg-white rounded-sm min-w-[100px] font-thin" onClick={() => setCategory(c === "All" ? undefined : c.toLowerCase())}>{c}</button>
              })
            }
          </div>
          <button className="m-1 p-1 bg-white rounded-sm min-w-[100px] font-thin" onClick={() => {sort === "name" ? setSort("id") : setSort("name")}}>Sort By: {sort}</button>
        </nav>
        {
          loading ? 
          <></> :           
          <ul className='flex items-center max-w-full flex-wrap justify-center'>
            {
              filteredList.map((i: any) => {
                return (
                  <li key={i.id} className="w-32 h-48 m-2 p-2 flex flex-col items-top bg-white rounded-md relative">
                    <span className="bg-mediumGreen text-white rounded-full absolute top-[-10px] right-[-10px] p-1">{i.id}</span>
                    <img className="rounded-md" src={`${i.image}`} alt={`${i.name}`} />
                    <a href={`/${i.id}`} className="font-thin p-1"> {capitalizeFirstLetter(i.name)}</a>
                  </li>
                )
              })
            }
          </ul>
        }

        </main>
    </div>
  );
}

export default App;
