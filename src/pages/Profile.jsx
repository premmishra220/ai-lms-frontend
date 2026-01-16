import { useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-10 mb-16 text-white"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          My Profile
        </h1>
        <p className="text-xl text-gray-400">
          Manage your account, courses and achievements
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white/5 backdrop-blur rounded-3xl shadow-2xl p-12 border border-white/10"
      >

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">

          {/* Avatar */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-black overflow-hidden shadow-xl border-4 border-indigo-500">
              {avatar ? (
                <img src={avatar} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-indigo-400">
                  P
                </div>
              )}
            </div>

            <label className="absolute bottom-2 right-2 bg-indigo-600 text-white px-4 py-2 rounded-full cursor-pointer text-sm font-semibold shadow-lg hover:bg-indigo-700">
              Change
              <input type="file" hidden onChange={handleAvatarChange} />
            </label>
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-white">
              Prem Mishra
            </h2>
            <p className="text-gray-400 text-lg mb-4">premmishrasonb@gmail.com</p>

            <span className="inline-block bg-green-500/20 text-green-400 px-5 py-2 rounded-full font-bold border border-green-400/30">
              Active Student
            </span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="font-bold text-xl mb-3">Account Type</h3>
            <p className="text-lg">Student</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="font-bold text-xl mb-3">Joined On</h3>
            <p className="text-lg">January 2026</p>
          </motion.div>

        </div>

        {/* Courses Section */}
        <h3 className="text-3xl font-extrabold mb-8 text-white">
          My Courses
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-2xl"
          >
            <h4 className="font-bold text-2xl mb-4">MERN Stack Mastery</h4>
            <div className="w-full bg-white/20 rounded-full h-3 mb-3">
              <div className="bg-white h-3 rounded-full w-[60%]"></div>
            </div>
            <p>Progress: 60%</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl p-8 shadow-2xl"
          >
            <h4 className="font-bold text-2xl mb-4">AI with JavaScript</h4>
            <div className="w-full bg-white/20 rounded-full h-3 mb-3">
              <div className="bg-white h-3 rounded-full w-[30%]"></div>
            </div>
            <p>Progress: 30%</p>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}
