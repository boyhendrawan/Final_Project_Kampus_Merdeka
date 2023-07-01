import auth from "./auth";
import post from "./post";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  post,
  auth,
});
