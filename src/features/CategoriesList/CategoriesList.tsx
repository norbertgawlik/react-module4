import { useState } from "react";
import { Category } from "../../types/Category";
import { CategoriesForm } from "./CategoriesForm";
import { Button } from "../../ui";

type Props = {
    data : Category[]
};

export const CategoriesList = ({data} : Props) => {
    const [editIndex,setEditIndex] = useState<number | null>(null);
    const [categories,setCategories] = useState(data);

    const handleUpdateCategory = (index: number, updatedProduct : Category) => {
        const newProducts = [...categories];
        newProducts[index] = updatedProduct;
        setCategories(newProducts);
        setEditIndex(null);
    };

    return(
        <>
            <ul>
                {categories.map((e,i)=>{
                    return(
                        <li key={i} className="border-b border-gray-500 pb-4 mb-4">
                            <strong>Name:</strong> {e.fields.name} <br/>
                            <strong>Description: </strong>{e.fields.description} <br/>
                            <strong>Last modified: </strong>{new Date(e.fields.updated_at).toLocaleDateString()}r.<br/>
                            {editIndex === i ? 
                                <CategoriesForm 
                                    record={e} 
                                    handleEditRecord={(updatedProduct : Category)=>handleUpdateCategory(i,updatedProduct)}
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