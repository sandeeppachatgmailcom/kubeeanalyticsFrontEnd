import { useSelector } from "react-redux"
import { FaCloudUploadAlt } from "react-icons/fa";

const BillSummary = () => {
    const bill = useSelector((state) => state.bill)
    return (

        <div className=" flex justify-between items-center w-full  h-[100%] p-2 bg-violet-500" >
            <h1 className="text-5xl   font-thin text-white "> Total Amount :
                {bill && bill?.productList?.reduce((sum, item) => {
                    return sum + (parseInt(item.decreasedQty) || 0) * (item?.sellingPrice || 0);
                }, 0)}

            </h1>
            <FaCloudUploadAlt className="w-10 h-10 text-white" />
        </div>
    )
}

export default BillSummary