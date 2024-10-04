import { useSelector } from "react-redux"
import ClientList from "../components/Billing/ClientList"
import ProductSearchList from "../components/Billing/ProductSearchList"
import SearchBar from "../components/products/SearchBar"
import ClientKart from "../components/Billing/ClientKart"
import BillSummary from "../components/Billing/BillSummary"


const Purchase = ()=>{
    const currentBill = useSelector((state)=>state.bill)
    const searchKey = useSelector((state) => state.product.searchKey)
    return(
        <div className=" flex flex-col justify-start items-center w-full h-[100%]  bg-opacity-5 rounded-xl gap-4 relative  ">
                <div className=" flex justify-center items-center gap-5 w-full h-[10%] ">
                   <h1 className="text-violet-500 text-2xl font-bold "> PURCHASE   </h1>
                    <div className="xl:w-3/6 md:w-3/4 h-[100%] bg-violet-400 rounded-full bg-opacity-35  flex w-full">
                            <SearchBar/>
                    </div>
                </div>
                <div className="flex xl:flex-row   flex-col-reverse w-full h-[70%] ">
                    <div className=" flex w-full xl:h-[100%] relative   h-[70%] overflow-scroll    xl:w-10/12 justify-center items-center  ">
                    {searchKey.length &&  Object.keys(currentBill.client).length ? <ProductSearchList/>:'' }
                     <div className="w-full h-[100%] overflow-scroll   ">
                        <ClientKart/>   
                     </div>
                     
                     
                    </div>
                    <div className="flex w-full xl:h-[100%] h-[30%] overflow-scroll justify-center  items-center  xl:w-2/12  ">
                        <ClientList/>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full h-[15%] bg-gray-500">
                    <BillSummary/>
                </div>
        </div>
    )
}


export default Purchase
