import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';


const persistConfig = {
  key: 'root',
  version: 1,
  
};



export const store = configureStore({ // This is the store 
  reducer: { user: userReducer }, // first we keep the reducer empty
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // this going to prevent errors
    }),
});

