import { useEffect, useState } from "react";
import { FaStarOfDavid } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import { useSelector } from "react-redux";
import useCalculateTimeDuration from "../../hooks/useCalculateTimeDuration";
import { GrView } from "react-icons/gr";
const SingleTask = ({ task, index,onClick }) => {
    const [myTask, setMyTask] = useState(task)
    const user =useSelector((state)=>state.user.user) 
    const [timeDuration,setTimeDuration] = useState(null)
    const getTimeDuration = useCalculateTimeDuration()
    useEffect(() => {
         
        setMyTask(myTask)
    }, [task])

    useEffect(() => {
        let intervalId;
        
        if (myTask.startTime) {
            intervalId = setInterval(() => {
                setTimeDuration(getTimeDuration(myTask.startTime));
            }, 1000);
        }
    
        return () => {
            clearInterval(intervalId);
        };
    }, [myTask?.startedBy?.length]);

    

        const handleChange = (event) => {
       
        let { name, value } = event.target;
        console.log(name,value);
        if(myTask[name]?.length){
            value = null
        }
        else{
            value= user.name 
            myTask.startTime = new Date().toISOString()
        }
           
        console.log(name,value);
        let temp = {
            ...myTask,
            [name]: value
        }
        setMyTask(temp);
    }
    return (
        <div  className='w-full  h-10 border border-white cursor-pointer border-opacity-85 flex items-center justify-start gap-4 p-2  bg-blue-600 bg-opacity-5'>
            <div className="w-9/12 flex justify-start items-center">
            <h1 className="w-5 text-sm text-gray-600 font-semibold" name='createdBy'  >{index + 1}</h1>
            {/* <FaStarOfDavid className= {`${myTask?.startedBy?.length ?'animate-spin text-blue-600 ':' text-orange-500'}  w-4`}  /> */}
            <h1 className="w-auto text-sm font-semibold" name='createdBy'  >{myTask?.taskName}</h1>  
            <h1 className="w-auto text-sm  " name='name' > {' -->'}  {myTask?.workList?.taskDetails}</h1>  
            <h1 className="text-sm   " name='Subject' >{myTask?.createdby[0]?.name}</h1>
            <h1 className="  text-red-400" >{ timeDuration}</h1>
            
            </div>
            <h1 className="text-sm w-2/12 " name="createdAt" >{myTask?.createdAt}</h1>
            <button
                onClick={(e) => handleChange({ target: { name: "startedBy", value: myTask?.startedBy } })}
            > 
                {myTask?.startedBy?.length ? <FaStarOfDavid className= {`${myTask?.startedBy?.length ?'animate-spin text-orange-600 h-10 ':' text-orange-500'}  w-4`}  /> : <FaUnlock  className="text-blue-600 h-10 " />}
            </button>
            
            <GrView onClick={()=>onClick()} className="w-10 text-gray-500" />
        </div>
    )
}

export default SingleTask 