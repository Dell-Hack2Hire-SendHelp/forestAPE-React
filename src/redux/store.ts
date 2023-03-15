import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './exampleSlice';
import userSlice from './userSlice';



export const store = configureStore({
    reducer: {
        example: exampleSlice,
        user: userSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;