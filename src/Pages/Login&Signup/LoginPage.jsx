import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IeeeLogo from "/src/assets/Logo/unnameddadawdadfxzffbcvxb (4).png";
import blueLogo from "/src/assets/Logo/Picture2-removebg-preview.png";
import { supabase } from "../../supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    // Wait briefly so onAuthStateChange fires and navbar updates before navigation
    await new Promise((res) => setTimeout(res, 300));
    navigate("/");
    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-[#ffffff] relative overflow-hidden">
      {/* Left */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-black to-[#023260] text-white relative z-20 shadow-[10px_0_25px_rgba(0,0,0,0.3)]">
        <img
          src={IeeeLogo}
          alt="IEEE Logo"
          className="w-80 mb-4 drop-shadow-md"
        />
        <h1 className="text-2xl font-light text-center leading-snug px-6">
          Join minds that move <br /> the world forward
        </h1>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#ffffff] relative z-10">
        <div className="bg-[#ffffff] shadow-md rounded-2xl px-8 py-10 w-96 md:w-[350px]">
          <div className="flex flex-col md:hidden justify-center items-center mb-6">
            <img src={blueLogo} alt="IEEE Logo" className="w-auto h-12 mb-2" />
            <h2 className="text-3xl font-bold text-[#023260]">Login</h2>
          </div>

          <h2 className="hidden md:block text-4xl font-bold text-center text-[#023260] mb-6 drop-shadow-sm">
            Login
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#023260] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="username@gmail.com"
                className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#023260] mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
              <a
                href="#"
                className="text-xs text-[#023260] hover:underline float-right mt-1">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#023260] text-white font-semibold py-2 rounded-full hover:bg-[#023260]/50 transition disabled:opacity-50">
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-center mt-3 text-sm">{error}</p>
          )}

          <p className="text-sm text-gray-600 text-center mt-5">
            Back To{" "}
            <Link to="/" className="text-[#023260] font-medium hover:underline">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
