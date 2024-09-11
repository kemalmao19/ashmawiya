import { useState } from "react";
import { Link } from "react-router-dom";
import {useSubmit} from "./hooks/useSubmit";
import { Layout } from "./Layout";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {handleLogin} = useSubmit();
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
      <form
        id="login"
        onSubmit={handleLogin(setIsLoading)}
        className="flex flex-col gap-4"
        autoComplete="on"
      >
        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
        id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="on"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="password" className="text-gray-700 font-medium">
          Password
        </label>
        <input
        id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <button
          type="submit"
          className={`mt-4 ${isLoading ? "cursor-not-allowed opacity-50" : ""} bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-300`}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <div>
          Already have account? <Link to="/register" className="hover:text-black">Register</Link>
        </div>
      </form>
    </Layout>
  );
};
