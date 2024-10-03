import { useState } from "react";
import axiosApi from "../api/axiosApi";
import { userApi } from "../api/apiPaths";
import { useDispatch } from "react-redux";
import { updateClientslist } from "../store/clientSlice";

const useGetAllClients = () => {
   
    const dispatch = useDispatch();

    async function readClients() {
        try {
            const result = await axiosApi.get(userApi.getreadAllClients);
            if (result?.data) {
                console.log(result.data,'sasassas');
                
                dispatch(updateClientslist(result.data)); // Update Redux store
            }
        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    }

    return readClients; // Return the function for external invocation
};

export default useGetAllClients;
