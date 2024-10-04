import { useDispatch, useSelector } from "react-redux"
import BilledProduct from "./BilledProduct"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useEffect } from "react";
import { removeProductFromBill } from "../../store/billingSlice";

const ClientKart = () => {
    const billedItems = useSelector((state) => state.bill.productList) || []
    const dispatch = useDispatch()
    
    useEffect(()=>{
        console.log(billedItems)
    },[billedItems])
    return (
        <div className="w-full h-[100%] rounded-xl    flex flex-col overflow-hidden   justify-start   items-end ">
            <div className="flex w-full h-[10%] bg-violet-500 justify-between cursor-pointer ">
                <div className="w-1/12 text-white  h-[100%] flex flex-col justify-center items-center  ">

                    easyCode

                </div>
                <div className="w-11/12   flex justify-start   items-center  h-[100%]  text-white-700 bg-opacity-8 ">
                    <h1 className="text-sm font-semibold w-4/12  ">  batchCode || itemName </h1>
                    <h1 className="text-sm font-bold w-1/12 text">  sellingPrice  </h1>
                    <h1 className="text-sm text w-1/12 "> Qty  </h1>
                    <h1 className="text-sm text w-1/12 ">Item Total </h1>
                </div>
            </div>
            <div className="w-full overflow-scroll h-[90%] flex flex-col justify-start    ">
                {billedItems?.map((item,index) => 
                <div key={item.itemCode+index} onClick={() => {setAddedItem(item);alert('hello')}} className="w-full flex justify-between items-center     rounded  overflow-hidden border border-violet-200     h-10  ">
                    <BilledProduct product={item} />
                    <RiDeleteBin2Fill onClick={()=>dispatch(removeProductFromBill(item))} className="abs olute end-2 text-violet-500 h-[100%]  bottom-1" />
                </div>)}
            </div>
        </div>
    )
}

export default ClientKart