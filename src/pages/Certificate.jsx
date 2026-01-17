export default function Certificate() {
  return (
    <div className="bg-black min-h-screen py-16 px-4 sm:px-6">

      {/* Wrapper */}
      <div className="max-w-5xl mx-auto">

        {/* Certificate Card */}
        <div className="
          bg-gradient-to-br from-[#0f172a] to-[#020617]
          border border-indigo-500/40
          rounded-2xl
          p-6 sm:p-10
          text-white
        ">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xl">
                AI
              </div>
              <h1 className="text-2xl font-extrabold text-indigo-400">
                AI LMS
              </h1>
            </div>

            <p className="text-sm text-gray-400">
              Certificate ID: AI-LMS-2026-001
            </p>
          </div>

          {/* Body */}
          <div className="text-center px-2 sm:px-6">

            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
              Certificate of Completion
            </h2>

            <p className="text-gray-400 mb-6">
              This is to certify that
            </p>

            <h3 className="text-2xl sm:text-4xl font-bold text-indigo-400 mb-6">
              Prem Mishra
            </h3>

            <p className="mb-4">
              has successfully completed the professional course
            </p>

            <h4 className="text-xl sm:text-3xl font-semibold mb-10">
              MERN Stack Mastery
            </h4>

            {/* Footer Info */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 mt-12 text-sm text-gray-400">

              <div>
                <p className="font-semibold text-white">Date Issued</p>
                <p>January 2026</p>
              </div>

              <div className="text-center">
                <div className="w-40 border-t border-gray-500 mx-auto mb-2"></div>
                <p className="font-semibold text-white">Authorized Signature</p>
                <p>AI LMS Team</p>
              </div>

              <div>
                <p className="font-semibold text-white">Certificate No</p>
                <p>#AI2026</p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-12">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-bold">
                Download Certificate
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
