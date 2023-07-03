import auth from "./auth";
import post from "./history";
import { combineReducers } from "@reduxjs/toolkit";
import searchFlight from "./searchFlight";
import checkout from "./checkout";
import cities from "./cities";
export default combineReducers({
  post,
  auth,
  searchFlight,
  checkout,
  cities
});
