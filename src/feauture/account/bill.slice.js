import { createSlice } from "@reduxjs/toolkit";

const bills = createSlice({
  name: "account",
  initialState: {
    totalMoney: 0,
  },
  reducers: {
    sumTotalMoney: (state, action) => {
      state += +action.payload;
    },
  },
});

export const { sumTotalMoney } = bills.actions;

export default bills.reducer;
