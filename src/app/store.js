import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
const store = configureStore({
    reducer : {
        movie : reducer,
    }
})

export default store;