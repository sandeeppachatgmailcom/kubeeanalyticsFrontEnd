import { useDispatch, useSelector } from "react-redux"
import BilledProduct from "./BilledProduct"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useEffect } from "react";
import { removeProductFromBill } from "../../store/billingSlice";
import axiosApi from "../../api/axiosApi";
import { productsApi } from "../../api/apiPaths";

const ClientKart = () => {
    const billedItems = useSelector((state) => state.bill.productList) || []
    const dispatch = useDispatch()
    
    const handleRemoveFromKart =async (item)=>{
        try {
              const result = await axiosApi.post(productsApi.removeFromkart,item)
                if(result.data.status){
                dispatch(removeProductFromBill(item))
            }
            } catch (error) {
        }
    }
    useEffect(()=>{
        console.log(billedItems)
    },[billedItems])
    return (
        <div  className="w-full rounded-xl h-[100%]     flex flex-col    justify-start   items-center ">
            <div   className="flex w-full h-10  bg-violet-500   items-center cursor-pointer ">
                <div className="w-1/12 text-white  h-[100%] flex flex-col justify-center items-center  ">

                    easyCode

                </div>
                <div className="w-10/12 justify-start  flex    items-center  h-[100%]  text-white  bg-opacity-8 ">
                    <h1 className="text-sm text-right  font-semibold w-4/12  ">  batchCode || itemName </h1>
                    <h1 className="text-sm text-right  font-bold w-2/12 text">  Price   </h1>
                    <h1 className="text-sm text-right  text w-2/12 "> Quantityty  </h1>
                    <h1 className="text-sm text-right  text w-2/12 ">Item Total </h1>
                </div>
            </div>
            <div   className="w-full   flex flex-col justify-start  items-center   ">
                {billedItems?.map((item,index) => 
                <div key={item.itemCode+index} 
                // onClick={() => {setAddedItem(item)}} 
                className="h-10 w-full flex justify-between items-center     rounded   border border-violet-200   ">
                    <BilledProduct product={item} />
                    <RiDeleteBin2Fill onClick={()=>handleRemoveFromKart(item)} className="abs olute end-2 text-violet-500 h-[100%]  bottom-1" />
                </div>)}
            </div>
        </div>
    )
}

export default ClientKart
