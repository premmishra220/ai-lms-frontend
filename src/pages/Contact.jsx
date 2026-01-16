import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen py-20 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-10"
      >

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">
          Contact Us
        </h1>

        <p className="text-gray-400 text-lg mb-16 max-w-3xl">
          Have any questions or need support? Our team is always ready to help you.
          Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Get in Touch
              </h3>

              <div className="space-y-4 text-lg text-gray-300">
                <p>📧 Email: <span className="font-semibold">premmishrasonb@gmail.com</span></p>
                <p>📞 Phone: <span className="font-semibold">+91 9639146943</span></p>
                <p>🏢 Office: <span className="font-semibold">Pune, India</span></p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Support Hours
              </h3>

              <p className="text-gray-300 text-lg">
                Monday - Sunday : 24x7 Support Available
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl">

            <h3 className="text-2xl font-bold mb-8 text-indigo-400">
              Send us a Message
            </h3>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/40 transition"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
