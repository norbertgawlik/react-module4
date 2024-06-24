import { Category } from "../types/Category";
import { Order } from "../types/Order";
import { Product } from "../types/Product";

export type AirtableListResponse<T> = {
    records : T
};

const fetchData = <T>(endpoint : string) : Promise<AirtableListResponse<T>> => {
    return fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_ARITABLE_BASE_ID}/${endpoint}`,{
        headers : {
            'Authorization' : `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            'Content-type' : 'application/json'
        }
    })
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`Invalid request | status: ${response.status}`)
    })
};

export const fetchProducts = () : Promise<AirtableListResponse<Product[]>> => {
    return fetchData('productss');
};

export const fetchCategories = () : Promise<AirtableListResponse<Category[]>> => {
    return fetchData('categories');
};

export const fetchOrders = () : Promise<AirtableListResponse<Order[]>> => {
    return fetchData('orders');
};