/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import CheckoutItemContainer from './CheckoutItemContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store'; 
import { itemsToRedux } from '@/utils/types/types';
import ChooseAnItemToast from './ChooseAnItemToast';

export default function OverlayCheckout() {

    const cart = useSelector((state: RootState) => state.cartItems);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [buttonState, setButtonState] = useState<'initial' | 'loading' | 'completed'>('initial');
    const [toast, setToast] = useState<boolean>(false);

    useEffect(() => {
      if(cart.cartItems.length > 0) {
        const total = cart.cartItems.reduce((acc, item) => {
          return acc + ((item.price && item.quantity ) ?  item.quantity * item.price : 0)
        }, 0);
        setTotalValue(total);
      }
    }, [cart.cartItems]);

    const handleCloseCheckout = () => {
        const overlayCheckout = document.querySelector('.overlay-checkout');
        if (overlayCheckout) {
          overlayCheckout.classList.remove('open-checkout');
        }
    }

    const handleCheckout = () => {
        setToast(false);
        if(cart.cartItems.length > 0) {
          setButtonState('loading');
          setTimeout(() => {
            setButtonState('completed');
          }, 1000);
        }
        else {
          setToast(true);
        }
    }

    return (
      <>
        <ChooseAnItemToast toastValue={toast}/>
        <dialog className="overlay-checkout">
            <div className="checkout-header">
                <button
                  onClick={() => handleCloseCheckout()}
                  type='button'
                  className="back-icon-button-wrapper"
                  >
                  <img src="./back-icon.svg" alt="Return" />
                </button>
                <p>Mochila de Compras</p>
            </div>
            <div className="checkout-items">
              {
                cart?.cartItems?.length > 0 ?
                (
                  cart.cartItems.map((item: itemsToRedux, index: number) => {
                      return (
                        <CheckoutItemContainer key={index} item={item}/>
                      )
                  })
                )
                :
                (
                  <div className='empty-cart'>
                    <p >Carrinho Vazio</p>
                  </div>
                )
              }
        
            </div>
            <div className="checkout-footer">
                <div className="total-amount-wrapper">
                    <p>Total</p>
                    <div className="total-amount-description">
                        <img src="./ellipse-icon.svg" alt="ETH icon" />
                        <p>{`${totalValue} ETH`}</p>
                    </div>
                </div>
                <button
                  onClick={() => handleCheckout()}
                  type='button'
                  className={`generic-style-btn finalize-button ${buttonState}`}
                >
                  {buttonState === 'initial' && 'Finalizar compra'}
                  {buttonState === 'loading' ? <div className="spinner"></div> : null}
                  {buttonState === 'completed' && 'Compra finalizada!'}
                </button>
            </div>
        </dialog>
      </>
    )
}
