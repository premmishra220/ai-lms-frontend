import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">

      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">AI LMS</h2>
          <p className="text-sm leading-relaxed">
            AI-powered learning platform for future-ready skills. Learn faster,
            build better, and grow smarter.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/help" className="hover:text-indigo-400 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-indigo-400 transition">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/terms" className="hover:text-indigo-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-indigo-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5">Contact</h3>
          <div className="space-y-3 text-sm">
            <p>📧premmishrasonb@gmail.com</p>
            <p>📞 +919693146943</p>
            <p>🏢Pune, India</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2026 AI LMS by Prem Prakash Mishra. All rights reserved.
      </div>

    </footer>
  );
}
