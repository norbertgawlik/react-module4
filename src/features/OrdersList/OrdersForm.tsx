import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../ui";
import { zodResolver } from '@hookform/resolvers/zod';
import { type Order, OrderFormSchema, type OrderFormSchemaInfer } from "../../types/Order";
import { toast } from "react-toastify";
import { updateOrder } from "../../services/updateData";

type Props = {
    record : Order,
    handleEditRecord : (updateOrder : Order) => void
};

export const OrdersForm = ({record,handleEditRecord}: Props) => {
    const defaultValues = {            
        product_id:record.fields.product_id,
        quantity:record.fields.quantity,
        price:record.fields.price,
        customer_name:record.fields.customer_name
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OrderFormSchemaInfer>({
        defaultValues : defaultValues,
        resolver : zodResolver(OrderFormSchema)
    })
    
    const onSubmit: SubmitHandler<OrderFormSchemaInfer> = async (data) => {
        try{
            const updatedRecord = {
                ...record,
                fields : {
                    ...record.fields,
                    ...data
                }
            };
            await updateOrder({data,record});
            handleEditRecord(updatedRecord);
        }catch(e){
            toast.error("Failed to updated!");
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <Input label="product id" {...register("product_id", { valueAsNumber : true})} error={errors.product_id}/>
                <Input label="quantity" {...register("quantity", { valueAsNumber : true})} error={errors.quantity}/>
                <Input label="price" {...register("price", { valueAsNumber : true})} error={errors.price}/>
                <Input label="customer_name" {...register("customer_name")} error={errors.customer_name}/><br/>
                <Button label="submit" type="submit"/>
            </form>
        </>
    );
};