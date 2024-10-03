import axiosApi from "../api/axiosApi"

import {productsApi} from '../api/apiPaths'

const useSaveItem = ()=>{
    return saveItem 
}


async  function saveItem (product){
    const tempProduct = {
        ...product,
        batch:product?.batch?.map(({quantity,...rest})=>({
            ...rest
        }))
    }
    console.log(tempProduct,'tempProduct')
    const result =await axiosApi.post( productsApi.saveProduct,{tempProduct})
    if(result?.data){
        return result.data
    }
    else{
        return {
           status:false,
           message:'unknown Error'     
        }
    }
}

export default useSaveItem