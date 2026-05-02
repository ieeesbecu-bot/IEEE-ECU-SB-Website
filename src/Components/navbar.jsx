import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Settings,
  LayoutDashboard,
  UserCircle,
  LogOut,
  ChevronDown,
  Home,
  Info,
  Users,
  Star,
  Calendar,
  Mail,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo/Picture2-removebg-preview.png";
import WhiteLogo from "../assets/Logo/unnameddadawdadfxzffbcvxb (4).png";
import { supabase } from "../supabaseClient";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profile, setProfile] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "About Us", path: "/about", icon: <Info size={18} /> },
    { label: "Committees", path: "/Committees", icon: <Users size={18} /> },
    { label: "Our Heads", path: "/Heads", icon: <Star size={18} /> },
    { label: "Events", path: "/Events", icon: <Calendar size={18} /> },
    { label: "Contact Us", path: "/ContactUs", icon: <Mail size={18} /> },
  ];

  // ── Scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Outside click ─────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Core: fetch profile by userId ────────────────────────────
  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "role, avatar_url, tier, position, Position, full_name, first_name",
      )
      .eq("id", userId)
      .single();
    if (!error && data) {
      setProfile(data);
    }
  };

  // ── Auth ──────────────────────────────────────────────────────
  useEffect(() => {
    // onAuthStateChange fires for INITIAL_SESSION on mount too —
    // covers both hard refresh AND login without extra getSession call
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setIsLoggedIn(true);
        setUserEmail(session.user.email || "");
        // Use setTimeout(0) to avoid Supabase deadlock on INITIAL_SESSION
        setTimeout(() => fetchProfile(session.user.id), 0);
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
        setProfile(null);
      }
    });

    // Avatar updated from AccountPage
    const onAvatarUpdated = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) fetchProfile(session.user.id);
    };
    window.addEventListener("avatar-updated", onAvatarUpdated);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("avatar-updated", onAvatarUpdated);
    };
  }, []);

  // ── Logout ────────────────────────────────────────────────────
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut({ scope: "local" });
    } catch (_) {}
    setIsLoggedIn(false);
    setUserEmail("");
    setProfile(null);
    setMenuOpen(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  // ── Display helpers ───────────────────────────────────────────
  const avatarUrl = profile?.avatar_url || null;
  const positionLabel = profile?.position || profile?.Position || null;
  const tierLabel = profile?.tier || null;
  const roleLabel = profile?.role || "member";
  const displayName =
    profile?.full_name || profile?.first_name || userEmail || "?";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  // Photo if available, initials circle if not — no icon ever
  const AvatarCircle = ({ size = 30 }) =>
    avatarUrl ? (
      <img
        key={avatarUrl}
        src={avatarUrl}
        alt="avatar"
        style={{ width: size, height: size }}
        className={`rounded-full object-cover flex-shrink-0 border-2 ${
          isScrolled || !isTimelinePage
            ? "border-[#023260]"
            : "border-white shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        }`}
      />
    ) : (
      <div
        style={{
          width: size,
          height: size,
          fontSize: size * 0.1,
          background: "#023260",
        }}
        className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 select-none">
        {initials}
      </div>
    );
  const isTimelinePage = location.pathname === "/timeline";
  return (
    <>
      {/* ── NAVBAR ── */}

      <nav
        className={`fixed top-0 left-0 right-0 py-2 rounded-full mx-3 mt-5 px-5 transition-all duration-300 z-50 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30 shadow-sm text-[#023260]"
            : isTimelinePage
              ? "bg-transparent text-white"
              : "bg-transparent text-[#023260]"
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img
            src={isScrolled || !isTimelinePage ? Logo : WhiteLogo}
            alt="IEEE Logo"
            className={
              isScrolled || !isTimelinePage
                ? "h-12 w-auto"
                : "h-16 w-auto transition-all duration-300"
            }
          />

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 font-medium text-sm justify-center flex-1">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`transition duration-300 ${
                  isScrolled || !isTimelinePage
                    ? "hover:text-[#023260]/40"
                    : "hover:text-white/70"
                } ${
                  location.pathname === item.path
                    ? isScrolled || !isTimelinePage
                      ? "text-[#023260]/50 font-semibold"
                      : "text-white font-semibold"
                    : ""
                }`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="bg-[#023260] text-white font-semibold px-5 py-1 rounded-full shadow hover:bg-[#023260]/70 transition">
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" title="Dashboard">
                  <LayoutDashboard
                    size={26}
                    className={`cursor-pointer transition ${
                      isScrolled || !isTimelinePage
                        ? "text-[#023260] hover:text-[#023260]/60"
                        : "text-white hover:text-white/70"
                    }`}
                  />
                </Link>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 cursor-pointer transition ${
                      isScrolled || !isTimelinePage
                        ? "text-[#023260] hover:text-[#023260]/60"
                        : "text-white hover:text-white/70"
                    }`}>
                    <AvatarCircle size={50} />
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs text-gray-400 truncate">
                          {userEmail}
                        </p>
                        {positionLabel ? (
                          <p className="text-xs font-semibold text-[#023260] mt-0.5">
                            {positionLabel}
                          </p>
                        ) : null}
                        {tierLabel ? (
                          <p className="text-[10px] text-[#023260]/60 capitalize mt-0.5">
                            {tierLabel}
                          </p>
                        ) : null}
                        {!positionLabel && !tierLabel && (
                          <p className="text-xs font-medium text-[#023260] capitalize mt-0.5">
                            {roleLabel}
                          </p>
                        )}
                      </div>

                      <Link
                        to="/account"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-[#023260] hover:bg-gray-50 transition">
                        <UserCircle size={16} /> My Account
                      </Link>

                      <Link
                        to="/settings"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-[#023260] hover:bg-gray-50 transition">
                        <Settings size={16} /> Settings
                      </Link>

                      <div className="border-t border-gray-100" />

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition">
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile burger */}
          {!menuOpen && (
            <button
              className={`md:hidden ${
                isScrolled || !isTimelinePage ? "text-[#023260]" : "text-white"
              }`}
              onClick={() => setMenuOpen(true)}>
              <Menu size={30} />
            </button>
          )}
        </div>
      </nav>
      {/* ── OVERLAY ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* ── MOBILE SIDEBAR ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <img src={Logo} alt="IEEE Logo" className="h-10 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        {isLoggedIn && (
          <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <AvatarCircle size={60} />
              <div className="min-w-0">
                <p className="text-xs text-gray-400 truncate">{userEmail}</p>
                {positionLabel ? (
                  <p className="text-xs font-semibold text-[#023260] truncate">
                    {positionLabel}
                  </p>
                ) : null}
                {tierLabel ? (
                  <p className="text-[10px] text-[#023260]/60 capitalize">
                    {tierLabel}
                  </p>
                ) : null}
                {!positionLabel && !tierLabel && (
                  <p className="text-xs font-semibold text-[#023260] capitalize">
                    {roleLabel}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
            Navigation
          </p>
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition mb-1 ${
                location.pathname === item.path
                  ? "bg-blue-50 text-[#023260]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#023260]"
              }`}>
              <span
                className={
                  location.pathname === item.path
                    ? "text-[#023260]"
                    : "text-gray-400"
                }>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}

          {isLoggedIn && (
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                Account
              </p>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#023260] transition mb-1">
                <LayoutDashboard size={18} className="text-gray-400" />{" "}
                Dashboard
              </Link>
              <Link
                to="/account"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#023260] transition mb-1">
                <UserCircle size={18} className="text-gray-400" /> My Account
              </Link>
              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#023260] transition mb-1">
                <Settings size={18} className="text-gray-400" /> Settings
              </Link>
            </div>
          )}
        </div>

        <div className="px-3 py-4 border-t border-gray-100">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition rounded-xl">
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#023260] text-white font-semibold py-3 rounded-xl hover:bg-[#023260]/80 transition text-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
