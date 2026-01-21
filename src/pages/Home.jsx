import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-slate-900">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),transparent_60%)]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-7xl mx-auto px-10 py-36 text-center"
        >

          {/* Badge */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wide text-indigo-300"
          >
            AI Powered Learning Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-xl"
          >
            Learn Skills for the Future <br />
            with <span className="text-indigo-400">AI Powered</span> Education
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto"
          >
            Build real-world projects with expert-designed courses and become
            industry ready with our next-generation learning platform.
          </motion.p>

          {/* CTA Button */}
          <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative bg-indigo-600 text-white px-14 py-5 rounded-full font-extrabold text-xl shadow-2xl hover:bg-indigo-700 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              Browse Courses
            </motion.button>
          </Link>

        </motion.div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-slate-900 py-28">

        <div className="max-w-7xl mx-auto px-10 text-center">

          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-16 text-indigo-400"
          >
            What Our Students Say
          </motion.h2>

          {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

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