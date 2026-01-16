import { useState } from "react";

export default function Learning() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6">
          MERN Stack Mastery - Lesson 1
        </h1>

        {/* Video Player */}
        <div className="mb-8">
          <video
            controls
            className="w-full rounded-xl shadow"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          ></video>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Course Progress: {progress}%</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={() => setProgress(progress + 10)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Mark as Completed
          </button>

          <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
            Next Lesson
          </button>
        </div>

      </div>
    </div>
  );
}
