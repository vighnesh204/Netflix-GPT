import { useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black/80 text-white my-24 mx-auto right-0 left-0 rounded-md shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-zinc-800 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 bg-zinc-800 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-zinc-800 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded font-semibold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <label>
            <input type="checkbox" className="mr-1" />
            Remember me
          </label>
          <span className="hover:underline cursor-pointer">Need help?</span>
        </div>

        <p
          onClick={toggleSignInForm}
          className="text-white text-sm mt-6  hover:underline cursor-pointer whitespace-nowrap"
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
