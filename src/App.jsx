import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import Home from "./pages/Home";
import About from "./Pages/About";
import Committees from "./Pages/Committees/Committies";
import NonTechnicalTeam from "./Pages/Committees/Non-Tech";
import TechnicalTeam from "./Pages/Committees/Tech";
import Heads from "./Pages/Heads";
import Events from "./Pages/Events";
import Login from "./Pages/Login&Signup/LoginPage";
import SignUp from "./Pages/Login&Signup/SignUpPage";
import ContactUs from "./Pages/ContactUs";
import AccountPage from "./Pages/AccountPage";
import IEEETimeline from "./Pages/IEEETimeline";
import SettingsPage from "./Pages/Settings";

import { AuthProvider } from "./Context/AuthContext";
// import ProtectedRoute from "./Components/ProtectedRoute";

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, "") || "/";

  const hideNavbarRoutes = ["/login", "/signup"];
  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      {!hideNavbarRoutes.includes(currentPath) && <Navbar />}

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/nontechnicalteam" element={<NonTechnicalTeam />} />
          <Route path="/technicalteam" element={<TechnicalTeam />} />
          <Route path="/heads" element={<Heads />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/timeline" element={<IEEETimeline />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* 🔐 protected route */}
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>

      {!hideFooterRoutes.includes(currentPath) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* 🔥 أهم إضافة */}
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </Router>
  );
}
