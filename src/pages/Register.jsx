export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
}
