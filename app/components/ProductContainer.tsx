/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

export default function ProductContainer({ imgSrc, name, description, price }: { imgSrc: string, name: string, description: string, price: number }) {
  return (
    <div className="product-container">
        <div className="item-img-wrapper">
            <Image src={imgSrc} alt="Item" width={300} height={300} />
        </div>
        <div className="item-info-container">
            <div className="item-info-wrapper">
                <p className="item-title">{name}</p>
                <p className="item-description">{description}</p>
            </div>

            <div className="item-price-wrapper">
                <img src="./ellipse-icon.svg" alt="ETH icon" />
                <p>{`${price} ETH`}</p>
            </div>
            <button className="generic-style-btn">Comprar</button>
        </div>
    </div>
  )
}
