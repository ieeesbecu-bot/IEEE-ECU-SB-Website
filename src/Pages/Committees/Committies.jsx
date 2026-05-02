import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Committees() {
  const navigate = useNavigate();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const timer1 = setTimeout(
      () => leftRef.current?.classList.add("animate-in"),
      100,
    );
    const timer2 = setTimeout(
      () => dividerRef.current?.classList.add("animate-in"),
      300,
    );
    const timer3 = setTimeout(
      () => rightRef.current?.classList.add("animate-in"),
      200,
    );
    return () => [timer1, timer2, timer3].forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        .panel-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .panel-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .panel-left.animate-in,
        .panel-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .divider-line {
          height: 0;
          transition: height 1.2s ease 0.3s;
        }
        .divider-line.animate-in {
          height: 60%;
        }
        .card-hover {
          transition: transform 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .float { animation: float 4s ease-in-out infinite; }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .pulse-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid currentColor;
          animation: pulse-ring 2s ease-out infinite;
        }
        .stat-bar {
          width: 0;
          transition: width 1.4s ease 0.8s;
        }
        .animate-in .stat-bar {
          width: 100%;
        }
      `}</style>

      <div className="flex flex-col md:flex-row min-h-screen w-full pt-14">
        {" "}
        {/* ── Left: Non-Technical ── */}
        <div
          ref={leftRef}
          className="panel-left card-hover flex flex-col justify-between items-center bg-white text-center md:w-1/2 px-8 py-12 md:py-8 relative">
          <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-[#D92525] opacity-30"></div>
          <div className="absolute bottom-8 right-6 w-8 h-8 border-b-4 border-r-4 border-[#D92525] opacity-30"></div>

          <div className="flex flex-col items-center gap-2 mt-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D92525]">
              IEEE ECU SB
            </span>
            <h2 className="text-xl md:text-2xl  font-extrabold text-[#023260]">
              Non-Technical <span className="text-[#D92525]">Team</span>
            </h2>
            <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden mt-1 mb-5">
              <div className="stat-bar h-full bg-[#D92525] rounded-full"></div>
            </div>
          </div>

          <div className="float">
            <div className="w-16 h-16 rounded-full bg-[#023260]/5 border-2 border-[#023260]/10 flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#023260"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>

          <p className="text-gray-500 max-w-xs text-xs leading-relaxed mb-3">
            Our non-technical team drives the community — managing events,
            communications, media, and member experience to keep the branch
            thriving.
          </p>

          <div className="flex gap-8 mb-3">
            <div className="flex flex-col items-center">
              <span className="text-xl font-extrabold text-[#023260]">4+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                Teams
              </span>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-extrabold text-[#023260]">50+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                Members
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/NonTechnicalTeam")}
            className="pulse-btn relative mb-2 bg-[#023260] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#D92525] transition-all duration-300 flex items-center gap-2 group text-sm">
            Discover the Team
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
        {/* ── Center Divider ── */}
        <div
          ref={dividerRef}
          className="hidden md:flex flex-col items-center justify-center w-10 relative z-10 bg-white">
          <div className="divider-line w-px bg-gradient-to-b from-transparent via-[#D92525] to-transparent absolute top-1/2 -translate-y-1/2"></div>
          <div className="w-7 h-7 rounded-full bg-white border-2 border-[#D92525] flex items-center justify-center z-10 shadow-sm">
            <span className="text-[7px] font-bold text-[#D92525]">VS</span>
          </div>
        </div>
        {/* ── Right: Technical ── */}
        <div
          ref={rightRef}
          className="panel-right card-hover flex flex-col justify-between items-center text-center md:w-1/2 px-8 py-8 bg-gradient-to-t from-[#023260] to-transparent text-white relative overflow-hidden">
          <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-white opacity-20"></div>
          <div className="absolute bottom-8 left-6 w-8 h-8 border-b-4 border-l-4 border-white opacity-20"></div>

          <div className="flex flex-col items-center gap-2 mt-6 relative z-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D92525]">
              IEEE ECU SB
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-white">
              Technical <span className="text-[#D92525]">Team</span>
            </h2>
            <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden mt-1 mb-5">
              <div className="stat-bar h-full bg-[#D92525] rounded-full"></div>
            </div>
          </div>

          <div className="float relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
          </div>

          <p className="text-blue-200 max-w-xs text-xs leading-relaxed relative z-10 mb-3">
            Our technical team builds, codes, and engineers — tackling
            real-world problems through hands-on projects, workshops, and
            cutting-edge competitions.
          </p>

          <div className="flex gap-8 relative z-10 mb-3">
            <div className="flex flex-col items-center">
              <span className="text-xl font-extrabold text-white">3+</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-300 mt-0.5">
                Teams
              </span>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-extrabold text-white">30+</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-300 mt-0.5">
                Members
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/TechnicalTeam")}
            className="pulse-btn relative mb-2 bg-white text-[#023260] font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#D92525] hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm z-10">
            Discover the Team
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
