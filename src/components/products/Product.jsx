import { useEffect, useState } from "react"
import useSaveItem from "../../hooks/useSaveItem"
import { batch } from "react-redux"



// product object 
// {
//     itemName:'Royal Mirag',
//     easyCode:'1002',
//     itemCode:'S00002',
//     quantity:40,
//     price:400.00
// } 

const Product = ({product})=>{
    const [item,setItem] = useState(product)
    useEffect(()=>{
        setItem(product)
    },[product])
    
    return(
        <div className="flex w-full h-[100%] cursor-pointer ">
            <div className="w-2/6   flex flex-col justify-center items-center  ">
                <div className="w-10 items-center text-violet-700 flex justify-center h-10 rounded-full border " > 
                        {item?.easyCode}
                </div>
            </div>
            <div className="w-4/6   flex justify-center  items-center flex-col p-2 bg-violet-400 text-white bg-opacity-8 ">
                 <h1 className="text-sm font-semibold ">{item?.itemName}</h1>
                
                  
                 <h1 className="text-sm font-bold text">$: {item?.batch?.filter((batch)=> batch.defaultBatch)[0]?.price || 0.00}/-</h1>
                 <h1 className="text-sm text">Qty: {item?.batch?.filter((batch)=> batch.defaultBatch)[0]?.quantity || 0.00}</h1>
            </div>
        </div>
    )
}

export default Product