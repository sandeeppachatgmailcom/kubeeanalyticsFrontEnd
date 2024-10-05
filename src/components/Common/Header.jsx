import { useDispatch, useSelector } from "react-redux"

import { FaPowerOff } from "react-icons/fa6";
import { AiOutlineLogin } from "react-icons/ai";
import { logout } from "../../store/userSlice";
import useRouter from "../../hooks/useRouter";
import { useEffect } from "react";

const Header = ()=>{
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    const navigate = useRouter()
    // useEffect(()=>{
    //     !Object.keys(user).keys.length ? navigate(''):''
    // },[])

    let Dpname = Object.keys(user).length? user?.firstname?.split(' ')?.map((item)=>item[0])?.join('').toUpperCase():''
    const handleLogout = ()=>{
        navigate('')
        dispatch(logout())
    }
    return(
        <div className="w-full h-[100%] flex justify-between gap-2 items-center ">
        <div className="w-full h-[100%] flex justify-start gap-2 items-center ">
        {/* <h1 className="h-10 p-2 font-bold uppercase text-sm text-violet-600">{   user?.designation }</h1> */}
        </div>
        <div className="w-full h-[100%] flex justify-end gap-2 items-center ">
            <div className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg    ">
                { Dpname }
            </div>
            <FaPowerOff onClick={()=>handleLogout()} className="w-8 h-8 cursor-pointer rounded-full flex items-center text-red-600 justify-center   shadow-lg p-1 " />
        </div>
        </div>

    )
}

export default Header