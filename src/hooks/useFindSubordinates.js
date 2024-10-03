import { useEffect, useState } from "react"
import { userApi } from "../api/apiPaths"
import axiosApi from "../api/axiosApi"

function useFindSubordinates(designation){
    const [result,setResult] = useState([])
    useEffect(()=>{
        findDesignation(designation)
    },[designation])
    
    
    async function findDesignation (role){
        console.log(role,'designation')
        const data = await axiosApi.post(userApi.getSubordinates,{designation:role})
        console.log(data,'---------->>>>>>>>>>>>>>>>')
        setResult( data.data)
    }

    return result
}

export default useFindSubordinates