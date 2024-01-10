import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './characterSlice.ts';

const store = configureStore({
    reducer: {
       characters: charactersReducer,
    },
});

export default store;