export interface ProductsDataArray {
    data: ItemsData[],
    metadata: {
        count: number,
        hasNextPage: boolean,
        hasPreviousPage: boolean,
        limit: number,
        page: number,
        pageCount: number
    }
}

export interface ItemsData {
    id: number,
    createdAt: string,
    name: string,
    image: string
    description: string;
    price: number
}