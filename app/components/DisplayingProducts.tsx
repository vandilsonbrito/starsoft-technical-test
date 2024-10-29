'use client';
import { useEffect, useState } from 'react';
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
    const { data, error } = useProductData(limitValue);
    const [items, setItems] = useState<ItemsFromData[] | []>([])

    useEffect(() => {
        console.log("Data", data)
        if(data) {
            dispatch(setIsThereData(true));
            setItems(data.data)
        }
    }, [data]);

    useEffect(() => {
        if(error) {
            dispatch(setIsThereData(false));
        }
    }, [error]);


    return (
        <>
            {
                items.length > 0 ? 
                (
                    items.map((item: ItemsFromData, index: number) => {
                        return (
                            <FadeInOnScroll key={index}>
                                <ProductContainer item={item} />
                            </FadeInOnScroll>
                        )
                    })
                )
                :
                (
                    <>
                        <ProductFallbackContainer/>
                    </>
                )
            }
        </>
    )
}
