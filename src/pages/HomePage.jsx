import { Outlet } from "react-router-dom"
import Menulist from "../components/HomePage/MenuList"


const HomePage = ()=>{
    return(
        <div className="w-full flex   bg-opacity-85 h-[100%] " >
            <div className="w-2/12 flex flex-col  ">
                <Menulist/>
            </div>
            <div className="w-10/12 flex  h-[100%]  overflow-scroll   ">
                <Outlet/>
            </div>
        </div>
    )
}


export default HomePage