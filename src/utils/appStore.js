import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import contentReducer from "./contentSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
});

export default appStore;
