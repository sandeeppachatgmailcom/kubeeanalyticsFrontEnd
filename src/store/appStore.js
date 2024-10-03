import { configureStore } from "@reduxjs/toolkit";
import pageSlice from './page'
import userSlice from "./userSlice";
import workSlice from "./workSlice";
import productSlice from "./productSlice";
import clientSlice from "./clientSlice";

const appStore = configureStore({
    reducer:{
        page:pageSlice,
        user:userSlice,
        work:workSlice,
        product:productSlice,
        clients:clientSlice

    }
})

export default appStore