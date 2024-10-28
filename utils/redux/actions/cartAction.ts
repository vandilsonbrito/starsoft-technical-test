import { itemsToRedux } from "@/utils/types/types";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addToCart = (item: itemsToRedux) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export const removeFromCart = (itemId: number) => {
    return {
        type: REMOVE_FROM_CART,
        payload: itemId
    }
}
export const incrementCart = (itemId: number) => {
    return {
        type: REMOVE_FROM_CART,
        payload: itemId
    }
}
export const decrementCart = (itemId: number) => {
    return {
        type: REMOVE_FROM_CART,
        payload: itemId
    }
}