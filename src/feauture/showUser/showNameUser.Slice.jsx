import { createSlice } from "@reduxjs/toolkit";
let names = [];
const showNameUserSlice = createSlice({
  name: "showName",
  initialState:names,
  reducers: {
    showNameUser: (state, action) => {
      console.log(action.payload);
        state.names.push(action.payload)
    },
  },
});

export const { showNameUser } = showNameUserSlice.actions;
export default showNameUserSlice.reducer;
