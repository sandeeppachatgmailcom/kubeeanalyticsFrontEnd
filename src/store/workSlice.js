import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
    name: 'work',
    initialState: {
        workList: []
    },
    reducers: {
        setMyWork   : (state, actions) => {
            state.workList = actions.payload
        },
        updateWork:(state, action) => {
            let update = false;
            let workList = state.workList.map((item) => {
                if (item.taskId !== action.payload.taskId) return item;
                else {
                    item = {
                        ...action.payload
                    };
                    update = true;
                    return item;
                }
            });
            if (!update) {
                workList.push(action.payload);
            }
            state.workList = workList;
        }
    }
});

export const { updateWork,setMyWork } = workSlice.actions;
export default workSlice.reducer;
