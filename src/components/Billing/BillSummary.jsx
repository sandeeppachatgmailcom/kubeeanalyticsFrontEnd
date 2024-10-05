import { useDispatch, useSelector } from "react-redux"
import { FaCloudUploadAlt } from "react-icons/fa";
import useSaveTransaction from "../../hooks/useSaveTransaction";
import {   addClienttoBill, clearmyKart, setBillNumber, setbillType } from "../../store/billingSlice";
import { MdAddchart } from "react-icons/md";
const BillSummary = () => {
    const bill = useSelector((state) => state.bill)
    const saveTransaction = useSaveTransaction()
    const dispatch = useDispatch()
    const handleSaveTransaction =async ()=>{
        const result =await saveTransaction()
        console.log(result,'resultresult')
         dispatch(setBillNumber(result?.transactionSummary?.billnumber) )
        
    }
    const newBill = () => {
        console.log("Before clearing cart:", bill.productList);
        
        dispatch(setBillNumber(''));
        dispatch(setbillType(''));
        dispatch(clearmyKart([]));
        dispatch(addClienttoBill({}));
    
        console.log("After clearing cart:", bill.productList);
    };
    
    return (

        <div className=" flex justify-between items-center w-full  h-[100%] p-2 bg-violet-500" >
            <h1 className="   font-bold text-white "> Total Amount :
                {Object.keys(bill).length && bill?.productList?.reduce((sum, item) => {
                    return sum + (parseInt(item.quantity) || 0) * (item?.Price || 0);
                }, 0)}
            </h1>
            <h1 className="    font-bold text-white "> Invoice Number :
                 {bill?.billNumber.length ? bill?.billNumber:'new Invoice'}
            </h1>
            <button onClick={()=>handleSaveTransaction()} className="w-10 h-10 flex flex-col pe-9 items-center justify-center text-white" > Save <FaCloudUploadAlt  />
            </button>
            <button onClick={()=>newBill()} className="w-10 h-10 flex flex-col pe-9 items-center justify-center text-white" > <MdAddchart />  <FaCloudUploadAlt  />
            </button>
            
        </div>
    )
}

export default BillSummary



// {
//     "status": true,
//     "message": "Transaction created successfully",
//     "transactionSummary": {
//         "status": true,
//         "message": "success",
//         "billnumber": "PR10000001",
//         "clientId": "US10000009",
//         "totalAmount": 11112,
//         "createdUser": "hr000001",
//         "deleted": false,
//         "type": "PURCHASE",
//         "billDate": "2024-10-05T11:29:40.750Z"
//     },
//     "transactionDetails": [
//         {
//             "status": true,
//             "message": "creation Success",
//             "itemCode": "S00001",
//             "itemName": "Sugar Kandy ",
//             "easyCode": "1001",
//             "batchCode": "bt0002",
//             "quantity": 1,
//             "Price": 11112,
//             "type": "PURCHASE",
//             "billnumber": "PR10000001"
//         }
//     ]
// }