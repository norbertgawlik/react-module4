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