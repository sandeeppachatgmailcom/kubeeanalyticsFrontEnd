import { useSelector } from "react-redux"
import { IoSaveSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Profile = ()=>{

    const user = useSelector((state)=>state.user.user)
    const [formData,setFormData] = useState()
    useEffect(()=>{
        setFormData(user)
    },[user])
    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name,value,'name,value')
        const tempData = {
            ...formData,
            [name]:value
        }
        console.log(tempData,'tempDatatempData')
        setFormData(tempData)
    }
    useEffect(()=>{
        console.log(formData)
    },[formData])

    return(
        <div className="flex gap-4 flex-col justify-start p-3 items-center   h-[100%] w-full ">

            <div className="w-52 flex  rounded-full relative overflow-hidden  h-52">
                <div className="w-52 border-s-2 rounded-full absolute border-red-500 h-52">

                </div>
                <div className="w-52 border-e-2 rounded-full absolute border-green-500 h-52">

                </div>
                <div className="w-52 border-t-2 rounded-full absolute border-blue-500 h-52">

                </div>
                <div className="w-52 border-b-2 rounded-full absolute border-yellow-500 h-52">

                </div>
            </div>
            <div className="h-10 flex justify-center items-center p-3  w-full  ">
            <h1>    {formData?.firstname || '' +' '+formData?.secondName || ''}</h1>
                <IoSaveSharp onClick={()=>console.log(formData,'formData')} className="h-8 w-8 text-blue-600 border-sm cursor-pointer" />
            </div>
            <div className="text-sm flex gap-4 focus:outline-none w-full p-3  ">
                <div className="w-6/12 relative flex flex-col border-4 border-gray-600 border-opacity-10 rounded-xl overflow-hidden p-2  gap-1 items-center    ">
                    <div className="w-full flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Firstname </label>
                        <input name='firstname' value={formData?.firstname} onChange={(e)=>handleChange(e)}  className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Second Name </label>
                        <input name='secondName' value={formData?.secondName} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Mobile </label>
                        <input name='mobile' value={formData?.mobile} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Email </label>
                        <input name='email' value={formData?.email} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                
                </div>
                <div className="w-6/12 flex relative flex-col border-4 rounded-xl overflow-hidden border-gray-600 border-opacity-10 p-2  gap-1 items-center    ">
                    <div className="w-full flex h-10 gap-4 items-center    ">
                        <label htmlFor="name">HouseName </label>
                        <input name='buildinname' value={formData?.buildinname} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-full h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Building Number </label>
                        <input name='buildingNumber' value={formData?.buildingNumber} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Street Name </label>
                        <input name='streetname' value={formData?.streetname} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">City </label>
                        <input name='city' value={formData?.city} onChange={(e)=>handleChange(e)}  className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="text"  id="" />
                    </div>
                    <div className="w-full  flex h-10 gap-4 items-center    ">
                        <label className="w-3/12" htmlFor="name">Pincode </label>
                        <input name='pincode' value={formData?.pincode} onChange={(e)=>handleChange(e)} className="bg-transparent focus:bg-transparent bg-opacity-0 focus:bg-opacity-0 focus:bg-blue-500 focus:outline-none w-9/12 h-full" type="number"  id="" />
                    </div>
                    
                </div>
                
                
                 
                
            </div>
        </div>
    )
}


export default Profile