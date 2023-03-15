import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './exampleSlice';

import plantationSlice from './plantationSlice';

import userSlice from './userSlice';




export const store = configureStore({
    reducer: {
        example: exampleSlice,

        plantation: plantationSlice,
        user: userSlice,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;