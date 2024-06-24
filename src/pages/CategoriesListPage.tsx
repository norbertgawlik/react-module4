import { Category } from "../types/Category";
import { AirtableListResponse, fetchCategories } from "../services/fetchData";
import { Text } from "../ui";
import { CategoriesList } from "../features/CategoriesList/CategoriesList";
import { useApi } from "../hooks/useApi";

export const CategoriesListPage = () => {
    const {data,isLoading,isError,error} = useApi<AirtableListResponse<Category[]>>(fetchCategories);

    return(
        <>
            <Text>Categories List</Text>
            {isLoading && <p className="text-orange-400">Loading...</p>}
            {isError && <p className="text-red-600">{error}</p>}
            {data && <CategoriesList categories={data.records}/>}
        </>
    );
};