import { useSelector } from "react-redux"
import UpdateClient from "../components/Client/UpdateClient"
import useGetAllClienst from "../hooks/useGetAllClienst"
import { VscNewFolder } from "react-icons/vsc"
import { lazy, Suspense, useEffect, useState } from "react"
import SearchBar from "../components/products/SearchBar"


import useFilterUser from "../hooks/useFilterUser"
const Individual = lazy(() => import("../components/Client/Individual"));


const tempClient = {
    userId: null,
    firstname: null,
    designation: null,
    email: null,
    isAdmin: false,
    lastName: null,
    contact: null,
    userType: 'Client',
    deleted: false,
    isActive: true
}


const Client = () => {
    const [client, setClient] = useState(false)
    const [user, setUser] = useState({})
    const updateClientList = useGetAllClienst()
    const filterUser = useFilterUser()
    const [clients,setClients] = useState([])
    const searckKey = useSelector((state)=>state.product.searchKey)
    
    
    const filter = ()=>{
        console.log('filter')
        const list = filterUser(searckKey)
        setClients(list)
    }
    useEffect(()=>{
        
        filter()
    },[searckKey])


    useEffect(() => {
        updateClientList()
    }, [])
    useEffect(() => {
        setClient(true)
    }, [user])
    return (
        <div className="w-full flex relative items-center justify-start h-[100%] flex-col  ">
            <div className="h-20  md:w-6/12 w-full   rounded-full   flex justify-center items-center   p-1 m-2  ">
                <SearchBar />
            </div>
            <div className="absolute  w-10 h-10 cursor-pointer flex bg-violet-700 animate-bounce  rounded-full shadow-xl justify-center items-center  top-5 end-5 ">
                <VscNewFolder onClick={() => { setUser(tempClient) }} className="text-white" />
            </div>

            <div className="w-full gap-4 flex flex-wrap">
                {
                    clients?.length && clients?.map((item) =>
                        <div onClick={() => { setUser(item) }} className="w-48 h-64 cursor-pointer ">
                            <Suspense fallback={<div>Loading Individual Component...</div>}>
                                <Individual key={item.userId} client={item} />
                            </Suspense>
                        </div>)
                }
            </div>


            {
                client && Object.keys(user).length ? <div className="absolute bottom-3 bg-white w-2/6 h-3/6   rounded-xl">
                    <UpdateClient setClient={() => setClient(false)} client={user} />
                </div> : ''
            }


        </div>
    )
}


export default Client
