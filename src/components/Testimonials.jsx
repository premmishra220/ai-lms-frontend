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
              Learn Skills for the Future 
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

            
{/* Student 1 */}
  <motion.div
    whileHover={{ scale: 1.06, rotate: 1 }}
    className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-indigo-500/40 transition-all"
  >
    <p className="text-lg text-gray-300 leading-relaxed">
      "Best platform to learn MERN stack! The projects helped me gain
      real industry experience."
    </p>
    <h4 className="mt-8 font-extrabold text-xl text-indigo-400">
      Aditi Singh
    </h4>
    <p className="text-sm text-gray-500 mt-1">Full Stack Developer</p>
  </motion.div>

  {/* Student 2 */}
  <motion.div
    whileHover={{ scale: 1.06, rotate: -1 }}
    className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-purple-500/40 transition-all"
  >
    <p className="text-lg text-gray-300 leading-relaxed">
      "Amazing AI courses with real-world use cases. The learning
      experience is top class."
    </p>
    <h4 className="mt-8 font-extrabold text-xl text-purple-400">
      Mansi Jagtap
    </h4>
    <p className="text-sm text-gray-500 mt-1">AI Engineer</p>
  </motion.div>

  {/* Student 3 */}
  <motion.div
    whileHover={{ scale: 1.06, rotate: 1 }}
    className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-pink-500/40 transition-all"
  >
    <p className="text-lg text-gray-300 leading-relaxed">
      "This platform helped me crack my first job. The mentorship and
      projects are outstanding."
    </p>
    <h4 className="mt-8 font-extrabold text-xl text-pink-400">
      Bittu Singh
    </h4>
    <p className="text-sm text-gray-500 mt-1">Software Engineer</p>
  </motion.div>

  {/* Student 4 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-indigo-500/40 transition-all">
    <p className="text-lg text-gray-300">"UI design is very smooth and modern."</p>
    <h4 className="mt-8 font-extrabold text-xl text-indigo-400">Shubham Yadav</h4>
    <p className="text-sm text-gray-500 mt-1">Frontend Developer</p>
  </motion.div>

  {/* Student 5 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-green-500/40 transition-all">
    <p className="text-lg text-gray-300">"Backend APIs are very well structured."</p>
    <h4 className="mt-8 font-extrabold text-xl text-green-400">Aditya Raj Singh</h4>
    <p className="text-sm text-gray-500 mt-1">Backend Engineer</p>
  </motion.div>

  {/* Student 6 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-yellow-500/40 transition-all">
    <p className="text-lg text-gray-300">"Learning experience is very interactive."</p>
    <h4 className="mt-8 font-extrabold text-xl text-yellow-400">Sumit</h4>
    <p className="text-sm text-gray-500 mt-1">UI Designer</p>
  </motion.div>

  {/* Student 7 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-blue-500/40 transition-all">
    <p className="text-lg text-gray-300">"Best LMS platform I have ever used."</p>
    <h4 className="mt-8 font-extrabold text-xl text-blue-400">Golu Singh</h4>
    <p className="text-sm text-gray-500 mt-1">Software Engineer</p>
  </motion.div>

  {/* Student 8 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-purple-500/40 transition-all">
    <p className="text-lg text-gray-300">"Course content is well structured."</p>
    <h4 className="mt-8 font-extrabold text-xl text-purple-400">Pooja Sharma</h4>
    <p className="text-sm text-gray-500 mt-1">Web Developer</p>
  </motion.div>

  {/* Student 9 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-pink-500/40 transition-all">
    <p className="text-lg text-gray-300">"Real-world project based learning."</p>
    <h4 className="mt-8 font-extrabold text-xl text-pink-400">Sakshi Jain</h4>
    <p className="text-sm text-gray-500 mt-1">React Developer</p>
  </motion.div>

  {/* Student 10 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-indigo-500/40 transition-all">
    <p className="text-lg text-gray-300">"Perfect platform for beginners."</p>
    <h4 className="mt-8 font-extrabold text-xl text-indigo-400">Yash Kulkarni</h4>
    <p className="text-sm text-gray-500 mt-1">CS Student</p>
  </motion.div>

  {/* Student 11 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-green-500/40 transition-all">
    <p className="text-lg text-gray-300">"Helped me crack internship."</p>
    <h4 className="mt-8 font-extrabold text-xl text-green-400">Dilip Acido</h4>
    <p className="text-sm text-gray-500 mt-1">Intern</p>
  </motion.div>

  {/* Student 12 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-yellow-500/40 transition-all">
    <p className="text-lg text-gray-300">"Video courses are very helpful."</p>
    <h4 className="mt-8 font-extrabold text-xl text-yellow-400"></h4>
    <p className="text-sm text-gray-500 mt-1">IT Student</p>
  </motion.div>

  {/* Student 13 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-blue-500/40 transition-all">
    <p className="text-lg text-gray-300">"Very professional LMS system."</p>
    <h4 className="mt-8 font-extrabold text-xl text-blue-400">Nikhil Raj</h4>
    <p className="text-sm text-gray-500 mt-1">Full Stack Learner</p>
  </motion.div>

  {/* Student 14 */}
  <motion.div whileHover={{ scale: 1.06, rotate: -1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-purple-500/40 transition-all">
    <p className="text-lg text-gray-300">"Clean UI and smooth experience."</p>
    <h4 className="mt-8 font-extrabold text-xl text-purple-400">Riya Choudhary</h4>
    <p className="text-sm text-gray-500 mt-1">UI Developer</p>
  </motion.div>

  {/* Student 15 */}
  <motion.div whileHover={{ scale: 1.06, rotate: 1 }} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:shadow-pink-500/40 transition-all">
    <p className="text-lg text-gray-300">"One of the best learning platforms."</p>
    <h4 className="mt-8 font-extrabold text-xl text-pink-400">Harsh Mishra</h4>
    <p className="text-sm text-gray-500 mt-1">MERN Developer</p>
  </motion.div>



          </div>
        </div>
      </div>

    </div>
  );
}
