import { useState } from "react";
import { useSubmit } from "./hooks/useSubmit";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { useRegister } = useSubmit();

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
      <form id="register" onSubmit={useRegister(setIsLoading)} className="flex flex-col gap-4">
        <label htmlFor="username" className="text-gray-700 font-medium">
          Username
        </label>
        <input
        id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="on"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

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
          placeholder="Enter your password"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <button
          type="submit"
          className={`mt-4 ${isLoading ? "cursor-not-allowed opacity-50" : ""} bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-300`}
        >
          Register
        </button>
        <div>Already have account? <Link to="/login" className="hover:text-black">Login</Link></div>
      </form>
    </Layout>
  );
};
