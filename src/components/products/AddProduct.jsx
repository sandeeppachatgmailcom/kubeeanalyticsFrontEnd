import { useEffect, useState } from "react"
import Batch from "./Batch"
import { FaWindowClose } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import useSaveItem from "../../hooks/useSaveItem";
import axios from "axios";
import axiosApi from "../../api/axiosApi";
import { productsApi } from "../../api/apiPaths";
import useGetAllProducts from "../../hooks/useGetAllProducts";
const AddProduct = ({ product,close }) => {
    const [item, setItem] = useState(product)
    const updateProductList = useGetAllProducts()
    useEffect(()=>{
        console.log(product,'product')
        setItem(product)
    },[product])
 
     

    const handleChange = (e)=>{

        const {value,name} = e.target
        console.log(value,name)
        const temp = {
            ...item,
            [name]:value
        }
        setItem(temp)
        
    }
    const updateProcust = async()=>{
        console.log(item,'temp')
        let data  = {
            ...item
            
        }
        const result = await axiosApi.post(productsApi.saveProduct,{...data})
        console.log(result,'9999999')
        if(result.data.status){
            setItem(result.data)
            updateProductList()
        }
        console.log(result,'toupdate batch master')
    }

    return (
        <div className="relative flex w-full md:flex-row flex-col h-[100%] cursor-pointer rounded-xl overflow-scroll shadow-sm border   border-violet-400 ">
            <div className="absolute flex justify-end h-10 items-center p-2   w-full">
                <FaWindowClose onClick={()=>close()} className="text-violet-800 h-5 w-5" />
            </div>
            <div className="md:w-3/12 sm:w-full  relative p-3    flex flex-col justify-center items-center  ">
                
                <div className="w-[90%] overflow-hidden flex-col items-center text-violet-700 border-violet-100 border-2 flex justify-center h-full md:h-[45%] rounded-full  " >
                    <h1 className="w-full text-center">Item Code </h1>
                    <input onChange={(e)=>handleChange(e)} type="text" maxLength={4} className="w-full 700 text-center focus:outline-none text-4xl font-bold  h-20 rounded-lg bg-transparent uppercase p-2 m-2"  name="easyCode" value={item?.easyCode|| ''} placeholder="Item Code" id="" />
                </div>
                <input onChange={(e)=>handleChange(e)} type="text" className="w-full text-violet- focus:outline-none font-semibold text-center text-3xl text-violet-700 h-20 rounded-lg p-2 m-2" name="itemName" value={item?.itemName || '' }  placeholder="Item Name" id="" />
                <div className=" absolute flex p-2 justify-end items-center h-10 bottom-0 end-0  w-full ">
                
                   {Object.keys(item).filter((member)=>{ if (item[member]) return 1}).length ?<MdBookmarks onClick={()=>updateProcust()} className="text-violet-600 w-5 h-5 animate-bounce" />:''}
                </div>
            </div>
            <div className=" w-full  md:w-9/12 h-[100%] flex items-start justify-start gap-4 flex-wrap overflow-y-scroll flex-col  lg:flex-row  p-2 bg-violet-400 text-white bg-opacity-8 ">
                
                {
                    item?.batch?.map((element, ) =>
                        <div key={element?.batchCode} className="w-full md:w-4/12 lg:w-3/12  sm:w-full h-[100%]    relative  flex flex-col   justify-center items-center overflow-hidden bg-opacity-50    bg-violet-700 rounded-xl">
                            <Batch   batch={element} item={item}   />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AddProduct