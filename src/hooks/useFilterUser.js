import { useSelector } from "react-redux"


const useFilterUser= ()=>{
    const clients = useSelector((state) => state?.clients?.clients)     
    function filterProduct (searchKey){
        const regex = new RegExp(searchKey,'i')
        const result = clients.filter((item)=>
        regex.test(item.firstName)||
        regex.test(item.lastName)||
        regex.test(item.email)||
        regex.test(item.contact)
    )
    console.log(result,'sasaassasasasasas-------')
    return result
    }

    return filterProduct
}

export default useFilterUser 