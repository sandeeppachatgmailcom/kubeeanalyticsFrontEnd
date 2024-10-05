import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:{}
     
    },
    reducers:{
        login:(state,action)=>{
                state.user = action.payload
        },
        logout:(state)=>{
                state.user = {}

        },
        updateUser:()=>{

        }
    }
})

export const {login,logout,updateUser} = userSlice.actions
export default userSlice.reducer

// {
//     userId:'hr000001',
//     email : "sandeepppachat@gmail.com ",
//     firstname:"Sandeep Pachat",
//     mobile:"7907441232",
//     secondName:"Pachat",
//     userId:"hr000001",
//     pincode:'673016',
//     streetname:'Kottoli',
//     city:'city',
//     buildinname:'buildinname',

//     designation:{
//         role:'DN10000010',
//         access:
//                 {
//                 DashBoard:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 },
//                 Profile:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 },
//                 Mytask:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 },
//                 Notifications:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 },
//                 Help:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 },
//                 Products:{
//                     view:true,
//                     edit:true,
//                     save:false
//                 }

//             }
         
//     }}
