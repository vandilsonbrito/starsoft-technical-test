'use client';
import { useEffect, useState } from 'react';
import { useProductData } from '@/utils/hooks/useProductsData';
import ProductContainer from './ProductContainer';
import { ItemsFromData } from '@/utils/types/types';
import ProductFallbackContainer from './ProductFallbackContainer';
import { useSelector  } from 'react-redux';
import { RootState } from '../../utils/redux/store'; 

export default function DisplayingProducts() {

    const limitValue = useSelector((state: RootState) => state.limit.value);
    const { data } = useProductData(limitValue);
    const [items, setItems] = useState<ItemsFromData[] | []>([])

    useEffect(() => {
        console.log("Data", data)
        if(data) {
            setItems(data.data)
        }
      }, [data]);

    return (
        <>
            {
                items.length > 0 ? 
                (
                    items.map((item: ItemsFromData, index: number) => {
                        return (
                            <div key={index}>
                                <ProductContainer item={item} />
                            </div>
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
