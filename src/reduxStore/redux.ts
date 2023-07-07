import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import calendarReducer from "./slices/calendarSlice";

const rootReducer = combineReducers({
  user: userReducer,
  calendar: calendarReducer,
});

export default rootReducer;
