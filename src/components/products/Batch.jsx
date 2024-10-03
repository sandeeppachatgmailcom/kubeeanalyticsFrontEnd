
import { FaPauseCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import { ImSpinner6 } from "react-icons/im";
import { useEffect, useState } from "react";
import axiosApi from "../../api/axiosApi";
import useReadLatestProductList from "../../hooks/useReadLatestProductList" 
import { productsApi } from "../../api/apiPaths";
import { loadAllProducts } from "../../store/productSlice";
import { useDispatch } from "react-redux";
const Batch = ({ batch,item }) => {
     const [tempBatch,setTempBatch] = useState(batch)
     
     const updatedList  = useReadLatestProductList()
     const dispatch = useDispatch()
     useEffect(()=>{
        updateStore() 
        
    },[ ])

    const updateStore =async ()=>{
        const result =await updatedList('')
        console.log(result,'resultresultresult')
        dispatch(loadAllProducts(result))
    }
    

    const handleChange = (e)=>{
         let temp = {
            ...tempBatch,
            sellingPrice:e?.target?.value
         }
         setTempBatch(temp)
        }
    
        const updateBatchPrice = async()=>{
            let data  = {
                itemCode :item.itemCode,
                sellingPrice:tempBatch.sellingPrice,
                batch:tempBatch.batchCode
            }
            console.log(data,'toupdate batch master')
        const result = await axiosApi.post(productsApi.updateBatchPrice,{data})
            if(result){
                console.log(result.data)
                updateStore()
            }
        } 
    return (
        <div className="w-full h-[100%] flex justify-center items-center flex-col p-2">
            <div className=" w-full flex justify-center gap-4 items-center">
                <h1 className="font-semibold text-sm "> BATCH: {tempBatch?.batchCode?.toUpperCase()} </h1>
                {tempBatch?.defaultBatch ? <ImSpinner6 className="hover animate-spin" /> : ''}

            </div>
            <h1 className="text-sm text">Qty: {tempBatch?.quantity}</h1>
            Price
            <div className="w-full justify-between flex  gap-1 p-1">

                <div className="w-6/12 flex flex-col p-1 items-center justify-center bg-white bg-opacity-10 rounded-xl" >
                    <h1 className="text-sm text" >Purchase </h1>
                    <h1>{tempBatch?.purchaseCost} </h1>

                </div>
                <div className="w-6/12 flex flex-col bg-white items-center justify-center bg-opacity-10 rounded-xl" >
                    <h1>Sale </h1>
                    <h1>{tempBatch?.price} </h1>
                </div>

            </div>
            <div className="w-full flex flex-col  items-center justify-center gap-1 p-1">
                <h1>    current Cost </h1>

                <div className="w-full flex  justify-start items-center gap-4">
                    <input type="number"  onChange={(e)=>handleChange(e)} className="w-[90%] bg-opacity-50  focus:outline-none font-semibold text-center text-3xl text-gray-600 h-10 rounded-lg p-2" name="sellingPrice" value={tempBatch?.sellingPrice} placeholder="sellingprice" id="" />
                     {batch?.sellingPrice != tempBatch?.sellingPrice?<MdBookmarks className="animate-bounce w-5 h-5" onClick={()=>updateBatchPrice() } />:''}
                </div>


            </div >
            <div className="    justify-center items-center  flex w-full  gap-4 ">
            {tempBatch?.default ?                 <FaPauseCircle className="h-5 w-5 " /> : <FaPlay className="h-5 w-5 " />}
                <FaStop className="h-5 w-5 " />
            </div>
        </div>

    )
}


export default Batch