export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-10">

        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-8 mb-12">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold">Total Students</h2>
            <p className="mt-4 text-3xl font-bold text-blue-600">1,245</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold">Total Courses</h2>
            <p className="mt-4 text-3xl font-bold text-green-600">12</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="mt-4 text-3xl font-bold text-purple-600">₹3,45,000</p>
          </div>

        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Manage Courses</h2>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Course</th>
                <th className="p-3 border">Students</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border">MERN Stack</td>
                <td className="p-3 border">450</td>
                <td className="p-3 border">₹1999</td>
                <td className="p-3 border">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>

              <tr>
                <td className="p-3 border">AI with JS</td>
                <td className="p-3 border">320</td>
                <td className="p-3 border">₹2999</td>
                <td className="p-3 border">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
