import { createSlice } from "@reduxjs/toolkit";


const billingSlice = createSlice({
    name: 'currentBill',
    initialState: {
        client: {},
        productList: [],
        type:'',
        billNumber :''
    },
    reducers: {
        addClienttoBill: (state, actions) => {
            state.client = actions.payload
        },
        addProductstoBill: (state, actions) => {
            let tempList = [...state.productList]
            console.log(tempList,actions.payload,'tempListtempListtempListtempList')
            for (let batch of actions.payload) {
                    batch.quantity = parseInt(batch.quantity)
                    let update = false;
                    console.log(batch,'batchbatchbatch')
                for (let i = 0; i < tempList.length; i++) {
                    if(batch.itemCode == tempList[i].itemCode && batch.batchCode == tempList[i].batchCode  ){
                          tempList[i].quantity+=parseInt(batch.quantity)||0
                        update = true
                    }
                }
                if(!update){
                    tempList.push(batch)
                }
            }
            console.log(tempList,'tout')
            state.productList = tempList
        },
        clearmyKart:(state,actions)=>{
            state.productList =actions.payload
        },
        removeProductFromBill: (state, actions) => {
            state.productList = state.productList.filter((batch) => 
                batch.batchCode !== actions.payload.batchCode ||
                batch.quantity !== actions.payload.quantity ||
                batch.itemCode !== actions.payload.itemCode
            );
        },
        setbillType:(state,actions)=>{
            state.type = actions.payload
        },
        setBillNumber:(state,actions)=>{
            state.billNumber = actions.payload
        }
    }

})

export const { addClienttoBill,clearmyKart ,addProductstoBill, removeProductFromBill,setbillType,setBillNumber } = billingSlice.actions
export default billingSlice.reducer

