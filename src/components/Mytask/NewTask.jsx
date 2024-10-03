import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useFindSubordinates from "../../hooks/useFindSubordinates";
import axiosApi from "../../api/axiosApi";
import { adminApi } from "../../api/apiPaths";
import { updateWork } from "../../store/workSlice";
import { RiRadioButtonLine } from "react-icons/ri";
const NewTask = ({ task,closeWindow }) => {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.user)
    const [missingField, setMissingField] = useState('')
    const subordinates = useFindSubordinates(user.designation.role) || []


    useEffect(() => {
        console.log(task,'tasktask')
        setFormData(task)
    }, [task])


    const handleChange = (e) => {
        setMissingField(null)
        const { name, value } = e.target
        
        const tempformData = {
            ...formData,
            [name]: value
        }
        setFormData(tempformData)
    } 

    const saveTask = async () => {
        
        let temp = ''
        formData ? Object.keys(formData)?.forEach((item) => {
            if (!formData[item].length) temp += temp.length ? ' ,' : '' + item
        }) : ''
      
        // if (temp.length) setMissingField(temp)
        // else{
            const saveTask = await axiosApi.post(adminApi.saveTask,{...formData,userId:user.userId})
            console.log(saveTask)
            if(saveTask.data.status){
                setFormData({
                    ...saveTask.data
                })
                dispatch(updateWork(saveTask.data))

            }
        // }


    }


    return (
        <div className="w-[100%] h-[100%] text-sm flex flex-col relative bg-blue-50  bg-opacity-80 overflow-scroll ">
            <div className="text-sm p-1 h-10 flex items-center justify-start  bg-blue-500 bg-opacity-90">
            <div className=" w-3/6    flex justify-between h-10  gap-4 p-2     ">
            <h1 className="text-sm p-1  "> Create Task </h1>
                {missingField ? <h1 className="w-full text-sm text-center text-red-600" >{missingField.toLocaleLowerCase() + ' is missing'} </h1> : ''}
                
            </div>
                <div className=" w-3/6    flex justify-end h-10  gap-4 p-2     ">
                    <SiTicktick onClick={() => saveTask()} className=" text-green-500 cursor-pointer w-10 h-5   rounded-sm  " />
                    <MdOutlineCancel onClick={()=>closeWindow()}  className=" w-10 h-5   cursor-pointer  rounded-sm text-red-500 " />
                </div>
            </div>
            <div className="w-full h-[80%] flex flex-col overflow-hidden m-5  ">
                <div className="flex ">
                    <h1 className="text-sm w-1/6 p-1 h-10"> Designation </h1>
                    <select onChange={(e) => handleChange(e)} className="bg-transparent w-5/6 h-10 focus:outline-none" name='designation' value={formData?.workList?.designation} id="">
                        <option selected className="w-full h-10" value={null}>Select</option>
                        {
                            subordinates?.map((item) => <option selected={item?.designationId == formData?.workList?.designation} className="w-full h-10" value={item.designationId}>{item.designation}</option>)
                        }
                    </select>
                </div> 
                <div className="flex w-full">
                    <h1 className="text-sm p-1 w-1/6"> Task name</h1>
                    <input placeholder="Task name" value={formData?.taskName} name="taskName" className="p-1 w-5/6 h-10 bg-transparent focus:outline-none " onChange={(e) => handleChange(e)} type="text" />
                    
                </div>
                <div className="flex w-full ">
                    <h1 className="text-sm p-1 w-1/6 "> Task details</h1>
                    <textarea onChange={(e) => handleChange(e)} className="border rounded-xl bg-blue-600 bg-opacity-5 w-9/12 h-20 bg-transparent focus:outline-none p-1 " placeholder="task description" value={formData?.taskDetails} name='taskDetails' id=""></textarea>
                </div>
                <div className="flex w-full flex-col ">
                    
                <div className="flex w-full  h-10">
                    <h1 className="text-sm p-1 w-1/6 "> Completed</h1>
                    <div className= {`flex m-1 bg-gray-600 bg-opacity-20 w-16  border-2 rounded-full h-8 items-center justify-center p-1 ${formData?.completed?'border-red-600':'border-blue-600'}`}>
                        
                        <div onClick={(e)=>handleChange({ target: { name: 'completed', value: true } })}  name='completed' value={ formData?.completed}  className= {`rounded-s-full ${formData?.completed ?  'bg-red-500':''} flex w-6/12 h-full`}>
                             {formData?.completed   ?<RiRadioButtonLine className={`text-white h-full w-full`} />:''} 
                        </div>  
                        <div  onClick={()=>handleChange({ target: { name: 'completed', value: false } })} name='completed' value={ formData?.completed} className= {`${!formData?.completed ?  'bg-blue-500':''}  rounded-e-full  flex w-6/12 h-full`}>
                             {!formData?.completed   ?<RiRadioButtonLine className={`text-white h-full w-full`} />:''} 
                        </div>  
                    </div>
                </div>
                {!formData?.completed ?
                <div className="flex w-full h-32">
                        <h1 className="text-sm p-1 w-1/6 "> Task details</h1>
                        <textarea onChange={(e) => handleChange(e)} className=" border bg-blue-600 bg-opacity-5 w-9/12 h-20 rounded-lg bg-transparent focus:outline-none p-1 " placeholder="task description" value={formData?.taskDetails} name='taskDetails' id=""></textarea>
                
                   </div>:''}
                </div>
                
            </div>
        </div>
    )
}

export default NewTask