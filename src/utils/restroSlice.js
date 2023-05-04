import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
  name: "restro",
  initialState: {
    restDetails: [],
  },
  reducers: {
    getDetails: (state, action) => {
      state.restDetails = [];
      state.restDetails.push(action.payload);
    },
  },
});
export default restroSlice.reducer;
export const { getDetails } = restroSlice.actions;
