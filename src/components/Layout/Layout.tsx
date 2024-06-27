import { Outlet } from "react-router";
import { Menu } from "./Menu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    return(
        <>
            <Menu/>
            <Outlet/>
            <ToastContainer/>
        </>
    );
};