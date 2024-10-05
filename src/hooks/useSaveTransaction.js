import { useSelector } from "react-redux"
import axiosApi from "../api/axiosApi"
import { productsApi } from "../api/apiPaths"



const useSaveTransaction=()=>{
const bill =  useSelector((state)=>state?.bill)
const user =  useSelector((state)=>state?.user?.user)


async  function saveTransaction  (){
        if(bill?.type?.length && Object.keys(bill?.client).length){
            let tempBillSummary = {
                billnumber: bill?.billnumber,
                clientId: bill?.client?.userId,
                totalAmount: bill?.productList?.reduce((cum, item) => cum += (item?.Price || 0) * (item?.quantity || 0), 0),
                createdUser: user?.userId,
                deleted: false,
                type:bill?.type,
                billDate:new Date(Date.now())
            }

             let billDetails = bill?.productList.map((items)=>{ return {...items,billnumber:bill.billnumber}})
             const result = await axiosApi.post(productsApi.saveTransaction,{summary:tempBillSummary,details:billDetails})
             console.log(result)
             return result.data
             
        }
    }

return saveTransaction
}
export default useSaveTransaction