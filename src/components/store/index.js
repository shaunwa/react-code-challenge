import { configureStore } from '@reduxjs/toolkit';
import ApiSlice from './ApiSlice';
import ModalSlice from './ModalSlice';

const store = configureStore(
    {
        reducer: {
            api: ApiSlice.reducer,
            modal : ModalSlice.reducer
        }
    }
);

export default store;