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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input className="border p-2 w-full mb-3" placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input className="border p-2 w-full mb-3" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="border p-2 w-full mb-3" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
