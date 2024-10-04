import { configureStore } from "@reduxjs/toolkit";
import pageSlice from './page'
import userSlice from "./userSlice";
import workSlice from "./workSlice";
import productSlice from "./productSlice";
import clientSlice from "./clientSlice";
import billingSlice from "./billingSlice";

const appStore = configureStore({
    reducer:{
        page:pageSlice,
        user:userSlice,
        work:workSlice,
        product:productSlice,
        clients:clientSlice,
        bill:billingSlice

    }
})

export default appStore