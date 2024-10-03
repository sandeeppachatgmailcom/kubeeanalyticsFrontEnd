import { createSlice } from "@reduxjs/toolkit";


const pageSlice = createSlice({
    name:'pageSice',
    initialState:{
        pageName:'homePage',
    },
    reducers:{
        changePage:(state,actions)=>{
            state.pageName = actions.payload
        }
    }
})

export const {changePage} = pageSlice.actions;
export default pageSlice.reducer