import Cookies from "js-cookie";
export const logout = () => {
    // localStorage.removeItem("user");
    Cookies.remove("token")
    // refresh
    window.location.reload()
}