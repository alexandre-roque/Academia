import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

export const modelSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        closeModal() {
            return { isOpen: false };
        },
        openModal() {
            return { isOpen: true };
        },
    },
});

export const { closeModal, openModal } = modelSlice.actions;

export default modelSlice.reducer;
