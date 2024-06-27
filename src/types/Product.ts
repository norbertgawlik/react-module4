import { z } from "zod";

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

export const ProductFormSchema = z.object({
    name : z.string().min(1,"filed is required"),
    category : z.string().min(1,"field is required"),
    description : z.string().min(1,"field is required"),
    price : z.number().min(1,"field is required")
});

export type ProductFormSchemaInfer = z.infer<typeof ProductFormSchema>;