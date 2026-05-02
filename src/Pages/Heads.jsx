import React, { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import Rania from "../assets/Heads/DrRania.png";
import Saif from "../assets/Heads/SAIF EL DEIN AYMAN.png";
import Abdelmonem from "../assets/Heads/ABDELMONAM ABDALLAH.png";
import YoussefTamer from "../assets/Heads/YOUSSEF TAMER.png";
import AbdallahSakr from "../assets/Heads/ABDALLAH SAKR.png";
import Mariam from "../assets/Heads/MARIAM ABDOU.png";
import Sondos from "../assets/Heads/SONDOS SAMEH.png";
import Omar from "../assets/Heads/OMAR MOUSTAFA.png";
import Menna from "../assets/Heads/MENNA ALLAH MOHAMED.png";
import YoussefKohla from "../assets/Heads/YOUSSEF KOHLA.png";
import Bernadette from "../assets/Heads/BERNADETTE YOUSSEF.png";
import Zeyad from "../assets/Heads/ZEYAD WALEED.png";
import MohamedBadawy from "../assets/Heads/MOHAMED BADAWY.png";
import MahmoudGoma from "../assets/Heads/MAHMOUD GOMAA.png";
import Kerolouse from "../assets/Heads/KEROLOUES MOURAD.png";
import Abdelrahman from "../assets/Heads/ABDELRAHMAN ABOZIED.png";
import Youstina from "../assets/Heads/YOUSTINA AYMAN.png";
import Adam from "../assets/Heads/ADAM HUSSEIN.png";
import Fatema from "../assets/Heads/FATEMA MOHAMED.png";

function Petals() {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.floor(Math.random() * 100)}%`,
    duration: `${6 + Math.floor(Math.random() * 8)}s`,
    delay: `${Math.floor(Math.random() * 12)}s`,
    size: `${6 + Math.floor(Math.random() * 8)}px`,
    rotation: `${Math.floor(Math.random() * 360)}deg`,
  }));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}>
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: "-20px",
            left: p.left,
            width: p.size,
            height: p.size,
            background: "#b0c4de",
            borderRadius: "50% 0 50% 0",
            opacity: 0,
            transform: `rotate(${p.rotation})`,
            animation: `cnFall ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Heads() {
  const teams = {
    "Branch Counselor": [
      {
        img: Rania,
        name: "Dr. Rania Sweif",
        role: "Branch Counselor",
        linkedin: "#",
      },
    ],
    HighBoard: [
      {
        img: Saif,
        name: "Saif El-Dein Ayman",
        role: "Chairman",
        linkedin: "#",
      },
      {
        img: Abdelmonem,
        name: "Abdelmonem Abdallah",
        role: "Vice Chairman",
        linkedin: "#",
      },
      {
        img: YoussefTamer,
        name: "Youssef Tamer",
        role: "Secretary",
        linkedin: "#",
      },
      {
        img: AbdallahSakr,
        name: "Abdallah Sakr",
        role: "Treasurer",
        linkedin: "#",
      },
      { img: Mariam, name: "Mariam Abdou", role: "WebMaster", linkedin: "#" },
    ],
    HR: [
      { img: Sondos, name: "Sondos Sameh", role: "Head of HR", linkedin: "#" },
      { img: Zeyad, name: "Zeyad Waleed", role: "Vice of HR", linkedin: "#" },
    ],
    PR: [
      { img: Omar, name: "Omar Moustafa", role: "Head of PR", linkedin: "#" },
      {
        img: MohamedBadawy,
        name: "Mohamed Badawy",
        role: "Vice of PR",
        linkedin: "#",
      },
    ],
    Events: [
      {
        img: Menna,
        name: "Menna Allah Mohamed",
        role: "Head of Events",
        linkedin: "#",
      },
      {
        img: MahmoudGoma,
        name: "Mahmoud Goma",
        role: "Vice of Events",
        linkedin: "#",
      },
      {
        img: Kerolouse,
        name: "Kerolouse Mourad",
        role: "Vice of Events",
        linkedin: "#",
      },
    ],
    Media: [
      {
        img: YoussefKohla,
        name: "Youssef Kohla",
        role: "Head of Media",
        linkedin: "#",
      },
      {
        img: Abdelrahman,
        name: "Abdelrahman Abozeid",
        role: "Vice of Media",
        linkedin: "#",
      },
    ],
    Technical: [
      {
        img: Bernadette,
        name: "Bernadette Youssef",
        role: "Head of Technical",
        linkedin: "#",
      },
      {
        img: Youstina,
        name: "Youstina Ayman",
        role: "Leader Visuals",
        linkedin: "#",
      },
      {
        img: Adam,
        name: "Adam Hussein",
        role: "Leader Hardware",
        linkedin: "#",
      },
      {
        img: Fatema,
        name: "Fatema Mohamed",
        role: "Leader Software",
        linkedin: "#",
      },
    ],
  };

  const sectionKeys = Object.keys(teams);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  // Lock scroll only when content fully fits (desktop); allow scroll when it overflows (mobile/small screens)
  useEffect(() => {
    const update = () => {
      const overflowing =
        document.documentElement.scrollHeight > window.innerHeight;
      document.body.style.overflow = overflowing ? "" : "hidden";
      document.documentElement.style.overflow = overflowing ? "" : "hidden";
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === sectionKeys.length - 1 ? 0 : prev + 1,
      );
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [sectionKeys.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setAnimKey((k) => k + 1);
  };

  const activeSection = sectionKeys[activeIndex];

  return (
    <>
      <style>{`
        @keyframes cnFall {
          0%   { transform: translateY(-20px) rotate(0deg);   opacity: 0.6; }
          100% { transform: translateY(110vh)  rotate(720deg); opacity: 0;   }
        }
        @keyframes cnFadeReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cnPulseRing {
          0%,100% { transform: scale(1);    opacity: 0.5; }
          50%     { transform: scale(1.08); opacity: 0.2; }
        }
        @keyframes cnLanternSway {
          0%,100% { transform: rotate(-3deg); }
          50%     { transform: rotate(3deg); }
        }

        .cn-fade-in {
          animation: cnFadeReveal 0.6s ease forwards;
        }

        .cn-tab {
          clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%);
          padding: 7px 22px;
          border: 1.5px solid #023260;
          background: white;
          color: #023260;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.35s;
          position: relative;
        }
        .cn-tab:hover {
          background: #023260;
          color: white;
          transform: scale(1.04);
        }
        .cn-tab.cn-tab-active {
          background: #023260;
          color: white;
          border-color: #023260;
          box-shadow: 0 4px 16px rgba(2,50,96,0.3);
          transform: scale(1.06);
        }

        .cn-member-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 140px;
          transition: transform 0.35s;
          cursor: default;
        }
        .cn-member-card:hover {
          transform: translateY(-8px);
        }

        /* ── INCREASED: ring wrapper 108 → 124px ── */
        .cn-ring {
          position: relative;
          width: 124px;
          height: 124px;
          margin-bottom: 12px;
        }
        .cn-ring::before {
          content: '';
          position: absolute;
          inset: -6px;
          border: 2px solid #023260;
          border-radius: 50%;
          opacity: 0.45;
          animation: cnPulseRing 3s ease-in-out infinite;
        }
        .cn-ring::after {
          content: '';
          position: absolute;
          inset: -12px;
          border: 1px solid #023260;
          border-radius: 50%;
          opacity: 0.18;
          animation: cnPulseRing 3s ease-in-out infinite 0.6s;
        }

        .cn-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: rgba(2,50,96,0.25);
          transition: all 0.4s;
          cursor: pointer;
        }
        .cn-dot.cn-dot-active {
          width: 20px;
          background: #023260;
        }
        .cn-dot:hover {
          background: rgba(2,50,96,0.5);
        }

        .cn-corner {
          position: absolute;
          width: 48px;
          height: 48px;
          opacity: 0.35;
        }

        .cn-lantern {
          display: inline-block;
          animation: cnLanternSway 4s ease-in-out infinite;
          transform-origin: top center;
          font-size: 22px;
          margin: 0 6px;
        }
      `}</style>

      <div
        style={{
          background: "linear-gradient(to top, #023260, transparent)",
          minHeight: "100vh",
          width: "100%",
          paddingTop: "6rem",
          // paddingBottom: "2rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          /* ── CHANGED: prevent scroll at full-page desktop ── */
          overflow: "hidden",
        }}>
        {/* ── CHANGED: corner color #023260 → #D92525 ── */}
        <div
          className="cn-corner"
          style={{
            top: 16,
            left: 16,
            borderTop: "3px solid #D92525",
            borderLeft: "3px solid #D92525",
          }}
        />
        <div
          className="cn-corner"
          style={{
            top: 16,
            right: 16,
            borderTop: "3px solid #D92525",
            borderRight: "3px solid #D92525",
          }}
        />
        <div
          className="cn-corner"
          style={{
            bottom: 36,
            left: 16,
            borderBottom: "3px solid #D92525",
            borderLeft: "3px solid #D92525",
          }}
        />
        <div
          className="cn-corner"
          style={{
            bottom: 36,
            right: 16,
            borderBottom: "3px solid #D92525",
            borderRight: "3px solid #D92525",
          }}
        />

        <Petals />

        <h1
          style={{
            textAlign: "center",
            color: "#023260",
            fontSize: "clamp(32px, 5vw, 40px)",
            fontWeight: 800,
          }}>
          Meet the <span style={{ color: "#D92525" }}>Team.</span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 28,
            marginTop: 14,
            color: "#023260",
            opacity: 0.45,
            letterSpacing: 5,
            fontSize: 13,
          }}>
          <div
            style={{
              flex: 1,
              maxWidth: 130,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, #023260, transparent)",
            }}
          />
          ◈ 龙 ◈
          <div
            style={{
              flex: 1,
              maxWidth: 130,
              height: 1,
              background: "linear-gradient(90deg, #023260, transparent)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginBottom: 24,
          }}>
          {sectionKeys.map((section, index) => (
            <button
              key={section}
              onClick={() => handleTabClick(index)}
              className={`cn-tab${activeIndex === index ? " cn-tab-active" : ""}`}>
              {section}
            </button>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#023260",
            fontSize: 11,
            letterSpacing: 6,
            marginBottom: 28,
            opacity: 0.5,
          }}>
          — {activeSection} —
        </p>

        <div
          key={animKey}
          className="cn-fade-in"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 40,
          }}>
          {teams[activeSection].map((member, index) => (
            <div key={index} className="cn-member-card">
              <div className="cn-ring">
                {/* ── INCREASED: image 108 → 124px ── */}
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: 124,
                    height: 124,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid white",
                    boxShadow: "0 4px 16px rgba(2,50,96,0.25)",
                    display: "block",
                  }}
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    background: "#0077B5",
                    border: "2px solid white",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    zIndex: 10,
                    textDecoration: "none",
                  }}>
                  <Linkedin size={13} />
                </a>
              </div>

              <p
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 700,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                  lineHeight: 1.3,
                  marginBottom: 5,
                }}>
                {member.name}
              </p>

              <div
                style={{
                  color: "white",
                  fontSize: 9,
                  letterSpacing: 1,
                  padding: "2px 10px",
                  border: "1px solid rgba(255,255,255,0.45)",
                  clipPath:
                    "polygon(6px 0%,calc(100% - 6px) 0%,100% 50%,calc(100% - 6px) 100%,6px 100%,0% 50%)",
                  textAlign: "center",
                  opacity: 0.8,
                }}>
                {member.role}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 44,
          }}>
          {sectionKeys.map((_, i) => (
            <div
              key={i}
              onClick={() => handleTabClick(i)}
              className={`cn-dot${i === activeIndex ? " cn-dot-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
