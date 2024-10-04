import { productsApi } from "../api/apiPaths"
import axiosApi from "../api/axiosApi"


const useLatestProduct = ()=>{

    const latestPriceQty =async (product)=>{
        const result = await axiosApi.post(productsApi.readlatestProduct,product)
        console.log(result.data,'---------------------->>>>>>>>>>>>>>>')
        return result.data
    }

    return latestPriceQty

}

export default useLatestProduct