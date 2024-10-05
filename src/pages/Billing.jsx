import { useDispatch, useSelector } from "react-redux"
import ClientList from "../components/Billing/ClientList"
import ProductSearchList from "../components/Billing/ProductSearchList"
import SearchBar from "../components/products/SearchBar"
import ClientKart from "../components/Billing/ClientKart"
import BillSummary from "../components/Billing/BillSummary"
import { setbillType } from "../store/billingSlice" 
import useGetAllClienst from "../hooks/useGetAllClienst"
import { useEffect, useState } from "react"
import useGetAllProducts from "../hooks/useGetAllProducts"


const Billing = () => {
    const bill = useSelector((state) => state.bill)
    const currentBill = useSelector((state) => state.bill)
    const searchKey = useSelector((state) => state.product.searchKey)
    const [message,setMessage] =useState('')
    const updateProductList = useGetAllProducts()
    const updateClientList = useGetAllClienst()
    const dispatch = useDispatch()
    useEffect(()=>{
        updateClientList()
        updateProductList()
    })
    useEffect(()=>{
         console.log(bill.type.length,'a+a+aa+a+a+a+a+a+a+bill')
          if(!bill.type.length) setMessage('Select the Billtype')
          else if(!Object.keys( bill.client).length) setMessage('Search for the Client here -->>')
          else setMessage('Search for the item ')  
     
    },[bill])
     
    return (
        <div className=" flex flex-col justify-start items-center w-full h-[100%]  bg-opacity-5 rounded-xl  relative  ">
            <div className=" flex justify-center gap-4 items-center w-full h-[10%] m-2 ">
                
                <small>{message}</small>
                <div className="xl:w-3/6 md:w-3/4 h-[100%] bg-violet-400 rounded-full bg-opacity-35   flex w-full">
                    <SearchBar />
                </div>
                
                <select disabled={bill?.type?.length ? true : false} onChange={(e) => dispatch(setbillType(e.target.value))} 
                className="focus:outline-none w-2/12 h-[100%] bg-violet-300 rounded-sm">
                    <option selected  value="">Select</option>
                    <option value="SALES">SALES</option>
                    <option value="PURCHASE">PURCHASE</option>
                </select>
            </div>
            <div className="flex justify-center border rounded-t-xl overflow-hidden items-center w-full h-[10%] bg-gray-500">
                <BillSummary />
            </div>
            <div className="flex xl:flex-row border rounded-xl    flex-col-reverse w-full h-[70%] ">
                <div className=" flex w-full xl:h-[100%] relative   h-[70%] overflow-hidden    xl:w-10/12 justify-center items-center  ">

                    <div className="w-full h-[100%]  overflow-scroll absolute  ">
                        <ClientKart />
                    </div>
                    <div className="w-full h-[100%]  ">
                        {searchKey.length && Object.keys(currentBill.client).length ? <ProductSearchList /> : ''}
                    </div>

                </div>
                {bill?.type?.length ?
                <div className="flex w-full border border-x-violet-700   xl:h-[100%] h-[30%] overflow-scroll justify-center  items-center  xl:w-2/12  ">
                    <ClientList />
                </div>:''}
            </div>
            
        </div>
    )
}


export default Billing
