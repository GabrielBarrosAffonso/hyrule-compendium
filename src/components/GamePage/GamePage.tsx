import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { capitalizeFirstLetter } from "../../constants/listing"

const ItemPage = () => {
    const [item, setItem] = useState<any>()
    const param = useParams()


    useEffect(() => {
        async function getItem(){
            try{
                await axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${param.id}`)
                .then(res => setItem(res?.data?.data))
            }
            catch (err){
                console.error(err)
            }
        }
        getItem()
    }, [param.id])

    useEffect(() => {
        console.info(item)
    }, [item])

    return(
        <>
            {
            item ? 
            <main className="bg-zeldaPattern p-3 bg-[length:30rem] min-h-screen h-full flex items-center justify-center">
                <div className="bg-white max-w-[60rem] m-6 p-6 rounded-xl grid grid-cols-6 grid-rows-[40px_40px_1fr] max-h-fit h-fit">
                    <img className="rounded-xl col-span-2 row-span-3" src={item.image} alt={`${item.name}`} />
                    <h1 className="col-start-3 col-end-7 text-2xl h-[40px]">{`${capitalizeFirstLetter(item.name)}`}</h1>
                    <div className="tags col-start-3 col-end-7  h-[40px]">
                        <span className="bg-mediumGreen text-white text-center items-center rounded-full align-center flex justify-center max-w-[150px]">{`${capitalizeFirstLetter(item.category)}`}</span>
                        {
                            item.dlc ? <span className="max-w-[100px] bg-yellow-300 flex items-center justify-center text-center">DLC</span> : <></>
                        }
                    </div>
                   
                    <p className="col-start-3 col-end-7 bg-gray p-5 bg-slate-100 rounded-md">
                        {item.description}
                    </p>
                </div>
            </main> : 
            <h4>ITEM NOT FOUND</h4>
            }
        </>
    )
}

export default ItemPage