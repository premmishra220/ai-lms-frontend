import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";


const allCourses = [
  { id: "c1", title: "Web Development Bootcamp", price: 499, category: "fullstack", image: "    https://i.pinimg.com/736x/7b/fd/87/7bfd875e85fbbed980e9df59bcde8579.jpg           " 
  },
  { id: "c2", title: "MERN Stack Mastery", price: 999, category: "fullstack", image: "  https://i.pinimg.com/736x/a9/db/4a/a9db4a2588cb3b7a6776ab11a483a50a.jpg" 

   },
  { id: "c3", title: "Frontend with React", price: 799, category: "fullstack", image: "   https://i.pinimg.com/736x/e8/19/75/e8197585dae7d7060749fab863976f70.jpg" 
  },
  { id: "c4", title: "Backend with Node.js", price: 899, category: "backend", image: " https://i.pinimg.com/736x/94/60/e0/9460e064dd2a118606cda8e1d6ae5881.jpg"
  },
  { id: "c5", title: "MongoDB Masterclass", price: 699, category: "backend", image: " https://i.pinimg.com/736x/7e/ea/54/7eea54df0dd614c399c2288ffc5bcbd4.jpg "

   },
  { id: "c6", title: "Python for Beginners", price: 499, category: "backend", image: " https://i.pinimg.com/1200x/2d/d8/03/2dd8031b5e88f0104d083e4ed6233bc0.jpg   " },


  { id: "c7", title: "Django Web Development", price: 999, category: "backend", image: "https://i.pinimg.com/736x/8d/f9/88/8df988d584f2a5f5784e0a6ed1a7e66b.jpg   " },
  { id: "c8", title: "Java Programming", price: 799, category: "backend", image: "https://i.pinimg.com/736x/20/97/30/209730bebb5cd468cc53057042f7cbef.jpg"

   },
  { id: "c9", title: "Spring Boot API", price: 1099, category: "backend", image: "https://i.pinimg.com/736x/bd/e9/75/bde975558b82fd6c2cb9c8e2a15339fc.jpg" },
  { id: "c10", title: "C++ for Competitive Coding", price: 499, category: "backend", image: " https://i.pinimg.com/1200x/c1/63/07/c16307103e86c604c6bc98c78aa84d4b.jpg   " },
  { id: "c11", title: "AI with JavaScript", price: 1299, category: "ai", image: "https://i.pinimg.com/736x/c4/99/c3/c499c3f966e3b25eec5edbbbb9248c5e.jpg  " },
  { id: "c12", title: "Machine Learning Basics", price: 999, category: "ai", image: "https://i.pinimg.com/1200x/33/f8/7e/33f87ef86d9207b5905856e623e8a3ed.jpg " },
  { id: "c13", title: "Deep Learning Mastery", price: 1499, category: "ai", image: "https://i.pinimg.com/736x/2f/38/21/2f38210dd78c479edd264f9b26954796.jpg" },
  { id: "c14", title: "Data Science Bootcamp", price: 1199, category: "ai", image: " https://i.pinimg.com/736x/d0/a3/26/d0a326dab140778bfbcd1ead75dada1c.jpg   "},
  { id: "c15", title: "AI for Beginners", price: 499, category: "ai", image: "https://i.pinimg.com/736x/f4/6b/1f/f46b1fb6c280274ad54771be5a0dbea7.jpg   " },
  { id: "c16", title: "DevOps Fundamentals", price: 899, category: "backend", image: " https://i.pinimg.com/736x/b7/04/c9/b704c9b260d6e670a02f9bdbbe4d9e67.jpg   " },
  { id: "c17", title: "AWS Cloud Practitioner", price: 1299, category: "backend", image: " https://i.pinimg.com/736x/34/16/90/341690eb33f2fd5749851cb031ac5a1f.jpg  " },
  { id: "c18", title: "Docker & Kubernetes", price: 1499, category: "backend", image: " https://i.pinimg.com/1200x/c2/2b/18/c22b1856a4bfa4bb4633bf7a0828ffc9.jpg   " },
  { id: "c19", title: "Linux Administration", price: 699, category: "backend", image: "https://i.pinimg.com/1200x/c1/54/57/c1545704c48184d8468b2e8c7dd395af.jpg  " },
  { id: "c20", title: "Cyber Security Basics", price: 999, category: "backend", image: "https://i.pinimg.com/1200x/8c/e5/0a/8ce50a8ce92d7fdd8b2588b35c2ac5b0.jpg   " },
  { id: "c21", title: "UI/UX Design", price: 799, category: "fullstack", image: "https://i.pinimg.com/736x/6e/3f/8c/6e3f8cd8ed6f259a684b9be4cc3ef978.jpg" },
  { id: "c22", title: "Figma Mastery", price: 699, category: "fullstack", image: "https://i.pinimg.com/736x/71/bd/9d/71bd9d5e0e1cb3a6dc3142ae03c0ce96.jpg " },
  { id: "c23", title: "Mobile App Development", price: 999, category: "fullstack", image: " https://i.pinimg.com/736x/9e/ee/7c/9eee7c583132d04530960099728977b9.jpg  " },
  { id: "c24", title: "Flutter Bootcamp", price: 1099, category: "fullstack", image: "  https://i.pinimg.com/736x/92/4b/21/924b21ba76c237d599b86aa920fab085.jpg " },
  { id: "c25", title: "React Native", price: 1199, category: "fullstack", image: " https://i.pinimg.com/736x/c0/95/26/c09526e4fc7a1855a787c100b2c80df1.jpg " },
  { id: "c26", title: "Blockchain Basics", price: 999, category: "backend", image: " https://i.pinimg.com/1200x/97/81/55/97815516ed640908a393f7d0c6c4544e.jpg   " },
  { id: "c27", title: "Web3 Development", price: 1499, category: "backend", image: " https://i.pinimg.com/736x/fd/2f/74/fd2f74490379eccce8077340508fdf09.jpg  " },
  { id: "c28", title: "Solidity Smart Contracts", price: 1299, category: "backend", image: "https://i.pinimg.com/736x/1c/2f/72/1c2f72f9ecb0a37d429af5ae52e1e66c.jpg   " },
  { id: "c29", title: "Ethical Hacking", price: 1099, category: "backend", image: "https://i.pinimg.com/1200x/28/94/50/289450a82a135980824f22e2d712877c.jpg" },
  { id: "c30", title: "Digital Marketing", price: 499, category: "fullstack", image: "https://i.pinimg.com/736x/eb/75/b1/eb75b12bf1160d6d6c27fdd9d6231e5b.jpg   " },
];

export default function Courses() {
  const [courses, setCourses] = useState(allCourses);   // default tera data
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  /* ---------- Backend se data laane ka try ---------- */
  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => {
        if (res.data && res.data.length > 0) {
          setCourses(res.data);   // backend data use karega
        }
      })
      .catch(() => {
        console.log("Backend not connected, using local data");
      });
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || course.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen text-white">

      {/* Banner */}
<div
  className="relative py-28 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-indigo-400 drop-shadow-lg">
      Explore Our Courses 
    </h1>

    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Learn industry-ready skills with hands-on projects and become job-ready
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
          {["all","fullstack","backend","ai"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-indigo-600 hover:text-white transition"
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase()+cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {filteredCourses.map((course) => (
            <Link to={`/courses/${course.id || course._id}`} key={course.id || course._id}>
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
              No courses found 
            </p>
          )}

        </div>
      </div>

    </div>
  );
}
