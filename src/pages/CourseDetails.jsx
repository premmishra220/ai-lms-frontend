import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then(res => {
        if (res.data) {
          setCourse(res.data);   // backend course
        }
      })
      .catch(() => {
        const localCourse = allCourses.find(c => c.id === id);
        setCourse(localCourse); // fallback local
      });
  }, [id]);

  if (!course) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Course not found ❌</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-400 mb-6">{course.title}</h1>
          <p className="text-gray-400 text-lg mb-6">{course.description}</p>
          <p className="text-3xl font-bold text-indigo-400 mb-10">₹{course.price}</p>

          <div className="flex gap-6">
            <Link to="/payment" className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-full font-bold">
              Buy Now
            </Link>

            <Link to="/courses" className="border border-white/20 px-10 py-4 rounded-full hover:bg-white/10">
              Back
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="rounded-2xl shadow-2xl border border-white/10"
          />

          <div className="absolute top-4 right-4 bg-indigo-600 text-white px-5 py-2 rounded-full font-bold shadow-lg">
            ₹{course.price}
          </div>
        </div>

      </div>
    </div>
  );
}
