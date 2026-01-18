import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

/* ---------- LOCAL FALLBACK DATA (tera original) ---------- */
const allCourses = [
  { id: "c1", title: "Web Development Bootcamp", price: 499, description: "Complete web development from scratch with projects.", image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" },
  { id: "c2", title: "MERN Stack Mastery", price: 999, description: "Master MongoDB, Express, React and Node.js.", image: "https://img.freepik.com/free-vector/app-development-concept_114360-5164.jpg" },
  { id: "c3", title: "Frontend with React", price: 799, description: "Build modern frontend apps with React.", image: "https://img.freepik.com/free-vector/ui-ux-design-concept_114360-1167.jpg" },
  { id: "c4", title: "Backend with Node.js", price: 899, description: "Backend APIs using Node.js and Express.", image: "https://img.freepik.com/free-vector/server-concept-illustration_114360-443.jpg" },
  { id: "c5", title: "MongoDB Masterclass", price: 699, description: "Learn MongoDB from basics to advanced.", image: "https://img.freepik.com/free-vector/database-concept-illustration_114360-1285.jpg" },
  { id: "c6", title: "Python for Beginners", price: 499, description: "Learn Python programming from scratch.", image: "https://img.freepik.com/free-vector/programming-concept_114360-2165.jpg" },
  { id: "c7", title: "Django Web Development", price: 999, description: "Build web apps using Django framework.", image: "https://img.freepik.com/free-vector/coding-concept_114360-2245.jpg" },
  { id: "c8", title: "Java Programming", price: 799, description: "Core Java and OOP concepts.", image: "https://img.freepik.com/free-vector/software-development-concept_114360-294.jpg" },
  { id: "c9", title: "Spring Boot API", price: 1099, description: "REST APIs with Spring Boot.", image: "https://img.freepik.com/free-vector/programming-concept_114360-1351.jpg" },
  { id: "c10", title: "C++ for Competitive Coding", price: 499, description: "DSA and competitive programming in C++.", image: "https://img.freepik.com/free-vector/programming-background_23-2147865655.jpg" },
  { id: "c11", title: "AI with JavaScript", price: 1299, description: "AI projects using JavaScript.", image: "https://img.freepik.com/free-vector/artificial-intelligence-concept_114360-7000.jpg" },
  { id: "c12", title: "Machine Learning Basics", price: 999, description: "Intro to Machine Learning.", image: "https://img.freepik.com/free-vector/machine-learning-concept_114360-1044.jpg" },
  { id: "c13", title: "Deep Learning Mastery", price: 1499, description: "Neural networks and deep learning.", image: "https://img.freepik.com/free-vector/artificial-intelligence-illustration_114360-724.jpg" },
  { id: "c14", title: "Data Science Bootcamp", price: 1199, description: "Data analysis, visualization and ML.", image: "https://img.freepik.com/free-vector/data-analysis-concept_114360-5296.jpg" },
  { id: "c15", title: "AI for Beginners", price: 499, description: "Basic AI concepts and projects.", image: "https://img.freepik.com/free-vector/ai-technology-concept_114360-1094.jpg" },
  { id: "c16", title: "DevOps Fundamentals", price: 899, description: "CI/CD, automation and DevOps tools.", image: "https://img.freepik.com/free-vector/cloud-computing-concept_114360-1142.jpg" },
  { id: "c17", title: "AWS Cloud Practitioner", price: 1299, description: "Cloud fundamentals with AWS.", image: "https://img.freepik.com/free-vector/cloud-hosting-concept_114360-2286.jpg" },
  { id: "c18", title: "Docker & Kubernetes", price: 1499, description: "Containerization and orchestration.", image: "https://img.freepik.com/free-vector/containerization-concept_114360-5583.jpg" },
  { id: "c19", title: "Linux Administration", price: 699, description: "Linux system administration.", image: "https://img.freepik.com/free-vector/operating-system-concept_114360-3890.jpg" },
  { id: "c20", title: "Cyber Security Basics", price: 999, description: "Security fundamentals and tools.", image: "https://img.freepik.com/free-vector/cyber-security-concept_114360-729.jpg" },
  { id: "c21", title: "UI/UX Design", price: 799, description: "Design beautiful user interfaces.", image: "https://img.freepik.com/free-vector/design-thinking-concept_114360-1994.jpg" },
  { id: "c22", title: "Figma Mastery", price: 699, description: "UI design with Figma.", image: "https://img.freepik.com/free-vector/ui-ux-design-concept_114360-1167.jpg" },
  { id: "c23", title: "Mobile App Development", price: 999, description: "Build Android & iOS apps.", image: "https://img.freepik.com/free-vector/mobile-app-development-concept_114360-5353.jpg" },
  { id: "c24", title: "Flutter Bootcamp", price: 1099, description: "Cross-platform apps with Flutter.", image: "https://img.freepik.com/free-vector/app-development-concept_114360-5164.jpg" },
  { id: "c25", title: "React Native", price: 1199, description: "Mobile apps with React Native.", image: "https://img.freepik.com/free-vector/mobile-ui-ux-concept_114360-1165.jpg" },
  { id: "c26", title: "Blockchain Basics", price: 999, description: "Blockchain fundamentals.", image: "https://img.freepik.com/free-vector/blockchain-concept_114360-2885.jpg" },
  { id: "c27", title: "Web3 Development", price: 1499, description: "Decentralized apps development.", image: "https://img.freepik.com/free-vector/cryptocurrency-concept_114360-2640.jpg" },
  { id: "c28", title: "Solidity Smart Contracts", price: 1299, description: "Smart contract development.", image: "https://img.freepik.com/free-vector/blockchain-technology-concept_114360-7506.jpg" },
  { id: "c29", title: "Ethical Hacking", price: 1099, description: "Cyber security & penetration testing.", image: "https://img.freepik.com/free-vector/hacker-concept_114360-226.jpg" },
  { id: "c30", title: "Digital Marketing", price: 499, description: "SEO, ads and digital branding.", image: "https://img.freepik.com/free-vector/digital-marketing-concept_114360-2073.jpg" },
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
