import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFilterProducts from "../../hooks/useFilterProducts"
import useGetAllProducts from "../../hooks/useGetAllProducts"
import Product from "../products/Product.Jsx"
import { RiUnpinFill } from "react-icons/ri"
import SelectProduct from "./SelectProduct"


const ProductSearchList = () => {
    const dispatch = useDispatch()
    const currentBill = useSelector((state) => state.bill)
    const searchKey = useSelector((state) => state.product.searchKey)
    const filterProduct = useFilterProducts()
    const updateProductList = useGetAllProducts()
    const [items, setItems] = useState([])
    const [addedItem,setAddedItem] = useState({})

    useEffect(() => {
        updateProductList()
    }, [])
    const filter = () => {
        const list = filterProduct(searchKey)
        setItems(list)
    }
    useEffect(() => {
        Object.keys(currentBill.client).length ? filter() : ''
    }, [searchKey])

    useEffect(() => {
        console.log(items, 'itemitemitem')
    }, [items])

    return (<div className=" w-full flex flex-wrap h-[100%]   absolute start-2 top-1 " >
        <div className="w-full flex flex-wrap h-auto  gap-2">
            {
                searchKey.length && items.length ? items.map((item) =>
                    <div key={item.itemCode} onClick={()=>setAddedItem(item)} className="w-2/12 cursor-pointer bg-gray-500 rounded overflow-hidden border relative h-20  ">
                        <Product product={item} />
                    </div>) : ''
            }
            {Object.keys(addedItem).length ? <div className="flex h-60  w-52  justify-center items-center bottom-10 start-52   absolute ">
                <div className="w-full h-[100%] rounded-xl ">
                     <SelectProduct product={addedItem} closeCompnent ={()=>setAddedItem({})} />
                </div>
            </div> : ''}

            
        </div>
    </div>)
}

export default ProductSearchList

