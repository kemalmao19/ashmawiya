import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthCheck = (props: {
    children: JSX.Element;
    direction?: string;
}) => {
    const nav = useNavigate();
    useEffect(() => {
        const path = window.location.pathname;
        const token = Cookies.get("token");

        if (token) {
            nav(props.direction ?? window.location.pathname);
        } else if (!token && path === "/register") {
            nav(path);
        } else {
            nav("/login");
        }
    }, [nav, props.direction]);
    return props.children;
};
