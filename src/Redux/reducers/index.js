import { combineReducers } from "@reduxjs/toolkit";
import { auth } from "../reducers/auth";

// const rootReducer = combineReducers({
//     auth,
//     cart,
//     ..
//     ..
// })

const rootReducer = auth;

export default rootReducer;
