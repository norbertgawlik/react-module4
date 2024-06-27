import { z } from "zod";

export type Category = {
    id: string,
    fields: {
        category_id: number,
        name: string,
        description: string,
        created_at : Date,
        updated_at : Date
    };
};

export const CategoryFormSchema = z.object({
    name : z.string().min(1,"filed is required"),
    description : z.string().min(1,"field is required")
});

export type CategoryFormSchemaInfer = z.infer<typeof CategoryFormSchema>;
