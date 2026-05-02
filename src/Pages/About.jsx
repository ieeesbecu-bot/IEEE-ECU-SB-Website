import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import About1 from "../assets/About/about1.jpg";
import About2 from "../assets/About/about2.jpg";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const parallax1Ref = useRef(null);
  const parallax2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Entrance animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 },
    );

    [img1Ref, img2Ref, headingRef, textRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Parallax on scroll (applied to wrapper, not the reveal div)
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height * 0.5)),
      );

      if (parallax1Ref.current) {
        parallax1Ref.current.style.transform = `translateY(${progress * -30}px)`;
      }
      if (parallax2Ref.current) {
        parallax2Ref.current.style.transform = `translateY(${progress * -18}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
        }
        .reveal-left.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s;
        }
        .reveal-right.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .moments-line {
          width: 0;
          transition: width 1.2s ease 0.3s;
        }
        .in-view .moments-line {
          width: 3rem;
        }
      `}</style>

      <div className="text-gray-800 min-h-screen relative overflow-hidden font-sans pb-24">
        <main className="max-w-7xl mx-auto px-6 md:px-10 pt-32 flex flex-col gap-16 relative">
          {/* Text Section */}
          <div ref={textRef} className="reveal relative pl-4 md:pl-8 w-full">
            <div className="absolute -left-8 top-0 bottom-0 w-12 items-center justify-center hidden md:flex">
              <div className="writing-mode-vertical text-[#D92525] text-2xl font-bold tracking-widest opacity-80 border-l-2 border-[#D92525] pl-2">
                关于我们
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D92525] opacity-20"></div>

              <h1 className="text-2xl md:text-3xl font-extrabold pb-2 text-[#023260] relative">
                About <span className="text-[#D92525]">Us.</span>
                <span className="absolute -top-2 -right-8 w-8 h-8 bg-[#D92525] text-white text-xs flex items-center justify-center rounded-sm opacity-90 shadow-sm transform rotate-12">
                  IEEE
                </span>
              </h1>

              <h2 className="text-xl font-semibold text-[#023260] mb-3 pt-3 flex items-center gap-3">
                <span className="w-1 h-5 bg-[#D92525] rounded-full"></span>
                Who we are?
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                The IEEE Student Branch at ECU University is a vibrant community
                of future engineers and innovators dedicated to advancing
                technology and professional growth. As part of Institute of
                Electrical and Electronics Engineers (IEEE), we provide students
                with opportunities for technical development, hands-on
                experience, leadership, and collaboration. Our mission is to
                bridge academic knowledge with real-world application while
                empowering members to create impactful technological solutions.
              </p>

              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 text-[#023260] font-bold hover:text-[#D92525] transition group">
                See the latest news
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/14YhX72rVkL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#023260] hover:text-[#D92525] transition transform hover:scale-110">
                  <Facebook size={22} />
                </a>
                <a
                  href="https://www.instagram.com/ieeeecusb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#023260] hover:text-[#D92525] transition transform hover:scale-110">
                  <Instagram size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ieee-ecu-sb/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#023260] hover:text-[#D92525] transition transform hover:scale-110">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Moments Section */}
          <div ref={sectionRef}>
            {/* Heading */}
            <div ref={headingRef} className="reveal mb-8 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="h-px bg-[#D92525] moments-line block"></span>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]">
                  A Few of Our Moments
                </span>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Image 1 — parallax wrapper outside, reveal inside */}
              <div ref={parallax1Ref}>
                <div ref={img1Ref} className="reveal-left relative group">
                  <div className="absolute inset-0 border-2 border-[#D92525] transform translate-x-2 translate-y-2 rounded-sm pointer-events-none z-10"></div>
                  <div className="absolute inset-0 border-2 border-[#D4AF37] transform translate-x-1 translate-y-1 rounded-sm pointer-events-none z-10"></div>
                  <img
                    src={About1}
                    alt="IEEE Group"
                    className="w-full h-64 md:h-80 object-cover rounded-sm relative grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Image 2 — parallax wrapper outside, reveal inside */}
              <div ref={parallax2Ref}>
                <div ref={img2Ref} className="reveal-right relative group">
                  <div className="absolute inset-0 border-2 border-[#D92525] transform translate-x-2 translate-y-2 rounded-sm pointer-events-none z-10"></div>
                  <div className="absolute inset-0 border-2 border-[#D4AF37] transform translate-x-1 translate-y-1 rounded-sm pointer-events-none z-10"></div>
                  <img
                    src={About2}
                    alt="IEEE Event"
                    className="w-full h-64 md:h-80 object-cover rounded-sm relative grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
