

import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBookmark, FaWindowClose } from "react-icons/fa";
import { MdOutlineSwipeDown } from "react-icons/md";
import axiosApi from "../../api/axiosApi";
import { userApi } from "../../api/apiPaths";
import useGetAllClienst from "../../hooks/useGetAllClienst";
const UpdateClient = ({ client, setClient }) => {
    const [user, setUser] = useState({})
    const updateClientList = useGetAllClienst()
    useEffect(() => {
        setUser(client)
    }, [client])

    const handleChange = (e) => {
        const { name, value } = e.target
        const temp = {
            ...user,
            [name]: value
        }
        setUser(temp)
    }

    useEffect(() => {
        console.log(user, 'user')
    }, [user])

    const saveClient = async () => {
        try {
            const result = await axiosApi.post(userApi.creatClient, { ...user })

            console.log(result, 'user')
            if (result.data.status) {
                updateClientList()
            }

        } catch (error) {

        }
    }
    return (
        <div className="w-full hover:bg-violet-100 h-[100%] justify-center relative  flex items-center text-white  overflow-hidden rounded-lg   border  border-violet-700 flex-col  ">

            <div className="w-full flex-col h-[50%] bottom-2 end-2  flex justify-center relative gap-2 items-center rounded-t-sm">
                <div className=" w-full  flex items-center justify-end gap-4 bottom-2 end-2  absolute h-10">
                    <MdOutlineSwipeDown className="cursor-pointer w-16 h-8 text-red-500     rounded-sm  " />
                    <FaBookmark onClick={() => saveClient()} className=" cursor-pointer w-16 h-8 text-gray-500    " />
                </div>
                <div className="w-24 h-24 justify-center flex items-center  border border-violet-700 p-1 bg-violet-700 bg-opacity-25 rounded-full">
                    <h1 className="text-2xl font-bold">
                        {Object.keys(user).length && user?.firstname?.[0] && user?.lastName?.[0]
                            ? user?.firstname[0].toUpperCase() + user?.lastName[0].toUpperCase()
                            : ''}
                    </h1>
                </div>
                <div className="w-full flex text-violet-700  gap-2  justify-center items-center ">
                    <h1 className="text-sm font-semibold ">{user?.firstname?.toUpperCase()}</h1>
                    <h1 className="text-sm font-semibold ">{user?.lastName?.toUpperCase()}</h1>
                </div>
            </div>
            <div className="w-full h-[50%] flex flex-col gap-1 justify-center items-center p-5 bg-violet-400 ">
                <input onChange={(e) => handleChange(e)} type="text" name='firstname' value={user?.firstname?.toLowerCase()} placeholder="first name " className="w-full text-center bg-opacity-5 bg-gray-100 rounded-md focus:outline-none focus:outline-indigo-600 text-white-700 h-10  " id="" />
                <input onChange={(e) => handleChange(e)} type="text" name='lastName' value={user?.lastName?.toLowerCase()} placeholder="last name " className="w-full  text-center bg-opacity-5 bg-gray-100 rounded-md focus:outline-none focus:outline-indigo-600 text-white-700 h-10   " id="" />
                <input onChange={(e) => handleChange(e)} type="number" name='contact' value={user?.contact?.toLowerCase()} placeholder="last name " className="w-full  text-center bg-opacity-5 bg-gray-100 rounded-md focus:outline-none focus:outline-indigo-600 text-white-700 h-10   " id="" />
                <input onChange={(e) => handleChange(e)} type="email" name='email' value={user?.email?.toLowerCase()} placeholder="last name " className="w-full  text-center bg-opacity-5 bg-gray-100 rounded-md focus:outline-none focus:outline-indigo-600 text-white-700 h-10   " id="" />

            </div>
            <div onClick={setClient} className="absolute flex justify-end h-10 items-center p-2 top-0   w-full">
                <FaWindowClose className="text-violet-800 h-5 w-5 cursor-pointer" />
            </div>
        </div>
    )
}
export default UpdateClient