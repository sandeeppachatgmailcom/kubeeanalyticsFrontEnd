import { productsApi } from "../api/apiPaths"
import axiosApi from "../api/axiosApi"


const useAddToKart = ()=>{

    async function addTokart   (productList){
        try {
            const data =await axiosApi.post(productsApi.addTokart,{list:productList})
            console.log(data,'axios data')
            return data.data
        } catch (error) {
            
        }    
    }

return addTokart 
}

export default useAddToKart