import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          Analytics Dashboard
        </h1>
        <p className="text-lg text-gray-400">
          Track your learning performance and activity insights
        </p>
      </div>

      {/* Main Panel */}
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-3xl shadow-2xl p-12">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600/20 border border-indigo-400/30 text-indigo-300 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">Study Hours</h3>
            <p className="text-4xl font-extrabold">120+</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600/20 border border-purple-400/30 text-purple-300 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">Completed Modules</h3>
            <p className="text-4xl font-extrabold">18</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-600/20 border border-pink-400/30 text-pink-300 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">Average Score</h3>
            <p className="text-4xl font-extrabold">87%</p>
          </motion.div>

        </div>

        {/* Activity Timeline */}
        <h2 className="text-3xl font-extrabold mb-10">Recent Learning Activity</h2>

        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xl">
              📘
            </div>
            <div>
              <h4 className="text-lg font-bold">Completed MERN Module 4</h4>
              <p className="text-gray-400">2 hours ago</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xl">
              🎥
            </div>
            <div>
              <h4 className="text-lg font-bold">Watched AI Course Video</h4>
              <p className="text-gray-400">Yesterday</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500/20 text-pink-400 text-xl">
              🏆
            </div>
            <div>
              <h4 className="text-lg font-bold">Earned Web Certificate</h4>
              <p className="text-gray-400">3 days ago</p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
