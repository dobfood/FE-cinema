import { createSlice } from "@reduxjs/toolkit";

const bills = createSlice({
  name: "account",
  initialState: {
    totalMoney: 0,
    quantity: 0,
    position: [],
    showTime: "",
  },
  reducers: {
    sumTotalMoney: (state, action) => {
      state.totalMoney = action.payload;
    },
    quantity: (state, action) => {
      state.quantity = action.payload;
    },
    position: (state, action) => {
      console.log(action.payload);
      state.position.push(action.payload);
      
    },
  },
});

export const { sumTotalMoney, quantity, position, deletePosition } =
  bills.actions;

export default bills.reducer;
