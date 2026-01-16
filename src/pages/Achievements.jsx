import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
          Achievements
        </h1>
        <p className="text-gray-400 text-lg">
          Your learning milestones and rewards
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">

        {[
          "Completed MERN Stack",
          "AI Course Beginner Badge",
          "100+ Hours Learning",
        ].map((title, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">Unlocked Achievement</p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
