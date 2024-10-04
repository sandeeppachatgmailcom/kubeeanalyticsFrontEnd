import { createSlice } from "@reduxjs/toolkit";


const billingSlice = createSlice({
    name:'currentBill',
    initialState:{
        client:{},
        productList:[]
    },
    reducers:{
        addClienttoBill:(state,actions)=>{
            state.client = actions.payload
        },
        addProductstoBill:(state,actions)=>{
            state.productList = [...actions.payload,...state.productList ]
        },
        removeProductFromBill :(state,actions)=>{
            state.productList = [...state.productList].filter((batch)=>batch.batchCode !== actions.payload.batchCode && batch.decreasedQty !== actions.payload.decreasedQty && batch.itemCode !== actions.payload.itemCode    , )
        }
    }

})

export const {addClienttoBill,addProductstoBill,removeProductFromBill} = billingSlice.actions
export default billingSlice.reducer