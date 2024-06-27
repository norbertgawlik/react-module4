import { toast } from "react-toastify";
import { ProductFormSchemaInfer } from "../types/Product";
import { CategoryFormSchemaInfer } from "../types/Category";
import { OrderFormSchemaInfer } from "../types/Order";

type Props<T> = {
    data : T,
    record : {id : string},
};

const updateData = <T>({data,record} : Props<T>, endpoint: string) : Promise<void> => {
    return fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${endpoint}/${record.id}`,{
        method : 'PATCH',
        headers : {
            "Authorization" : `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            "Content-type" : "application/json"
        },
        body : JSON.stringify({fields: data})
    })
    .then((response)=>{
        if(response.ok){
            toast.success("Record updated successfully!");
            return response.json();
        }else{
            toast.error("Failed to updated!");
        }
    });
};

export const updateProduct = ({data,record} : Props<ProductFormSchemaInfer>) : Promise<void> =>{
    return updateData({data,record},"products");
};

export const updateCategory = ({data,record} : Props<CategoryFormSchemaInfer>) : Promise<void> =>{
    return updateData({data,record},"products");
};

export const updateOrder = ({data,record} : Props<OrderFormSchemaInfer>) : Promise<void> =>{
    return updateData({data,record},"products");
};
