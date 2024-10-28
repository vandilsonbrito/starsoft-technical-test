import { itemsToRedux } from "@/utils/types/types";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from "../actions/cartAction";


const initialState = {
    cartItems: [] as itemsToRedux[]
}

export const cartReducer = (state = initialState, action: { type: string; payload: itemsToRedux }) => {
    switch(action.type) {
        case ADD_TO_CART: {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const updatedCartItems = state.cartItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
                return { ...state, cartItems: updatedCartItems };
            }
            return {
                ...state,
                cartItems: [ ...state.cartItems, { ...action.payload, quantity: 1 } ]
            };
        }

        case INCREMENT_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            };
        }

        case DECREMENT_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems
                    .map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: (item.quantity || 1) - 1 }
                            : item
                    )
                    .filter(item => item.quantity && item.quantity > 0)
            };
        }

        case REMOVE_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        }

        default:
            return state;
    }
};
