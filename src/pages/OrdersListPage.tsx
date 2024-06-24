import { Order } from "../types/Order";
import { AirtableListResponse, fetchOrders } from "../services/fetchData";
import { Text } from "../ui";
import { OrdersList } from "../features/OrdersList/OrdersList";
import { useApi } from "../hooks/useApi";

export const OrdersListPage = () => {
    const {data,isLoading,isError,error} = useApi<AirtableListResponse<Order[]>>(fetchOrders);

    return(
        <>
            <Text>Orders</Text>
            {isLoading && <p className="text-orange-400">Loading...</p>}
            {isError && <p className="text-red-600">{error}</p>}
            {data && <OrdersList orders={data.records}/>}
        </>
    );
};