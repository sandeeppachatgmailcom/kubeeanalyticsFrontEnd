import { useEffect, useState } from "react";
import AddProduct from "../components/products/AddProduct";
import Product from "../components/products/Product.Jsx";
import NewProducts from "../components/products/Product.Jsx";
import SearchBar from "../components/products/SearchBar"

import { VscNewFolder } from "react-icons/vsc";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts } from "../store/productSlice";
import useFilterProducts from "../hooks/useFilterProducts";

let items = [
    {
        itemName: 'Sugar Kandy Undo',
        easyCode: '1001',
        itemCode: 'S00001',
        batch: [
            {
                batchCode: 'bt0001',
                sellingprice: 400,
                price: 400,
                purchaseCost: 300,
                quantity: 40,
                default: true,
            },
            {
                batchCode: 'bt0002',
                sellingprice: 400,
                price: 400,
                purchaseCost: 300,
                quantity: 40,
                default: false,
            }
        ]
    },
    {
        itemName: 'Royal Mirag',
        easyCode: '1002',
        itemCode: 'S00002',
        batch: [{
            batchCode: 'bt0009',
            sellingprice: 400,
            price: 400,
            purchaseCost: 300,
            quantity: 40,
            default: true,
        }
        ]

    }
]


const Products = () => {
    const filterProduct = useFilterProducts()
    const updateProductList = useGetAllProducts()
    const [newProduct, setNewProduct] = useState(false)
    const [product, setProduct] = useState({})
    const searckKey = useSelector((state)=>state.product.searchKey)
     const [items,setItems] = useState([])
    useEffect(()=>{
        updateProductList()
    },[])
    const filter = ()=>{
        const list = filterProduct(searckKey)
        setItems(list)
    }
    useEffect(()=>{
        
        filter()
    },[searckKey])

    useEffect(()=>{
        if(Object.keys(product).length) setNewProduct(true);
    },[product])

    return (
        <div className="  w-full h-[100%] justify-start   flex flex-col items-center  ">
            <div className="h-20  xl:w-6/12 w-full   rounded-full bg-violet-400 bg-opacity-20  flex justify-center items-center   p-1 m-2  ">
                <SearchBar />
            </div>
            <div className="gap-2  relative  w-full flex flex-wrap justify-start items-start px-2 py-1">
                {
                    items?.map((item, index) => <div key={item.itemCode} onClick={() => { setProduct(item); }} className="xl:w-1/6 md:w-3/12 w-full h-20 rounded-md overflow-scroll   shadow-xl flex ">
                        <Product product={item} />
                    </div>)
                }
                {
                    newProduct ? <div className="w-full md:h-80 ">
                        <AddProduct close={() => setNewProduct(false)} product={product} />
                    </div> : ''
                }
                <div className="absolute  w-10 h-10 cursor-pointer flex bg-violet-700 animate-bounce  rounded-full shadow-xl justify-center items-center  top-5 end-5 ">
                    <VscNewFolder onClick={() => {setProduct({itemName: null,easyCode:null })}} className="text-white" />
                </div>

            </div>

        </div>
    )

}

export default Products