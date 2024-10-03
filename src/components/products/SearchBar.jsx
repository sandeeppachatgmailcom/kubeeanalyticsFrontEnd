import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setsearchKey } from "../../store/productSlice";

const SearchBar =()=>{
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState('')

    useEffect(()=>{
     console.log(searchKey,'adfsaddsasaddsd')
     dispatch(setsearchKey(searchKey))
    },[searchKey])
    return(
        <div className="w-full rounded-full flex justify-center items-center overflow-hidden  h-[100%] p-2 bg-violet-700 bg-opacity-10">
            
            <input onChange={(e)=>setSearchKey(e.target.value)} className="h-[100%]  uppercase bg-transparent text-2xl text-gray-500 w-full focus:outline-none p-3" type="text" name="" id="" />
            <IoSearch className="w-5  h-5 text-gray-600 me-4 cursor-pointer " />
        </div>
    )
}


export default SearchBar