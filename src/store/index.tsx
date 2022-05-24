import { configureStore } from "@reduxjs/toolkit";
import modal from "./ducks/modal";
import user from "./ducks/user";

const store = configureStore({
    reducer: {
        user: user,
        modal: modal,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
