import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

export const AuthCheck = (props: { children: JSX.Element }) => {
    const nav = useNavigate()
    useEffect(()=>{
        if (!Cookies.get("token")) {
            nav("/login")
        }
    }, [])
    return (
        props.children
    )
}