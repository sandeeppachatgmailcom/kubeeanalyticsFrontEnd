import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axiosApi from "../api/axiosApi"
import { userApi } from "../api/apiPaths"
import { setMyWork } from "../store/workSlice"


const useGetTaskList = (userId)=>{
    const [work,setWork] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        loadMyWork()
    },[userId])

    const loadMyWork = async ()=>{
        console.log(userId,'userIduserId')
     const result = await axiosApi.post(userApi.getMyWorkList,{userId:userId})
     console.log(result,'result')
     if(result){
        dispatch(setMyWork(result.data))
     }
    }


    

}


export default useGetTaskList