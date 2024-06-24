import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    to : string,
    children : string | ReactNode
};

const WaNavLink = ({to,children} : Props) => {
    return(
        <li className="p-1"><NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600-300" : "text-gray-300"
            }
        >{children}</NavLink></li>
    );
};

export const Menu = () => {
    return(
        <>
            <nav className="mb-3"><ul className="flex">
                    <WaNavLink to="/">Home</WaNavLink>
                    <WaNavLink to="/products">Products</WaNavLink>
                    <WaNavLink to="/categories">Categories</WaNavLink>
                    <WaNavLink to="/orders">Orders</WaNavLink>
            </ul></nav>
        </>
    );
};