import { createSlice } from "@reduxjs/toolkit";


const clientSlice = createSlice({
    name:'clients',
    initialState:{
        clients:[{},{}]
    },
    reducers:{
        updateClientslist:(state,actions)=>{
            state.clients = actions.payload
        }
    }
})

export const {updateClientslist} = clientSlice.actions
export default clientSlice.reducer