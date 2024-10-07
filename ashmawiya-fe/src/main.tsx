import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { Register } from "./components/Auth/Register";
import { Login } from "./components/Auth/Login";
import { Toaster } from "react-hot-toast";
import { AuthCheck } from "./middleware";
import { Courses } from "./components/Dashboard/courses/Courses";
import { Main } from "./components/Dashboard/main/Main";
import { Resources } from "./components/Dashboard/resources/Resources";
import { Course } from "./components/Dashboard/courses/Course/Course";
import Landing from "./components/Landing/Landing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard children={<Main />} />} />
        <Route
          path="/dashboard/courses"
          element={<Dashboard children={<Courses />} />}
        />
        <Route
          path="/dashboard/courses/:id"
          element={<Dashboard children={<Course />} />}
        />
        <Route
          path="/dashboard/resources"
          element={<Dashboard children={<Resources />} />}
        />
        <Route
          path="/register"
          element={
            <AuthCheck direction="/dashboard">
              <Register />
            </AuthCheck>
          }
        />
        <Route
          path="/login"
          element={
            <AuthCheck direction="/dashboard">
              <Login />
            </AuthCheck>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
