import { useSubmit } from "./hooks/useSubmit";
import { Layout } from "./Layout";

export const Register = () => {
  const { handleRegister } = useSubmit();

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
      <form id="register" onSubmit={handleRegister} className="flex flex-col gap-4">
        <label htmlFor="username" className="text-gray-700 font-medium">
          Username
        </label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="password" className="text-gray-700 font-medium">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-300"
        >
          Register
        </button>
      </form>
    </Layout>
  );
};
