import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const wishlist = [
    {
      id: "mern",
      title: "MERN Stack Mastery",
      price: 1999,
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    },
    {
      id: "ai-js",
      title: "AI with JavaScript",
      price: 2999,
      image: "https://img.freepik.com/free-vector/artificial-intelligence-concept_114360-7000.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-pink-400">
          My Wishlist
        </h1>
        <p className="text-lg text-gray-400">
          Save your favorite courses and enroll later
        </p>
      </div>

      {/* Wishlist Grid */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {wishlist.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-3xl shadow-xl overflow-hidden hover:shadow-pink-500/20 transition"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-pink-400 font-bold text-lg mb-4">
                ₹{course.price}
              </p>

              <div className="flex gap-4">
                <Link
                  to={`/courses/${course.id}`}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-pink-500/30 transition"
                >
                  View Course
                </Link>

                <button className="border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition">
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
