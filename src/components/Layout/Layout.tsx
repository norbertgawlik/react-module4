import { Outlet } from "react-router";
import { Menu } from "./Menu";

export const Layout = () => {
    return(
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};