import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user:{
    },
    isLogin:false,
  },
  reducers: {
    accountName: (state, action) => {
      state.user = action.payload;
    },
    isLogin :(state,action) =>{
      state.isLogin = action.payload
    }

  },
});

export const { accountName } = accountSlice.actions;
export const { isLogin } = accountSlice.actions;

export default accountSlice.reducer;
