export type Order = {
    id: string,
    fields: {
        order_id: number,
        product_id: number,
        quantity : number,
        price: number,
        customer_name : string,
        created_at : Date,
        updated_at : Date
    };
};