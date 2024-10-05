
import { useEffect, useState } from "react"
import useSaveItem from "../../hooks/useSaveItem"
import { batch } from "react-redux"



// BilledProduct object 
// {
//     itemName:'Royal Mirag',
//     easyCode:'1002',
//     itemCode:'S00002',
//     quantity:40,
//     price:400.00
// } 

const BilledProduct = ({product})=>{
    const [item,setItem] = useState(product)
    useEffect(()=>{
        console.log(product,'oppppppppppp')
        setItem(product)
    },[product])
    
    return(
        <div className="flex w-full h-[100%] cursor-pointer ">
            <div className="w-1/12   flex flex-col justify-center items-center  ">
                <div className="w-full  items-center  flex justify-center h-10    " > 
                        {item?.easyCode}
                </div>
            </div>
            <div className="w-10/12   flex justify-start   items-center   bg-white text-violet-700 bg-opacity-8 ">
                 <h1 className="text-sm     text-start w-4/12  ">  {item?.batchCode?.toUpperCase() || 0.00} || {item?.itemName}</h1>
                 <h1 className="text-sm     text-right w-2/12">  {item?.Price || 0.00}/-</h1>
                 <h1 className="text-sm     text-right w-2/12 "> {Math.abs( item?.quantity) || 0.00}</h1>
                 <h1 className="text-sm     text-right w-2/12 "> {(Math.abs( item?.quantity) || 0.00) *(item?.Price || 0.00) }</h1>
            </div>
        </div>
    )
}

export default BilledProduct