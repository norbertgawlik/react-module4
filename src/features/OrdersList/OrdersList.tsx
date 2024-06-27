import { useState } from "react";
import { Order } from "../../types/Order";
import { OrdersForm } from "./OrdersForm";
import { Button } from "../../ui";

type Props = {
    data : Order[]
};

export const OrdersList = ({data} : Props) => {
    const [editIndex,setEditIndex] = useState<number | null>(null);
    const [orders,setOrders] = useState(data);

    const handleUpdateOrder = (index: number, updatedOrder : Order) => {
        const newProducts = [...orders];
        newProducts[index] = updatedOrder;
        setOrders(newProducts);
        setEditIndex(null);
    };
    return(
        <>
            <ul>
                {orders.map((e,i)=>{
                    return(
                        <li key={i} className="border-b border-gray-500 pb-4 mb-4">
                            Order Id: {e.fields.order_id}<br/>
                            Product Id: {e.fields.product_id}<br/>
                            Quantity : {e.fields.quantity}<br/>
                            Price: {e.fields.price}zł<br/>
                            Customer : {e.fields.customer_name}<br/>
                            {editIndex === i ? 
                                <OrdersForm 
                                    record={e} 
                                    handleEditRecord={(updatedOrder : Order)=>handleUpdateOrder(i,updatedOrder)}
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