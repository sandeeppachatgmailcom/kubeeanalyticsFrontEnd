import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
const Individual = ({ client }) => {

    const [user, setUser] = useState(client)
    useEffect(() => {
        setUser(client)
    }, [client])

    // const user = {
    //     email: "sandeeppachat@gmail.com",
    //     password: "$2b$10$PpBMyq/MnA459HzA4SXBuuhpanpGAbjzqr6j.QGz85oeBx.wIIahm",
    //     isAdmin : true,
    //     userId: "hr000001",
    //     firstname: "Sandeep",
    //     lastName:'pachat',
    //     contact:'7907441232'
    // }
    return (
        <div className="w-full hover:bg-indigo-50 h-[100%] justify-center  flex items-center text-white shadow-xl shadow-indigo-100   border rounded-t-xl border-indigo-700 flex-col  ">
            <div className="w-full flex-col h-[60%]  flex justify-center gap-2 items-center rounded-t-sm">
                <div className="w-24 h-24 justify-center flex items-center  border border-violet-600 p-1 bg-violet-600 rounded-full">
                    <h1 className="text-2xl font-bold">
                        {Object.keys(user).length && user?.firstname?.[0] && user?.lastName?.[0]
                            ? user?.firstname[0].toUpperCase() + user?.lastName[0].toUpperCase()
                            : ''}
                    </h1>

                </div>
                <div className="w-full flex text-violet-600  gap-4  justify-center items-center ">

                    <h1 className="text-sm font-semibold ">{user?.firstname.toUpperCase() + ' ' + user?.lastName.toUpperCase()}</h1>
                </div>

            </div>
            <div className="w-full h-[40%] flex flex-col gap-1 justify-start items-center p-2 bg-violet-600 ">
                <div className="w-full flex gap-1 flex-col  justify-start items-center ">
                    <h1 className="text-sm font-thin text-wrap  ">{user?.userId }</h1>

                    <h1 className="text-sm font-thin text-wrap  ">{user?.email}</h1>

                </div>
                <div className="w-full flex   justify-center items-center">
                    <BsFillTelephoneFill />
                    <h1 className="text  font-  text-wrap  ">{user?.contact}</h1>
                </div>
            </div>

        </div>
    )
}

export default Individual