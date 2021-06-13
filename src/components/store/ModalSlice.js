import { createSlice } from '@reduxjs/toolkit';

const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        showModal: false
    },
    reducers: {
        Toggle(state, action) {
            state.showModal = !state.showModal;
        }

    }
});

export const ModalActions = ModalSlice.actions;
export default ModalSlice;