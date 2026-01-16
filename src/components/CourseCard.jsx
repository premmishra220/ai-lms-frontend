export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
