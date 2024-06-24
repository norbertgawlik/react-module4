import { Product } from "../types/Product";
import { AirtableListResponse, fetchProducts } from "../services/fetchData";
import { Text } from "../ui";
import { ProductsList } from "../features/ProductsList/ProductsList";
import { useApi } from "../hooks/useApi";

export const ProductsListPage = () => {
    const {data,isLoading,isError,error} = useApi<AirtableListResponse<Product[]>>(fetchProducts);
    return(
        <>
            <Text>Products</Text>
            {isLoading && <p className="text-orange-400">Loading...</p>}
            {isError && <p className="text-red-600">{error}</p>}
            {data && <ProductsList products={data.records}/>}
        </>
    );
};