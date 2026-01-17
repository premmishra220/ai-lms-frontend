import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-white/10 px-4 md:px-10 py-4 text-gray-300">

      {/* Top Row */}
      <div className="flex justify-between items-center mb-3 md:mb-0">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-400">
          AI LMS
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm font-semibold"
        >
          Login
        </Link>
      </div>

      {/* Links Row (Scrollable on Mobile) */}
      <div className="flex md:flex-wrap gap-6 md:gap-6 overflow-x-auto md:overflow-visible whitespace-nowrap text-sm font-semibold scrollbar-hide">

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

      </div>
    </nav>
  );
}
