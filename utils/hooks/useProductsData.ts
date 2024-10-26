import { useQuery } from "@tanstack/react-query";
import { ProductsDataArray } from "../types/types";

export function useProductData() {
    const fetchProductsData = async () => {
        try {
            const response = await fetch('https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20');
            const data: ProductsDataArray = await response.json();
            return data;
        }
        catch(e) {
            console.error('Error fetching Products Data', e)
        }
    }

    const query = useQuery({
        queryFn: fetchProductsData,
        queryKey: ['products-data']
    })
    return query;
}