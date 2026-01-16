import { motion } from "framer-motion";

export default function Orders() {
  const orders = [
    {
      id: "ORD001",
      course: "MERN Stack Mastery",
      price: 1999,
      status: "Completed",
      date: "12 Jan 2026",
    },
    {
      id: "ORD002",
      course: "AI with JavaScript",
      price: 2999,
      status: "Pending",
      date: "15 Jan 2026",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          My Orders
        </h1>
        <p className="text-xl text-gray-400">
          View your purchases and invoices
        </p>
      </div>

      {/* Orders Card */}
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur rounded-3xl shadow-2xl p-12 border border-white/10">

        <div className="space-y-8">

          {orders.map((order) => (
            <motion.div
              key={order.id}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col md:flex-row justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/30 transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {order.course}
                </h3>
                <p className="text-gray-400">Order ID: {order.id}</p>
                <p className="text-gray-400">Date: {order.date}</p>
              </div>

              <div className="text-center md:text-right mt-4 md:mt-0">
                <p className="text-3xl font-bold mb-2 text-indigo-400">
                  ₹{order.price}
                </p>

                <span
                  className={`px-4 py-2 rounded-full font-semibold text-sm border ${
                    order.status === "Completed"
                      ? "bg-green-500/20 text-green-400 border-green-400/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
                  }`}
                >
                  {order.status}
                </span>

                <div className="mt-4">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/40">
                    Download Invoice
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}
