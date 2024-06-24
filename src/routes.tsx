import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CategoriesListPage, HomePage, OrdersListPage, ProductsListPage } from "./pages";

export const routes = {
    HOME : {
        path : '/'
    },
    PRODUCTS : {
        path : '/products'
    },
    CATEGORIES : {
        path : '/categories'
    },
    ORDERS : {
        path : '/orders'
    }
};

export const router = createBrowserRouter([{
    path : routes.HOME.path,
    element : <Layout/>,
    children : [{
        path : routes.HOME.path,
        element : <HomePage/>
    },
    {
        path : routes.PRODUCTS.path,
        element : <ProductsListPage/>
    },
    {
        path : routes.CATEGORIES.path,
        element : <CategoriesListPage/>
    },
    {
        path : routes.ORDERS.path,
        element : <OrdersListPage/>
    }]
}]);