import { motion } from "framer-motion";

export default function Payment() {

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Check script tag!");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",   // Official Razorpay test key
      amount: 199900,                 // ₹1999 in paise
      currency: "INR",
      name: "AI LMS",
      description: "MERN Stack Mastery",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

      handler: function (response) {
        alert("Payment Successful 🎉\nPayment ID: " + response.razorpay_payment_id);
      },

      prefill: {
        name: "Prem Mishra",
        email: "premmishrasonb@gmail.com",
        contact: "9693146943",
      },

      theme: {
        color: "#4f46e5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen flex items-center justify-center py-20 text-white">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl w-full bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10"
      >

        <h1 className="text-4xl font-extrabold text-indigo-400 mb-4">
          Secure Checkout
        </h1>

        <p className="text-gray-400 mb-10">
          Complete your payment using Razorpay
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">MERN Stack Mastery</h2>
          <p className="text-gray-400 mb-4">
            Fullstack Development Course
          </p>

          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-indigo-400">₹1999</span>
            <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full border border-green-400/30">
              Secure Payment
            </span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/40 transition"
        >
          Pay with Razorpay
        </button>

      </motion.div>
    </div>
  );
}
