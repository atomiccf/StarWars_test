import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Result,RootState} from "../Interfaces.ts";



const initialState: RootState = {
    result:[],
};

const characterSlice = createSlice({
    initialState,
    name: 'result',
    reducers: {
       setResult: (state, action: PayloadAction<Result[]>) => {
            state.result = action.payload;
        },
    },
});

export const { setResult } = characterSlice.actions;
export const charactersReducer = characterSlice.reducer;