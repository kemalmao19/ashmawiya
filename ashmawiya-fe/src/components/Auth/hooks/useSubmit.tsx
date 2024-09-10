import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from 'js-cookie'


export const useSubmit = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin]);
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating an object from form data
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        // Handle errors, e.g., 400 or 500 responses
        const errorData = await response.json();
        console.log("register failed", errorData);
        return;
      }
      // Successfully registered
      const data = await response.json();
      console.log("Registration successful:", data);
      alert("Registration successful!");
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error("Error registering user:", error);
    }
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating an object from form data
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        // Handle errors, e.g., 400 or 500 responses
        const errorData = await response.json();
        console.log("Login failed", errorData);
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
      }, 2000);
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error("Error Login user:", error);
    }
  };
  return { handleRegister, handleLogin };
};
