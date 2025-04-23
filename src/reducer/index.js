import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slice/authslice";
import profileReducer from "../slice/profileslice";
import cartReducer from "../slice/cartSlice"
import storage from "redux-persist/lib/storage"; 
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer); 

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  profile: profileReducer,
  cart: cartReducer,
});

export default rootReducer;
