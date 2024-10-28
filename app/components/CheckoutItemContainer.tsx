/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect } from 'react';
import { itemsToRedux } from '@/utils/types/types';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM} from '@/utils/redux/actions/cartAction';
import { RootState } from '@/utils/redux/store';

export default function CheckoutItemContainer({ item }: { item: itemsToRedux }) {

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cartItems);

    const handleIncrementToCart = (itemId: number) => {
        dispatch({ type: INCREMENT_ITEM, payload: { id: itemId } });
    };
    const handleDecrementFromCart = (itemId: number) => {
        dispatch({ type: DECREMENT_ITEM, payload: { id: itemId } })
    };

    const handleRemoveFromCart = (itemId: number) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id: itemId } })
    }

    useEffect(() => {
        console.log("cart", cart.cartItems)
    }, [cart])

    return (
        <div className='checkout-item-container'>
            <div className="checkout-item-img-wrapper">
                <Image src={item.image} alt="Item" width={150} height={150}/>
            </div>
            <div className="checkout-item-info">
                <div className="item-text-wrapper">
                    <p className='item-name'>{item.name}</p>
                    <p className='item-description'>{item.description}</p>
                </div>

                <div className="checkout-price-wrapper">
                    <img src="./ellipse-icon.svg" alt="ETH icon" />
                    <p>{`${item.price} ETH`}</p>
                </div>

                <div className="checkout-action-container">
                    <div className="checkout-amount-wrapper">
                        <button
                            onClick={() => handleDecrementFromCart(item.id)}
                            >
                            <img src="./minus-icon.svg" alt="Minus icon" />
                        </button>
                        <p>{item.quantity || 0}</p>
                        <button
                            onClick={() => handleIncrementToCart(item.id)}
                            >
                            <img src="./add-icon.svg" alt="Add icon" />
                        </button>
                    </div>
                    <div className="remove-icon-wrapper">
                        <button 
                             onClick={() => handleRemoveFromCart(item.id)}
                            className='remove-icon-button'>
                            <img src="./remove-icon.svg" alt="Remove icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
