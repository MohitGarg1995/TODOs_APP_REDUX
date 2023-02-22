// import { logout } from "./action";

const { createSlice } = require("@reduxjs/toolkit");

export const initialState = {
  dataCheck: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // here u can pass normal functions
    reduxDataCheck: (state, action) => {
      console.log('data',action.payload)
      state.dataCheck = action.payload;
    },
  },

  // here u can pass api's
  // extraReducers: {
  //   [logout.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [logout.fulfilled]: (state,action) => {
  //       // console.log(action)
  //     state.loading = false;
  //       // data will receive here through action
  //   },
  //   [logout.rejected]: (state) => {
  //     state.loading = false;
  //   },
  // },
});
const { actions, reducer } = authSlice;
export const { reduxDataCheck } = actions;
export const auth = reducer;
