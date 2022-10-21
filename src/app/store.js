import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer';
const store = configureStore({
    reducer : {
        phone : productReducer,
    }
})

export default store;