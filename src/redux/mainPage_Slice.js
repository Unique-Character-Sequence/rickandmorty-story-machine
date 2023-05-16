import {createSlice} from '@reduxjs/toolkit';

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState: {
        stage: '', // Initial value for stage
    },
    reducers: {
        setStage: (state, action) => {
            state.stage = action.payload;
        },
    },
});

export const {setStage} = mainPageSlice.actions;
export default mainPageSlice.reducer;
