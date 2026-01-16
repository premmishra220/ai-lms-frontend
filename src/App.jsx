import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./pages/AdminDashboard";
import Notifications from "./pages/Notifications";
import Certificate from "./pages/Certificate";
import OrderHistory from "./pages/OrderHistory";
import Progress from "./pages/Progress";
import Chatbot from "./pages/Chatbot";
import Achievements from "./pages/Achievements";
import Analytics from "./pages/Analytics";
import Invoice from "./pages/Invoice";
import UploadCourse from "./pages/UploadCourse";
import Learning from "./pages/Learning";

import Support from "./pages/Support";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/orders" element={<OrderHistory />} />

        <Route path="/progress" element={<Progress />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/upload-course" element={<UploadCourse />} />
        <Route path="/learn" element={<Learning />} />

        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<Help />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
