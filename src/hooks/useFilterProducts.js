import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFilterProducts = () => {
  
  const allProducts = useSelector((state) => state?.product?.products); // Select all products
  const searchProducts = (searchKey) => {
    const regex = new RegExp(searchKey, "i"); // Case-insensitive regex
    const result = allProducts?.filter(
      (product) =>
        !product.deleted &&
        (regex.test(product.itemName) ||
          regex.test(product.easyCode) ||
          regex.test(product.itemCode))
    ) ;
    return result ; 
  };
 
  return searchProducts; // Return the filtered products
};

export default useFilterProducts;
