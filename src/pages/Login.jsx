import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function Login() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = localStorage.getItem("lms_user_" + email);

  if (!savedUser) {
    alert("User not found ");
    return;
  }

  const user = JSON.parse(savedUser);

  if (user.password !== password) {
    alert("Wrong password ");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Login Successful ");
  window.location.href = "/dashboard";
};


  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen flex items-center justify-center text-white">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 w-full max-w-lg"
      >

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-400">AI LMS</h1>
          <p className="text-gray-400 mt-2">Learning Management System</p>
        </div>

        {/* Role Selector */}
        <div className="flex mb-10 bg-white/5 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 rounded-full font-bold transition ${
              role === "student"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Student Login
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 rounded-full font-bold transition ${
              role === "admin"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Admin Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label className="block mb-2 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/40 transition"
          >
            Login as {role === "student" ? "Student" : "Admin"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register here
          </Link>
        </div>

      </motion.div>
    </div>
  );
}
