import { useQuery } from "@tanstack/react-query";
import { ProductsDataArray } from "../types/types";

export function useProductData(quanityItemsLimit: number) {

    const URL: string = process.env.NEXT_PUBLIC_API_URL || '';

    const fetchProductsData = async () => {
        try {
            const response = await fetch(`${URL}/v1/products?page=1&limit=${quanityItemsLimit}`);
            const data: ProductsDataArray = await response.json();
            return data;
        }
        catch(e) {
            console.error('Error fetching Products Data', e)
        }
    }

    const query = useQuery({
        queryFn: fetchProductsData,
        queryKey: ['products-data', quanityItemsLimit],
    })
    return query;
}