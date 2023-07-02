import { combineReducers } from "@reduxjs/toolkit";
// reducers
import auth from "./auth";
import searchFlight from "./searchFlight";
import checkout from "./checkout";
import cities from "./cities";
export default combineReducers({
  auth,
  searchFlight,
  checkout,
  cities
});
