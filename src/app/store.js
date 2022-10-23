import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productReducer';
import showNameUserReducer from "../feauture/showUser/showNameUser.Slice"

const store = configureStore({
    reducer : {
        // phone : productReducer,
        showUser: showNameUserReducer,
    }
})

export default store;