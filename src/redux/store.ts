import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './exampleSlice';
import plantationSlice from './plantationSlice';



export const store = configureStore({
    reducer: {
        example: exampleSlice,
        plantation: plantationSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;