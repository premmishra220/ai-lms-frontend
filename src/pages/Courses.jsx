import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const allCourses = [
  { id: "c1", title: "Web Development Bootcamp", price: 499, category: "fullstack", image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" },
  { id: "c2", title: "MERN Stack Mastery", price: 999, category: "fullstack", image: "https://img.freepik.com/free-vector/app-development-concept_114360-5164.jpg" },
  { id: "c3", title: "Frontend with React", price: 799, category: "fullstack", image: "https://img.freepik.com/free-vector/ui-ux-design-concept_114360-1167.jpg" },
  { id: "c4", title: "Backend with Node.js", price: 899, category: "backend", image: "https://img.freepik.com/free-vector/server-concept-illustration_114360-443.jpg" },
  { id: "c5", title: "MongoDB Masterclass", price: 699, category: "backend", image: "https://img.freepik.com/free-vector/database-concept-illustration_114360-1285.jpg" },

  { id: "c6", title: "Python for Beginners", price: 499, category: "backend", image: "https://img.freepik.com/free-vector/programming-concept_114360-2165.jpg" },
  { id: "c7", title: "Django Web Development", price: 999, category: "backend", image: "https://img.freepik.com/free-vector/coding-concept_114360-2245.jpg" },
  { id: "c8", title: "Java Programming", price: 799, category: "backend", image: "https://img.freepik.com/free-vector/software-development-concept_114360-294.jpg" },
  { id: "c9", title: "Spring Boot API", price: 1099, category: "backend", image: "https://img.freepik.com/free-vector/programming-concept_114360-1351.jpg" },
  { id: "c10", title: "C++ for Competitive Coding", price: 499, category: "backend", image: "https://img.freepik.com/free-vector/programming-background_23-2147865655.jpg" },

  { id: "c11", title: "AI with JavaScript", price: 1299, category: "ai", image: "https://img.freepik.com/free-vector/artificial-intelligence-concept_114360-7000.jpg" },
  { id: "c12", title: "Machine Learning Basics", price: 999, category: "ai", image: "https://img.freepik.com/free-vector/machine-learning-concept_114360-1044.jpg" },
  { id: "c13", title: "Deep Learning Mastery", price: 1499, category: "ai", image: "https://img.freepik.com/free-vector/artificial-intelligence-illustration_114360-724.jpg" },
  { id: "c14", title: "Data Science Bootcamp", price: 1199, category: "ai", image: "https://img.freepik.com/free-vector/data-analysis-concept_114360-5296.jpg" },
  { id: "c15", title: "AI for Beginners", price: 499, category: "ai", image: "https://img.freepik.com/free-vector/ai-technology-concept_114360-1094.jpg" },

  { id: "c16", title: "DevOps Fundamentals", price: 899, category: "backend", image: "https://img.freepik.com/free-vector/cloud-computing-concept_114360-1142.jpg" },
  { id: "c17", title: "AWS Cloud Practitioner", price: 1299, category: "backend", image: "https://img.freepik.com/free-vector/cloud-hosting-concept_114360-2286.jpg" },
  { id: "c18", title: "Docker & Kubernetes", price: 1499, category: "backend", image: "https://img.freepik.com/free-vector/containerization-concept_114360-5583.jpg" },
  { id: "c19", title: "Linux Administration", price: 699, category: "backend", image: "https://img.freepik.com/free-vector/operating-system-concept_114360-3890.jpg" },
  { id: "c20", title: "Cyber Security Basics", price: 999, category: "backend", image: "https://img.freepik.com/free-vector/cyber-security-concept_114360-729.jpg" },

  { id: "c21", title: "UI/UX Design", price: 799, category: "fullstack", image: "https://img.freepik.com/free-vector/design-thinking-concept_114360-1994.jpg" },
  { id: "c22", title: "Figma Mastery", price: 699, category: "fullstack", image: "https://img.freepik.com/free-vector/ui-ux-design-concept_114360-1167.jpg" },
  { id: "c23", title: "Mobile App Development", price: 999, category: "fullstack", image: "https://img.freepik.com/free-vector/mobile-app-development-concept_114360-5353.jpg" },
  { id: "c24", title: "Flutter Bootcamp", price: 1099, category: "fullstack", image: "https://img.freepik.com/free-vector/app-development-concept_114360-5164.jpg" },
  { id: "c25", title: "React Native", price: 1199, category: "fullstack", image: "https://img.freepik.com/free-vector/mobile-ui-ux-concept_114360-1165.jpg" },

  { id: "c26", title: "Blockchain Basics", price: 999, category: "backend", image: "https://img.freepik.com/free-vector/blockchain-concept_114360-2885.jpg" },
  { id: "c27", title: "Web3 Development", price: 1499, category: "backend", image: "https://img.freepik.com/free-vector/cryptocurrency-concept_114360-2640.jpg" },
  { id: "c28", title: "Solidity Smart Contracts", price: 1299, category: "backend", image: "https://img.freepik.com/free-vector/blockchain-technology-concept_114360-7506.jpg" },
  { id: "c29", title: "Ethical Hacking", price: 1099, category: "backend", image: "https://img.freepik.com/free-vector/hacker-concept_114360-226.jpg" },
  { id: "c30", title: "Digital Marketing", price: 499, category: "fullstack", image: "https://img.freepik.com/free-vector/digital-marketing-concept_114360-2073.jpg" },
];


export default function Courses() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredCourses = allCourses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || course.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen text-white">

      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Explore Our Courses 📚</h1>
          <p className="text-lg text-gray-300">
            Learn industry-ready skills with hands-on projects
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 justify-between items-center">

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-400 shadow"
        />

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-indigo-600 hover:text-white transition"
          >
            All
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-indigo-600 hover:text-white transition"
          >
            Fullstack
          </button>
          <button
            onClick={() => setFilter("backend")}
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-indigo-600 hover:text-white transition"
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("ai")}
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-indigo-600 hover:text-white transition"
          >
            AI
          </button>
        </div>

      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {filteredCourses.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-indigo-500/40 transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    {course.title}
                  </h2>

                  <p className="text-indigo-400 font-bold text-lg mb-4">
                    ₹{course.price}
                  </p>

                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
                    View Course
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}

          {filteredCourses.length === 0 && (
            <p className="text-center col-span-3 text-gray-400 text-lg">
              No courses found 😔
            </p>
          )}

        </div>
      </div>

    </div>
  );
}
