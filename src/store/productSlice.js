import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[],
        searchKey:''
    },
    reducers:{
        loadAllProducts : (state,actions)=>{
            state.products = actions.payload
        },
        setsearchKey :(state,actions)=>{
             
            state.searchKey = actions.payload
        }
    }
})

export const {loadAllProducts,setsearchKey} = productSlice.actions
export default productSlice.reducer
