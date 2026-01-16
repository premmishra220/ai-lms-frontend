export default function Certificate() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 min-h-screen flex justify-center items-center py-20">

      <div className="bg-white/5 backdrop-blur max-w-5xl w-full p-12 rounded-3xl shadow-2xl border-4 border-indigo-500">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="AI LMS Logo"
              className="w-16"
            />
            <h1 className="text-3xl font-extrabold text-indigo-400">
              AI LMS
            </h1>
          </div>

          <p className="text-gray-400 font-semibold">
            Certificate ID: AI-LMS-2026-001
          </p>
        </div>

        {/* Certificate Content */}
        <div className="text-center px-10">

          <h2 className="text-5xl font-extrabold text-white mb-6">
            Certificate of Completion
          </h2>

          <p className="text-lg text-gray-400 mb-10">
            This is to certify that
          </p>

          <h3 className="text-4xl font-bold text-indigo-400 mb-6">
            Prem Mishra
          </h3>

          <p className="text-lg mb-4 text-gray-300">
            has successfully completed the professional course
          </p>

          <h4 className="text-3xl font-semibold mb-10 text-gray-200">
            MERN Stack Mastery
          </h4>

          <div className="flex justify-between items-center mt-16">

            <div className="text-left">
              <p className="font-semibold text-gray-300">Date Issued</p>
              <p className="text-gray-500">January 2026</p>
            </div>

            <div className="text-center">
              <div className="w-48 border-t-2 border-gray-500 mx-auto mb-2"></div>
              <p className="font-semibold text-gray-300">Authorized Signature</p>
              <p className="text-gray-500">AI LMS Team</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-gray-300">Certificate No</p>
              <p className="text-gray-500">#AI2026</p>
            </div>

          </div>

          <div className="mt-16">
            <button className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/40">
              Download Certificate
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
