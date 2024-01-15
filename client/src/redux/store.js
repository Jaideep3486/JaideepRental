import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer }); // here we are combining the reducers

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // this is the web storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// this is the persist reducer

export const store = configureStore({
  // This is the store
  //reducer: { user: userReducer }, // first we keep the reducer empty
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // this going to prevent errors
    }),
});

export const persistor = persistStore(store); // here we export the persistor
