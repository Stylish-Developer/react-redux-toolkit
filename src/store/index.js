import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
