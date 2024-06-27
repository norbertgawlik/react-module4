import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../ui";
import { zodResolver } from '@hookform/resolvers/zod';
import { type Product, ProductFormSchema, type ProductFormSchemaInfer } from "../../types/Product";
import { toast } from "react-toastify";
import { updateProduct } from "../../services/updateData";

type Props = {
    record : Product,
    handleEditRecord : (updatedProduct : Product) => void
};

export const ProductsForm = ({record,handleEditRecord}: Props) => {
    const defaultValues = {            
        name:record.fields.name,
        category:record.fields.category,
        description:record.fields.description,
        price:record.fields.price
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormSchemaInfer>({
        defaultValues : defaultValues,
        resolver : zodResolver(ProductFormSchema)
    })
    
    const onSubmit: SubmitHandler<ProductFormSchemaInfer> = async (data) => {
        try{
            const updatedRecord = {
                ...record,
                fields : {
                    ...record.fields,
                    ...data
                }
            };
            await updateProduct({data,record});
            handleEditRecord(updatedRecord);
        }catch(e){
            toast.error("Failed to updated!");
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <Input label="name" {...register("name")} error={errors.name}/>
                <Input label="category" {...register("category")} error={errors.category}/>
                <Input label="description" {...register("description")} error={errors.description}/>
                <Input label="price" {...register("price", { valueAsNumber : true})} error={errors.price}/>
                <Button label="submit" type="submit"/>
            </form>
        </>
    );
};