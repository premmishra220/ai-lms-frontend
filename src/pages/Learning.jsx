import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * ⚠️ Abhi static courseId use kar rahe hain
 * Baad me isko dynamic bana denge
 */
const COURSE_ID = "mern-stack";

const lessons = [
  {
    id: 1,
    title: "MERN Stack Mastery - Lesson 1",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "MongoDB Basics",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "React Fundamentals",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function Learning() {
  const [searchParams] = useSearchParams();

  // 1️⃣ URL se lesson (Continue Learning ke liye)
  const lessonFromUrl = Number(searchParams.get("lesson"));

  // 2️⃣ localStorage se saved progress
  const savedLesson =
    Number(localStorage.getItem(`progress_${COURSE_ID}`)) || 1;

  // 3️⃣ Priority: URL → localStorage → Lesson 1
  const initialLesson =
    lessonFromUrl && lessonFromUrl <= lessons.length
      ? lessonFromUrl
      : savedLesson;

  const [currentLesson, setCurrentLesson] = useState(initialLesson);

  // 4️⃣ Progress %
  const progress = Math.round(
    (currentLesson / lessons.length) * 100
  );

  // 5️⃣ Progress save (course-wise)
  useEffect(() => {
    localStorage.setItem(
      `progress_${COURSE_ID}`,
      currentLesson
    );
  }, [currentLesson]);

  // 6️⃣ Next Lesson logic
  const handleNextLesson = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6">
          {lessons[currentLesson - 1].title}
        </h1>

        {/* Video Player */}
        <div className="mb-8">
          <video
            key={currentLesson}
            controls
            className="w-full rounded-xl shadow"
            src={lessons[currentLesson - 1].video}
          ></video>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <p className="font-semibold mb-2">
            Course Progress: {progress}%
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={handleNextLesson}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Mark as Completed
          </button>

          <button
            onClick={handleNextLesson}
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Next Lesson
          </button>
        </div>

      </div>
    </div>
  );
}
