import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function UploadCourse() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "Fullstack",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("price", form.price);
      data.append("category", form.category);
      data.append("image", form.image);

      await axios.post("http://localhost:5000/api/courses", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Course uploaded successfully ");

      setForm({
        title: "",
        description: "",
        price: "",
        category: "Fullstack",
        image: ""
      });

    } catch (err) {
      console.log(err);
      alert("Upload failed ");
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-4">
          Upload New Course
        </h1>
        <p className="text-gray-400 text-lg">
          Add new courses for students
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12">

        <form className="space-y-8" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-2 text-lg font-semibold">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter course title"
              className="w-full p-4 rounded-xl bg-black border border-white/20 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold">
              Course Description
            </label>
            <textarea
              rows="4"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter course description"
              className="w-full p-4 rounded-xl bg-black border border-white/20 text-white"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-lg font-semibold">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="1999"
                className="w-full p-4 rounded-xl bg-black border border-white/20 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-white/20 text-white"
              >
                <option>Fullstack</option>
                <option>Backend</option>
                <option>AI</option>
                <option>DevOps</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold">
              Course Thumbnail
            </label>
            <input
              type="file"
              onChange={handleImage}
              className="w-full p-3 rounded-xl bg-black border border-white/20"
            />
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/40">
            Upload Course
          </button>

        </form>
      </div>
    </div>
  );
}
