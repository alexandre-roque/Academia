import { configureStore } from '@reduxjs/toolkit';
import user from './ducks/user';

const store = configureStore({
    reducer: {
        user: user,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;