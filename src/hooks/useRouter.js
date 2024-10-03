import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changePage } from "../store/page"

const useRouter = ()=>{
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return function (pathName){
        dispatch(changePage(pathName))
        navigate('/'+pathName)
    }

}

export default useRouter