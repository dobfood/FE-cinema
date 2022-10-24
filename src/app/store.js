import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productReducer';
import accountReducer from "../feauture/account/account.slice"
import billReducer from "../feauture/account/bill.slice"

const store = configureStore({
    reducer : {
        // phone : productReducer,
        account: accountReducer,
        bill: billReducer,

    }
})

export default store;