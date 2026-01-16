import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-white/10 px-10 py-4 flex justify-between items-center text-gray-300">

      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-indigo-400">
        AI LMS
      </Link>

      {/* Links */}
      <div className="space-x-6 flex items-center text-sm font-semibold">

        <Link to="/" className="hover:text-indigo-400 transition">
          Home
        </Link>

        <Link to="/courses" className="hover:text-indigo-400 transition">
          Courses
        </Link>

        <Link to="/dashboard" className="hover:text-indigo-400 transition">
          Dashboard
        </Link>

        <Link to="/profile" className="hover:text-indigo-400 transition">
          Profile
        </Link>

        <Link to="/certificate" className="hover:text-indigo-400 transition">
          Certificate
        </Link>

        <Link to="/orders" className="hover:text-indigo-400 transition">
          Orders
        </Link>

        <Link to="/notifications" className="hover:text-indigo-400 transition">
          Notifications
        </Link>

        <Link to="/progress" className="hover:text-indigo-400 transition">
          Progress
        </Link>

        <Link to="/chatbot" className="hover:text-indigo-400 transition">
          Chatbot
        </Link>

        <Link to="/achievements" className="hover:text-indigo-400 transition">
          Achievements
        </Link>

        <Link to="/analytics" className="hover:text-indigo-400 transition">
          Analytics
        </Link>

        <Link to="/invoice" className="hover:text-indigo-400 transition">
          Invoice
        </Link>

        <Link to="/upload-course" className="hover:text-indigo-400 transition">
          Upload Course
        </Link>

        <Link to="/wishlist" className="hover:text-indigo-400 transition">
          Wishlist
        </Link>

        <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
          Login
        </Link>

      </div>
    </nav>
  );
}   