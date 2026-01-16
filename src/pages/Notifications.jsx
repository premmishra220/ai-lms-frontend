import { motion } from "framer-motion";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Course Available",
      message: "AI with JavaScript course is now live. Enroll now!",
      time: "2 hours ago",
      type: "info",
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Your payment for MERN Stack Mastery was successful.",
      time: "1 day ago",
      type: "success",
    },
    {
      id: 3,
      title: "Certificate Issued",
      message: "Your Web Development certificate is ready to download.",
      time: "3 days ago",
      type: "warning",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-400">
          Notifications
        </h1>
        <p className="text-lg text-gray-400">
          Stay updated with latest activities and alerts
        </p>
      </div>

      {/* Notifications Panel */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-3xl shadow-2xl p-10">

        <div className="space-y-6">

          {notifications.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${
                  note.type === "success"
                    ? "bg-green-500/20 text-green-400"
                    : note.type === "warning"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-indigo-500/20 text-indigo-400"
                }`}
              >
                🔔
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{note.title}</h3>
                <p className="text-gray-400 mb-2">{note.message}</p>
                <p className="text-sm text-gray-500">{note.time}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}
