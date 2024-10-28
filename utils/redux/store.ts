// src/redux/store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';
import quanityItemsLimit from './slices/quanityItemsLimitSlice'
import isCheckoutOpen from './slices/isCheckoutOpen';

const rootReducer = combineReducers({
    cartItems: cartReducer,
    limit: quanityItemsLimit,
    isCheckoutOpen: isCheckoutOpen
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
