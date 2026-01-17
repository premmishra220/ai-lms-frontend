export default function Certificate() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-6 sm:py-20 px-4 sm:px-8">

      {/* Wrapper */}
      <div className="max-w-6xl mx-auto">

        {/* Certificate Card */}
        <div className="bg-white w-full p-4 sm:p-12 rounded-3xl shadow-2xl border-8 border-indigo-600">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-12 gap-3 sm:gap-6">

            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="AI LMS Logo"
                className="w-10 sm:w-14"
              />
              <h1 className="text-xl sm:text-3xl font-extrabold text-indigo-600">
                AI LMS 🚀
              </h1>
            </div>

            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
              Certificate ID: AI-LMS-2026-001
            </p>

          </div>

          {/* Content */}
          <div className="text-center px-2 sm:px-10">

            <h2 className="text-xl sm:text-5xl font-extrabold text-gray-800 mb-3 sm:mb-6">
              Certificate of Completion 🎓
            </h2>

            <p className="text-xs sm:text-lg text-gray-600 mb-4 sm:mb-10">
              This is to certify that
            </p>

            <h3 className="text-lg sm:text-4xl font-bold text-indigo-600 mb-2 sm:mb-6">
              Prem Mishra
            </h3>

            <p className="text-xs sm:text-lg mb-2 sm:mb-4">
              has successfully completed the professional course
            </p>

            <h4 className="text-base sm:text-3xl font-semibold mb-4 sm:mb-10 text-gray-800">
              MERN Stack Mastery 💻
            </h4>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-10 mt-6 sm:mt-16">

              <div className="text-left text-xs sm:text-base">
                <p className="font-semibold">Date Issued</p>
                <p className="text-gray-600">January 2026</p>
              </div>

              <div className="text-center text-xs sm:text-base">
                <div className="w-32 sm:w-48 border-t-2 border-gray-400 mx-auto mb-1 sm:mb-2"></div>
                <p className="font-semibold">Authorized Signature</p>
                <p className="text-gray-600">AI LMS Team</p>
              </div>

              <div className="text-right text-xs sm:text-base">
                <p className="font-semibold">Certificate No</p>
                <p className="text-gray-600">#AI2026</p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-5 sm:mt-16">
              <button className="bg-indigo-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full font-bold hover:bg-indigo-700 transition text-xs sm:text-base">
                Download Certificate 📄
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
