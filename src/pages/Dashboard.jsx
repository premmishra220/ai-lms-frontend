import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-4">
          Dashboard
        </h1>
        <p className="text-gray-400 text-lg">
          Welcome back, Prem 👋
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600/20 border border-indigo-400/30 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">Enrolled Courses</h3>
          <p className="text-4xl font-extrabold text-indigo-400">2</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-600/20 border border-green-400/30 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">Completed Modules</h3>
          <p className="text-4xl font-extrabold text-green-400">18</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-600/20 border border-pink-400/30 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">Certificates</h3>
          <p className="text-4xl font-extrabold text-pink-400">1</p>
        </motion.div>

      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <Link to="/courses">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/30 transition"
          >
            <h3 className="text-xl font-bold mb-2">Browse Courses</h3>
            <p className="text-gray-400">Explore new learning paths</p>
          </motion.div>
        </Link>

        <Link to="/profile">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/30 transition"
          >
            <h3 className="text-xl font-bold mb-2">My Profile</h3>
            <p className="text-gray-400">Manage your account</p>
          </motion.div>
        </Link>

        <Link to="/upload-course">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/30 transition"
          >
            <h3 className="text-xl font-bold mb-2">Upload Course</h3>
            <p className="text-gray-400">Add new content</p>
          </motion.div>
        </Link>

      </div>
    </div>
  );
}
