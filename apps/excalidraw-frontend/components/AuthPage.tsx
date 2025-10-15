"use client";
import { useState } from "react";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    console.log(isSignin ? "Signing in" : "Signing up", { email, password });
  };

  return (
    <>
      <style>
        {`
          /* Fix Chrome autofill background */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0px 1000px #1f2937 inset !important; /* bg-gray-800 */
            -webkit-text-fill-color: #ffffff !important; /* text-white */
          }
        `}
      </style>

      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black px-4">
        {/* Excalidraw Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Excalidraw
        </h1>

        <div className="p-8 md:p-10 m-2 bg-gray-900 rounded-3xl shadow-2xl w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">
            {isSignin ? "Sign In" : "Sign Up"}
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white bg-gray-800 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white bg-gray-800 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg"
            >
              {isSignin ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="mt-4 text-center text-gray-400 text-sm">
            {isSignin ? (
              <>
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 hover:underline">
                  Sign In
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
