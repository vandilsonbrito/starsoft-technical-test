export interface ProductsDataArray {
    data: ItemsFromData[],
    metadata: {
        count: number,
        hasNextPage: boolean,
        hasPreviousPage: boolean,
        limit: number,
        page: number,
        pageCount: number
    }
}

export interface ItemsFromData {
    id: number,
    createdAt: string,
    name: string,
    image: string
    description: string;
    price: number
}

export interface itemsToRedux {
    id: number,
    createdAt: string,
    name: string,
    image: string
    description: string;
    price: number,
    quantity?: number
}