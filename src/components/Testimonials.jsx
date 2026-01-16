import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    let s = 0, c = 0, r = 0;
    const interval = setInterval(() => {
      if (s < 5000) setStudents(s += 100);
      if (c < 25) setCourses(c += 1);
      if (r < 1200) setReviews(r += 20);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Learn Skills for the Future 🚀
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10">
              Build real-world projects with AI powered learning platform
            </p>

            <Link to="/courses">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
                Browse Courses
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.img
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4734.jpg"
            alt="Learning"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600">{students}+</h2>
            <p className="text-lg mt-2 font-semibold">Students Enrolled</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-purple-600">{courses}+</h2>
            <p className="text-lg mt-2 font-semibold">Expert Courses</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-500">{reviews}+</h2>
            <p className="text-lg mt-2 font-semibold">Happy Reviews</p>
          </div>

        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">What Our Students Say ❤️</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow">
              <p>"Best platform to learn MERN stack!"</p>
              <h4 className="mt-4 font-bold">Rahul Sharma</h4>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow">
              <p>"Amazing AI courses with real projects."</p>
              <h4 className="mt-4 font-bold">Ankit Verma</h4>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow">
              <p>"Helped me crack my first job!"</p>
              <h4 className="mt-4 font-bold">Priya Singh</h4>
            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}
