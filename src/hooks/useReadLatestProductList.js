import { productsApi } from "../api/apiPaths"
import axiosApi from "../api/axiosApi"

const useReadLatestProductList = ()=>{

const readAllProducts =async (searchKey)=>{
   
   const data = await axiosApi.post(productsApi.readAllProducts,{searchKey:searchKey||''})
   console.log(data,'----------************-------------')
   return data.data  
   
}

return readAllProducts


}
export default  useReadLatestProductList