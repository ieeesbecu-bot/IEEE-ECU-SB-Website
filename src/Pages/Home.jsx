import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MainImg from "../assets/Logo/Main.png";

export default function Home() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: lineRef, delay: 0 },
      { ref: headingRef, delay: 150 },
      { ref: subRef, delay: 350 },
      { ref: btnRef, delay: 550 },
    ];

    elements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) ref.current.classList.add("animate-in");
      }, delay);
    });
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .scale-in {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .scale-in.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        .line-grow {
          width: 0;
          transition: width 1s ease;
        }
        .line-grow.animate-in {
          width: 3rem;
        }
        .btn-glow:hover {
          box-shadow: 0 0 18px rgba(2, 50, 96, 0.4);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-badge {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid #D92525;
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      <main className="Home relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#023260] to-transparent pointer-events-none"></div>

        {/* Text Section */}
        <div className="relative z-10 max-w-xl">
          {/* Animated top label */}
          <div ref={lineRef} className="fade-left flex items-center gap-3 mb-6">
            <span className="line-grow h-px bg-[#D92525] block"></span>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]">
              The Egyptian Chinese University
            </span>
          </div>

          <h1
            ref={headingRef}
            className="fade-up text-3xl md:text-5xl font-semibold mb-5 text-white">
            Welcome to{" "}
            <span className="relative inline-block">
              IEEE ECU
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D92525] scale-x-0 transition-transform duration-700 delay-700 origin-left animate-underline"></span>
            </span>{" "}
            Student Branch!
          </h1>

          <p
            ref={subRef}
            className="fade-up text-lg md:text-lg mb-10 text-slate-300">
            Where passion meets innovation and ideas come to life
          </p>

          {/* Buttons */}
          <div
            ref={btnRef}
            className="scale-in flex flex-wrap items-center gap-4">
            <Link to="/about">
              <button className="btn-glow relative pulse-ring bg-[#023260] text-white font-semibold px-8 py-2.5 rounded-full hover:bg-white hover:text-[#023260] transition-all duration-300">
                Who We Are
              </button>
            </Link>

            <Link to="/timeline">
              <button className="text-white font-semibold px-6 py-2.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group">
                Latest News
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </Link>
          </div>

          {/* Floating IEEE badge */}
          {/* <div className="float-badge mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#D92525] animate-pulse"></span>
            <span className="text-white text-xs tracking-wide">
              Est. IEEE ECU SB — Active Chapter
            </span>
          </div> */}
        </div>
      </main>
    </>
  );
}
