import { useEffect, useState } from "react"
import axiosApi from "../api/axiosApi"
import { productsApi } from "../api/apiPaths"
import Products from "../pages/products"
import { useDispatch } from "react-redux"
import { loadAllProducts } from "../store/productSlice"



const useGetAllProducts = ()=>{
 const dispatch = useDispatch()
const readAllProducts =async (searchKey)=>{
    const data = await axiosApi.post(productsApi.readAllProducts,{searchKey:searchKey||''})
    console.log(data,'----------************-------------')
    if(data){ 
        console.log('object')
        dispatch(loadAllProducts(data.data))
    }
}

 return readAllProducts
}

export default useGetAllProducts