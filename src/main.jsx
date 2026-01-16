import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white/10 px-6 md:px-10 py-4 text-gray-300">

      {/* Top Bar */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-400">
          AI LMS
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">

          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/courses" className="hover:text-indigo-400 transition">Courses</Link>
          <Link to="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link>
          <Link to="/profile" className="hover:text-indigo-400 transition">Profile</Link>
          <Link to="/certificate" className="hover:text-indigo-400 transition">Certificate</Link>
          <Link to="/orders" className="hover:text-indigo-400 transition">Orders</Link>
          <Link to="/notifications" className="hover:text-indigo-400 transition">Notifications</Link>
          <Link to="/progress" className="hover:text-indigo-400 transition">Progress</Link>
          <Link to="/chatbot" className="hover:text-indigo-400 transition">Chatbot</Link>
          <Link to="/achievements" className="hover:text-indigo-400 transition">Achievements</Link>
          <Link to="/analytics" className="hover:text-indigo-400 transition">Analytics</Link>
          <Link to="/invoice" className="hover:text-indigo-400 transition">Invoice</Link>
          <Link to="/upload-course" className="hover:text-indigo-400 transition">Upload Course</Link>
          <Link to="/wishlist" className="hover:text-indigo-400 transition">Wishlist</Link>

          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 bg-white/5 rounded-xl p-6 space-y-4 text-sm font-semibold">

          <Link to="/" className="block hover:text-indigo-400">Home</Link>
          <Link to="/courses" className="block hover:text-indigo-400">Courses</Link>
          <Link to="/dashboard" className="block hover:text-indigo-400">Dashboard</Link>
          <Link to="/profile" className="block hover:text-indigo-400">Profile</Link>
          <Link to="/certificate" className="block hover:text-indigo-400">Certificate</Link>
          <Link to="/orders" className="block hover:text-indigo-400">Orders</Link>
          <Link to="/notifications" className="block hover:text-indigo-400">Notifications</Link>
          <Link to="/progress" className="block hover:text-indigo-400">Progress</Link>
          <Link to="/chatbot" className="block hover:text-indigo-400">Chatbot</Link>
          <Link to="/achievements" className="block hover:text-indigo-400">Achievements</Link>
          <Link to="/analytics" className="block hover:text-indigo-400">Analytics</Link>
          <Link to="/invoice" className="block hover:text-indigo-400">Invoice</Link>
          <Link to="/upload-course" className="block hover:text-indigo-400">Upload Course</Link>
          <Link to="/wishlist" className="block hover:text-indigo-400">Wishlist</Link>

          <Link
            to="/login"
            className="block bg-indigo-600 text-white text-center py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>
      )}

    </nav>
  );
}
