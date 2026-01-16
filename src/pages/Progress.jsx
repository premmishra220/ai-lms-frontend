import { motion } from "framer-motion";

export default function Progress() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold text-green-400 mb-4">
          Learning Progress
        </h1>
        <p className="text-gray-400 text-lg">
          Track your course completion status
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">

        <div className="space-y-10">

          {[
            { name: "MERN Stack Mastery", percent: 60 },
            { name: "AI with JavaScript", percent: 30 },
          ].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">{course.name}</h3>
              <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                <div
                  className="bg-green-400 h-3 rounded-full"
                  style={{ width: `${course.percent}%` }}
                ></div>
              </div>
              <p className="text-gray-400">Progress: {course.percent}%</p>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}
