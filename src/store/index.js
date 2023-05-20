import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./initReducer";

const store = configureStore({
    reducer: rootReducer
});
export default store;