import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../ui";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "react-toastify";
import { updateCategory } from "../../services/updateData";
import { type Category, CategoryFormSchema, type CategoryFormSchemaInfer } from "../../types/Category";

type Props = {
    record : Category,
    handleEditRecord : (updatedCategory : Category) => void
};

export const CategoriesForm = ({record,handleEditRecord}: Props) => {
    const defaultValues = {            
        name:record.fields.name,
        description:record.fields.description,
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryFormSchemaInfer>({
        defaultValues : defaultValues,
        resolver : zodResolver(CategoryFormSchema)
    })
    
    const onSubmit: SubmitHandler<CategoryFormSchemaInfer> = async (data) => {
        try{
            const updatedRecord = {
                ...record,
                fields : {
                    ...record.fields,
                    ...data
                }
            };
            await updateCategory({data,record});
            handleEditRecord(updatedRecord);
        }catch(e){
            toast.error("Failed to updated!");
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <Input label="name" {...register("name")} error={errors.name}/>
                <Input label="description" {...register("description")} error={errors.description}/>
                <Button label="submit" type="submit"/>
            </form>
        </>
    );
};