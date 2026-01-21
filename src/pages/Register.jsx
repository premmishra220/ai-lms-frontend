import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = { name, email, password };

    localStorage.setItem("lms_user_" + email, JSON.stringify(user));

    alert("Registration Successful ");
    window.location.href = "/login";
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen flex items-center justify-center text-white">

      <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 w-full max-w-lg">

        <h2 className="text-3xl font-extrabold mb-8 text-indigo-400 text-center">
          Create Account
        </h2>

        <input
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white mb-4 focus:outline-none focus:border-indigo-500"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white mb-4 focus:outline-none focus:border-indigo-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white mb-6 focus:outline-none focus:border-indigo-500"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/40 transition"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}
