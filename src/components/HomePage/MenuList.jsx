
import { useSelector } from "react-redux"
import useRouter from "../../hooks/useRouter"
import { useEffect, useState } from "react"


const Menulist = ()=>{
    const navigate = useRouter()
    const [selectedIndex , setSelectedIndex] = useState(0)
    const user = useSelector((state)=>state?.user?.user)||{}
    const handleDashBoard = (menu)=>{
        Object.keys(user).length ? navigate('homePage/'+menu) :navigate('') 
    }

    useEffect(()=>{
        !Object.keys(user).length ? navigate(''):'' 
    })
    return(
        <div className=" w-full  h-full justify-start flex flex-col gap-1 p-2    ">
            {
                Object.keys(user).length && Object.keys(user?.access).map((menu,index)=> <div key={index} onClick={()=>{setSelectedIndex(index);handleDashBoard(menu)}} 
               className={`${selectedIndex == index ? 'bg-blue-300 bg-opacity-5 text-blue-800 shadow-md':'' } flex rounded-e-full w-[90%] justify-start   items-center text-sm p-2 h-10  cursor-pointer `} >  {menu} </div>  )   
            }
        </div>
    )
}

export default Menulist