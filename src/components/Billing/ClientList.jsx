import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFilterUser from "../../hooks/useFilterUser"
import useGetAllClients from "../../hooks/useGetAllClienst"
import Individual from "../Client/Individual"
import { RiUnpinFill } from "react-icons/ri";
import { addClienttoBill } from "../../store/billingSlice"


const ClientList = ()=>{
    const dispatch = useDispatch()
    const [client,setClients] = useState([])
    const [setSelectedCus] = useState({})
    const selectedCustommer = useSelector((state)=>state.bill.client)

    const filterUser = useFilterUser()
    const searckKey = useSelector((state)=>state.product.searchKey)
    const updateClientList = useGetAllClients()
    useEffect(() => {
        updateClientList()
    }, [])


    const filter = ()=>{
        const list = filterUser(searckKey)
        setClients(list)
    }

    useEffect(()=>{
        console.log(searckKey,'searckKeysearckKey')
        filter()
    },[searckKey])


    return(
        <div className="w-full  flex-col gap-2 flex h-[100%] p-2 overflow-scroll "> 
            {
                Object.keys(selectedCustommer).length ? <div  className="w-full relative  cursor-pointer rounded-xl overflow-hidden"> <RiUnpinFill onClick={()=>{dispatch(addClienttoBill({}))}} className="absolute end-4 w-5 h-5 top-4 text" /> <Individual client={selectedCustommer} />  </div>:''
            }

            {
               !Object.keys(selectedCustommer).length &&  client?.length && client.map((item)=><div key={item.userId} onClick={()=>dispatch(addClienttoBill(item))} className="w-full h-[250px]   cursor-pointer rounded-xl "> <Individual client={item} />  </div> ) 
            }
        </div>
    )
}

export default ClientList