/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { addToCart } from '@/utils/redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { ItemsFromData   } from '@/utils/types/types';
import { RootState } from '@/utils/redux/store';

export default function ProductContainer({ item }: { item: ItemsFromData }) {
    
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cartItems);
    const [isItItemInTheCart, setIsItItemInTheCart] = useState<boolean>(false);

    useEffect(() => {
        if(cart.cartItems) {
            console.log("cart.cartItems", cart.cartItems)
            const isTrue = cart.cartItems.some(product => product.id === item.id)
            if(isTrue) {
                setIsItItemInTheCart(true);
            }
            else {
                setIsItItemInTheCart(false);
            }
        }
    }, [cart, item.id])


    const handleBuyButton = () => {
        if(!isItItemInTheCart) {
            dispatch(addToCart(item))
        }
    }
    
    return (
        <div className="product-container">
            <div className="item-img-wrapper">
                <Image src={item.image} alt="Item" width={300} height={300} />
            </div>
            <div className="item-info-container">
                <div className="item-info-wrapper">
                    <p className="item-title">{item.name}</p>
                    <p className="item-description">{item.description}</p>
                </div>

                <div className="item-price-wrapper">
                    <img src="./ellipse-icon.svg" alt="ETH icon" />
                    <p>{`${item.price} ETH`}</p>
                </div>
                <button 
                    onClick={() => handleBuyButton()}
                    className="generic-style-btn desktop-hover-effect"
                    >{ isItItemInTheCart ? 'Adicionado ao carrinho' : 'Comprar' }
                </button>
            </div>
        </div>
    )
}
