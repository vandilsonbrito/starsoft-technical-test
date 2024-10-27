// src/redux/store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
/* import cartReducer from './reducers/cartReducer'; */
import quanityItemsLimit from './slices/quanityItemsLimitSlice'

const rootReducer = combineReducers({
    /* cart: cartReducer, */
    limit: quanityItemsLimit
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
