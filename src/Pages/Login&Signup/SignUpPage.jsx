import React, { useState } from "react";
import { Link } from "react-router-dom";
import IeeeLogo from "/src/assets/Logo/unnameddadawdadfxzffbcvxb (4).png";
import blueLogo from "/src/assets/Logo/Picture2-removebg-preview.png";

export default function SignUp() {
  // ------------------- STATES -------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [level, setLevel] = useState("");
  const [accessType, setAccessType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ------------------- HANDLE SUBMIT -------------------
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          faculty,
          level,
          accessType,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 relative overflow-hidden">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-black to-[#023260] text-white shadow-[10px_0_25px_rgba(0,0,0,0.3)]">
        <img
          src={IeeeLogo}
          alt="IEEE Logo"
          className="w-56 lg:w-64 mb-3 drop-shadow-md"
        />
        <h1 className="text-lg lg:text-xl font-light text-center leading-snug px-4">
          Join minds that move <br /> the world forward
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4 sm:px-6 bg-gray-50">
        <div className="bg-white shadow-md rounded-2xl px-5 sm:px-6 py-5 w-full max-w-md md:max-w-lg">
          {/* Title */}
          <div className="flex flex-col justify-center items-center mb-3">
            <h2 className="text-3xl font-bold text-[#023260]">Sign Up</h2>
          </div>

          {/* Compact Form */}
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            onSubmit={handleSignUp}>
            {/* First Name */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            {/* Faculty */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Faculty
              </label>
              <select
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]">
                <option value="">Select Faculty...</option>
                <option value="engineering">Engineering</option>
                <option value="computer">Computer Science</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Level */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Level
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]">
                <option value="">Select Level...</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="4">Level 5</option>
              </select>
            </div>

            {/* Access Type */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Access Type
              </label>
              <select
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]">
                <option value="">Select access type...</option>
                <option value="member">Member</option>
                <option value="admin">Head</option>
              </select>
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Email
              </label>
              <input
                type="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium text-[#023260] mb-0.5">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-2 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#023260]"
              />
            </div>

            {/* Sign Up Button */}
            <div className="col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-[#023260] text-white font-semibold py-2 rounded-full hover:bg-[#004b8a] transition text-sm">
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-xs sm:text-sm text-gray-600 text-center mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#023260] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
