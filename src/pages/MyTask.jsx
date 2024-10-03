import { useEffect, useState } from "react";
import NewTask from "../components/Mytask/NewTask";
import SingleTask from "../components/Mytask/SingleTask"
import { BiLayerPlus } from "react-icons/bi";
import useGetTaskList from "../hooks/useGetTaskList";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
const MyTask = ()=>{
    const user = useSelector((state)=>state.user.user)
    const [selectedTask,setSelectedtask] = useState()
    useGetTaskList(user.userId)
    const taskList =  useSelector((state)=>state.work.workList)
    const [viewNewcomponent,setViewNewcomponent ] = useState(false)
    useEffect(()=>{
        console.log(taskList,'taskList',user)
    },[taskList,user])
    return(
        <div className="flex relative bg-gray-400 bg-opacity-5 flex-col w-full h-full overflow-hidden rounded-xl">
           <div className="h-20 w-full justify-center items-center flex p-2">
                <div className="bg-gray-600 h-[100%] overflow-hidden text-gray-500 bg-opacity-5 p-1  flex justify-between items-center w-6/12 rounded-full">
                <BiSolidCategoryAlt className="w-1/12 h-8 p-1 " />
                    <input type="text" className="bg-transparent h-full w-10/12 focus:outline-none p-2 text-2xl font-thin" name=" h-20 " id="" />
                    <IoIosSearch className="w-1/12 h-8 p-1" />
                </div>
           </div>
           {
            taskList && taskList?.map((task,index)=> <SingleTask key={index} task={task} onClick={()=>{setSelectedtask(task); setViewNewcomponent(true)}} index={index} />)
           }
           
           <div onClick={()=>setViewNewcomponent(!viewNewcomponent)}  className="absolute bottom-5 end-8 border bg-gray-200 cursor-pointer h-12 w-12 flex justify-center items-center  rounded-full" >
                <BiLayerPlus className="text-blue-500   m-1" />
           </div>
         
          
           {
            viewNewcomponent ?  
            <div className=" absolute w-9/12 h-[70%] rounded-md overflow-hidden shadow-xl  bottom-20 end-20 bg-transparent  ">
                <NewTask task={selectedTask} closeWindow={()=>setViewNewcomponent(!viewNewcomponent)} />
            </div>:''
           }
           
        </div>
    )
}

export default MyTask