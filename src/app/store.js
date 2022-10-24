import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productReducer';
import accountReducer from "../feauture/account/account.slice"

const store = configureStore({
    reducer : {
        // phone : productReducer,
        account: accountReducer
    }
})

export default store;