import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkEnvironment } from "../../../config/apiUrl";
import toast from "react-hot-toast";
import Cookies from 'js-cookie'


export const useSubmit = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      // navigate("/dashboard");
      window.location.reload();
    }
  }, [isLogin]);

  const useRegister = (setIsLoading: (value: boolean) => void) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating an object from form data
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      setIsLoading(true);
      const response = await fetch(checkEnvironment() + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        // Handle errors, e.g., 400 or 500 responses
        const errorData = await response.json();
        toast.error(errorData.message);
        console.log("register failed", errorData.message);
        setIsLoading(false);
        return;
      }
      // Successfully registered
      // const data = await response.json();
      // console.log("Registration successful:", data.user);
      toast.success("Registration Successful");
      setTimeout(() => {
        navigate("/login");
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      // Handle network errors or other unexpected issues
      toast.error("Registration Failed");
      console.error("Error registering user:", error);
    }
  };
  const handleLogin = (setIsLoading: (value: boolean) => void) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating an object from form data
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      setIsLoading(true);
      const response = await fetch(checkEnvironment() + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        // Handle errors, e.g., 400 or 500 responses
        const errorData = await response.json();
        toast.error(errorData.message);
        console.log("Login failed", errorData.message);
        setIsLoading(false);
        return;
      }
      // Successfully Login
      const {data, message, token} = await response.json();
      console.log(message);
      Cookies.set("token", token);
      localStorage.setItem("user", JSON.stringify(data));

      toast.success("Login Successful");
      setTimeout(() => {
        setIsLogin(!isLogin);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      // Handle network errors or other unexpected issues
      toast.error("Login Failed");
      console.error("Error Login user:", error);
    }
  };
  return { useRegister, handleLogin };
};
