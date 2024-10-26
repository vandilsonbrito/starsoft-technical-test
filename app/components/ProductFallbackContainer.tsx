
import React from 'react';

function CardSkeleton() {
  return (
    <div className="skeleton-product-container">
      <div className="skeleton-item-img-wrapper">
          <div className="skeleton-item-img"></div>
      </div>
      <div className="skeleton-item-info-container">
          <div className="skeleton-item-info-wrapper">
              <div className="skeleton-item-title"></div>
              <div className="skeleton-item-description"></div>
          </div>

          <div className="skeleton-item-price-wrapper">
              <div className="skeleton-price-icon"></div>
              <div className="skeleton-price"></div>
          </div>
          <div className="skeleton-button"></div>
      </div>
    </div>

  )
}


export default function ProductFallbackContainer() {
  return (
    <>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </>
  )
}
