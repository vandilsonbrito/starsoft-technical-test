'use client';
import { Suspense, useEffect, useState } from 'react';
import { useProductData } from '@/utils/hooks/useProductsData';
import ProductContainer from './ProductContainer';
import { ItemsFromData } from '@/utils/types/types';
import ProductFallbackContainer from './ProductFallbackContainer';
import { useDispatch, useSelector  } from 'react-redux';
import { RootState } from '../../utils/redux/store'; 
import FadeInOnScroll from './ItemAnimationEffect';
import { setIsThereData } from '@/utils/redux/slices/isThereAPIdata';

export default function DisplayingProducts() {

    const dispatch = useDispatch();
    const limitValue = useSelector((state: RootState) => state.limit.value);
    const { data: productData, error } = useProductData(limitValue);
    const [items, setItems] = useState<ItemsFromData[]>([]);

    useEffect(() => {
        console.log("Data", productData)
        if(productData) {
            dispatch(setIsThereData(true));
            setItems(productData.data)
        }
    }, [dispatch, productData]);

    useEffect(() => {
        if(error || productData?.error) {
            dispatch(setIsThereData(false));
        }
    }, [dispatch, productData, error]);


    return (
        <Suspense fallback={<ProductFallbackContainer />}>
            {items?.length > 0 ? (
                items.map((item, index) => (
                    <FadeInOnScroll key={item.id || index}>
                        <ProductContainer item={item} />
                    </FadeInOnScroll>
                ))
            ) : (
                <ProductFallbackContainer />
            )}
        </Suspense>
    )
}
