import { motion } from "framer-motion";

export default function Invoice() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-4">
          Invoice
        </h1>
        <p className="text-gray-400 text-lg">
          Download your purchase invoice
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Order: MERN Stack Mastery</h3>
          <p className="text-gray-400 mb-2">Order ID: ORD001</p>
          <p className="text-gray-400 mb-2">Amount: ₹1999</p>
          <p className="text-gray-400 mb-6">Date: 12 Jan 2026</p>

          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-bold shadow-lg">
            Download PDF
          </button>
        </motion.div>

      </div>
    </div>
  );
}
