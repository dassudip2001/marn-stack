import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `counter`, handled by `counterReducer`
    counter: counterReducer,
  },
});

export default store;
