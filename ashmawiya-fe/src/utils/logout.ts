import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
export const logout = () => {
    // localStorage.removeItem("user");
    toast.success("Logout ...");
    Cookies.remove("token")
    // refresh
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}