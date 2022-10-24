import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import accountReducer from "../feauture/account/account.slice"
import billReducer from "../feauture/account/bill.slice"
const store = configureStore({
    reducer : {
        movie : reducer,
        account: accountReducer,
        bill: billReducer,
// import productReducer from './productReducer';
    }})

export default store