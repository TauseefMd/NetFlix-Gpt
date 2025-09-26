import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptButton: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptButton = !state.showGptButton;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
