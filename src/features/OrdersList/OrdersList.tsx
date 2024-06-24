import { Order } from "../../types/Order";

type Props = {
    orders : Order[]
};

export const OrdersList = ({orders} : Props) => {
    return(
        <>
            <ul>
                {orders.map((e,i)=>{
                    return(
                        <li key={i} className="border-b border-gray-500 pb-4 mb-4">
                            Order Id: {e.fields.order_id}<br/>
                            Product Id: {e.fields.product_id}<br/>
                            Price: {e.fields.price}zł<br/>
                            Customer : {e.fields.customer_name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};