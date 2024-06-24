export type Product = {
    id: string,
    fields: {
        product_id: number,
        name: string,
        category: string,
        description: string,
        price: number,
        created_at : Date,
        updated_at : Date
    };
};