import { useEffect, useState } from "react";
import Product from "../products/Product.Jsx"
import { MdOutlineSaveAlt } from "react-icons/md";
import axiosApi from "../../api/axiosApi";
import { productsApi } from "../../api/apiPaths";
import { useDispatch, useSelector } from "react-redux";
import useLatestProduct from "../../hooks/useLatestProduct";
import { addProductstoBill } from "../../store/billingSlice";
import useAddToKart from "../../hooks/useAddToKart";
import { setsearchKey } from "../../store/productSlice";

const SelectProduct = ({ product, closeCompnent }) => {
    const [item, setItem] = useState(product)
    const dispatch = useDispatch()
    const searchKey = useSelector((state) => state.product.searchKey)
    const latestPriceQty = useLatestProduct()
    const [billedQty, setBilledQty] = useState(0)
    const addTokart = useAddToKart()

    useEffect(() => {
        const timOut = setTimeout(() => {
            closeCompnent()
        }, 5000)

        return
        clearTimeout(timOut)

    }, [])
    const getPriceDetails = async () => {
        const result = await latestPriceQty(product)
        console.log(result.data, '32416434646674646')
        const temp = {
            ...result,
            quantity: result?.batch?.reduce((totalQty, item) => totalQty + (item?.quantity || 0), 0) || 0
        };
        console.log(temp, 'this is temporary')
        setItem(temp)
    }

    const addtoKart =async () => {
        let tempQty = billedQty;

        const billedItems = item?.batch?.map((batch) => {
            if (tempQty > 0) {
                const qtyToBill = tempQty > batch.quantity ? batch.quantity : tempQty;
                tempQty -= qtyToBill;
                return {
                    itemCode: item?.itemCode,
                    itemName: item?.itemName,
                    easyCode: item?.easyCode,
                    batchCode: batch?.batchCode,
                    decreasedQty: qtyToBill,
                    sellingPrice: batch?.sellingPrice
                };
            } else {
                return null;
            }
        }).filter(item => item !== null);
        console.log(billedItems, 'billedItems - showing decreased quantities from each batch');
        const update =await  addTokart(billedItems) 

        if(update.status) {
            dispatch(addProductstoBill(billedItems))
            dispatch(setsearchKey(''))
        }
             
    };
    useEffect(() => {
        //setItem(product)
        getPriceDetails()
    }, [product])

    useEffect(() => {
        console.log(item, 'latest Item')
    }, [item])

    return (
        <div className="w-full h-[100%]  rounded-xl border-2 overflow-hidden  bg-violet-400  ">
            <div className="w-full h-[50%] border-b-2 ">
                <Product product={item} />
            </div>
            <div className="relative flex flex-col gap-2 justify-center w-full h-[50%]  bg-gray-500  items-center">
                <h1 className="w-full text-center text-white text-sm font-semibold " >avalable Stock:{item?.quantity}</h1>
                {billedQty > item?.quantity ? <span className="text-orange-500" >{'not enough Stock'}</span> : ''}
                <input name="quantity" onChange={(e) => setBilledQty(e.target.value)} className="w-20 h-10 rounded-md focus:outline-none bg-violet-400  border text-center text-2xl focus:outline-violet-700" max={3} minLength={1} type="number" id="" />
                {billedQty < item?.quantity ? <MdOutlineSaveAlt onClick={() => addtoKart()} className="absolute bottom-3 cursor-pointer end-3 text-white w-6 h-6 " /> : ''}
            </div>
        </div>
    )
}

export default SelectProduct