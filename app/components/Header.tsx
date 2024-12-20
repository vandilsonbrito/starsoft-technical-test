/* eslint-disable @next/next/no-img-element */
'use client';
import { RootState } from '@/utils/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleState } from '@/utils/redux/slices/isCheckoutOpen';

export default function Header() {

  const cart = useSelector((state: RootState) => state.cartItems);
  const [totalQuantityOfItems, setTotalQuantityOfItems] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if(cart) {
      setTotalQuantityOfItems(cart.cartItems.reduce((acc, item) => {
        return acc + (item.quantity ? item?.quantity : 0)
      }, 0))
    }
  }, [cart])

  const handleOpenCheckout = () => {
    const overlayCheckout = document.querySelector('.overlay-checkout');
    if (overlayCheckout) {
      overlayCheckout.classList.add('show-container');
      dispatch(toggleState());
    }
  }

    return (
      <header className="header">
          <img src="./logo.svg" alt="Logo" />
          
          <button
            onClick={() => handleOpenCheckout()}
            type='button'
            >
            <img src="./bag-icon.svg" alt="Bag icon" />
            <p>{totalQuantityOfItems}</p>
          </button>
      </header>
    )
}
