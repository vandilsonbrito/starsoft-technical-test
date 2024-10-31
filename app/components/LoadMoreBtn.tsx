'use client'
import { useProductData } from '@/utils/hooks/useProductsData';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { increment } from '../../utils/redux/slices/quanityItemsLimitSlice';
import { RootState } from '../../utils/redux/store'; 
import { useMedia } from 'use-media';

export default function LoadMoreBtn() {
    
    const isMobile = useMedia({ maxWidth: '719px' })

    const dispatch = useDispatch();
    const pageValue = useSelector((state: RootState) => state.limit.value);
    const { data: productData } = useProductData(pageValue);
    const [progressWidth, setProgressWidth] = useState<number>(0);
    const [reachedLimit, setReachedLimit] = useState<boolean>(false);

    
    useEffect(() => {
      if(productData) {
          const setProgressBar = (count: number, limit: number) => {
              let progress: number;
              const barWidth = isMobile ? 260 : 330;
              const isThereDifference = count - limit >=  0;
   
              if(isThereDifference) {
                progress = (barWidth / count) * limit;
              }
              else {
                progress = barWidth;
              }
              
              if(progress === barWidth) {
                setReachedLimit(true)
              }
              return progress
          }
          setProgressWidth(setProgressBar(productData?.metadata?.count, productData?.metadata?.limit))
      }

    }, [productData, isMobile]);


    const handleLoadMoreClick = () => {
        if(productData) {
            const isThereMoreResult: number = productData?.metadata?.count - productData?.metadata?.limit;
            if(isThereMoreResult > 0) {
              dispatch(increment());
            }
        }
    };

    return (
      <Suspense fallback={<></>}>
        {
          (productData?.data && productData?.data?.length > 0) &&
          (
            <div className="load-more-wrapper">
                <div className="progress-bar-background">
                  <div className="progress-bar-foreground" style={{ width: `${(progressWidth).toFixed(0)}px`}}></div>
                </div>
                <button 
                    type='button' 
                    className="load-more-btn"
                    onClick={() => handleLoadMoreClick()}
                    disabled={reachedLimit}
                    >{reachedLimit ? 'Você já viu tudo' : 'Carregar Mais'}</button>
            </div>
          )
        }
      </Suspense>
    )
}
