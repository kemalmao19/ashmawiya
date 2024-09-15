import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import { Register } from "./components/Auth/Register";
import { Login } from "./components/Auth/Login";
import { Toaster } from "react-hot-toast";
import { AuthCheck } from "./middleware";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/dashboard/*"
          element={
            <AuthCheck>
              <Dashboard />
            </AuthCheck>
          }
        />
        <Route
          path="/register"
          element={
            <AuthCheck>
              <Register />
            </AuthCheck>
          }
        />
        <Route
          path="/login"
          element={
            <AuthCheck>
              <Login />
            </AuthCheck>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
