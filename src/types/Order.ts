import { z } from "zod";

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

export const OrderFormSchema = z.object({
    product_id : z.number().min(1,"filed is required"),
    quantity : z.number().min(1,"field is required"),
    price : z.number().min(1,"field is required"),
    customer_name : z.string().min(1,"field is required")
});

export type OrderFormSchemaInfer = z.infer<typeof OrderFormSchema>;
