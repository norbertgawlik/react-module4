import { useState } from "react";
import { Product } from "../../types/Product";
import { ProductsForm } from "./ProductsForm";
import { Button } from "../../ui";

type Props = {
    data : Product[]
}
export const ProductsList = ({data} : Props) => {
    const [editIndex,setEditIndex] = useState<number | null>(null);
    const [products,setProducts] = useState(data);

    const handleUpdateProduct = (index: number, updatedProduct : Product) => {
        const newProducts = [...products];
        newProducts[index] = updatedProduct;
        setProducts(newProducts);
        setEditIndex(null);
    };
    
    return(
        <>
            <ul>
                {products.map((e,i)=>{
                    return(
                        <li key={i} className="border-b border-gray-500 pb-4 mb-4">
                            <strong>Name:</strong> {e.fields.name} <br/>
                            <strong>Category: </strong>{e.fields.category} <br/>
                            <strong>Description: </strong>{e.fields.description} <br/>
                            <strong>Price: </strong>{e.fields.price}zł <br/>
                            <strong>Last modified: </strong>{new Date(e.fields.updated_at).toLocaleDateString()}r.<br/>
                            {editIndex === i ? 
                                <ProductsForm 
                                    record={e} 
                                    handleEditRecord={(updatedProduct : Product)=>handleUpdateProduct(i,updatedProduct)}
                                /> : 
                                <Button label="edit" onClick={()=>setEditIndex(i)}/>
                            }
                        </li>
                    );
                })}
            </ul>
        </>
    );
};