import React, { useState, useEffect } from "react";

const LANTERNS = [
  {
    left: "8%",
    color: "radial-gradient(#e03030, #a00000)",
    shadow: "0 0 10px #cc000055",
    duration: "10s",
    delay: "0s",
  },
  {
    left: "22%",
    color: "radial-gradient(#ffd700, #cc8800)",
    shadow: "0 0 10px #ffcc0055",
    duration: "13s",
    delay: "2s",
  },
  {
    left: "48%",
    color: "radial-gradient(#023260, #011a3a)",
    shadow: "0 0 10px #02326055",
    duration: "9s",
    delay: "4s",
  },
  {
    left: "68%",
    color: "radial-gradient(#e03030, #a00000)",
    shadow: "0 0 10px #cc000055",
    duration: "12s",
    delay: "1s",
  },
  {
    left: "84%",
    color: "radial-gradient(#ffd700, #cc8800)",
    shadow: "0 0 10px #ffcc0055",
    duration: "11s",
    delay: "3s",
  },
  {
    left: "36%",
    color: "radial-gradient(#023260, #011a3a)",
    shadow: "0 0 10px #02326055",
    duration: "14s",
    delay: "5.5s",
  },
];

const PETALS = [
  { left: "12%", color: "#cc2233", duration: "8s", delay: "0s" },
  { left: "30%", color: "#e05555", duration: "10s", delay: "2s" },
  { left: "55%", color: "#cc2233", duration: "7s", delay: "4s" },
  { left: "75%", color: "#e05555", duration: "9s", delay: "1.5s" },
  { left: "92%", color: "#cc2233", duration: "12s", delay: "3s" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .ieee-scene {
        background: linear-gradient(135deg, #f0f6ff, #e8f0fa);

  }
  .ieee-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(110, 153, 194,0.04) 29px),
      repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(110, 153, 194,0.04) 29px);
    pointer-events: none;
  }
  .ieee-card {
    background: #fffff;
    border: 1px solid rgba(2,50,96,0.15);
    box-shadow: 0 2px 0 #cc2233, 0 8px 32px rgba(2,50,96,0.12), 0 2px 8px rgba(0,0,0,0.06);
  }
  .ieee-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 35%, #023260 35%, #023260 65%, #cc2233 65%, #cc2233 100%);
    border-radius: 16px 16px 0 0;
  }
  .ieee-card::after {
    content: '';
    position: absolute;
    top: 14px; bottom: 14px; left: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, #cc223340, transparent);
  }
  .ieee-icon-ring::before {
    content: '福';
    position: absolute;
    font-family: 'Noto Serif SC', serif;
    font-size: 7px;
    color: #cc2233;
    top: -11px;
    opacity: 0.5;
    letter-spacing: 6px;
    white-space: nowrap;
  }
  .ieee-icon-ring::after {
    content: '';
    position: absolute;
    top: -3px; right: -3px;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #fffff;
    border: 1.5px solid #fff8f0;
  }
  .ieee-btn::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fffff, transparent);
    opacity: 0.6;
  }
  .ieee-divider-line-l {
    background: linear-gradient(90deg, transparent, rgba(2,50,96,0.2));
  }
  .ieee-divider-line-r {
    background: linear-gradient(90deg, rgba(2,50,96,0.2), transparent);
  }
  .ieee-seal-line-l { background: linear-gradient(90deg, transparent, #023260); }
  .ieee-seal-line-r { background: linear-gradient(90deg, #023260, transparent); }
  .ieee-font-serif { font-family: 'Noto Serif SC', serif; }
  .ieee-font-sans  { font-family: 'Noto Sans SC', sans-serif; }

  @keyframes ieeeFloatLantern {
    0%   { transform: translateY(108vh) rotate(-4deg); opacity: 0; }
    6%   { opacity: 0.8; }
    88%  { opacity: 0.6; }
    100% { transform: translateY(-12vh) rotate(4deg); opacity: 0; }
  }
  @keyframes ieeeFallPetal {
    0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
    10%  { opacity: 0.65; }
    85%  { opacity: 0.4; }
    100% { transform: translateY(105vh) rotate(720deg) translateX(55px); opacity: 0; }
  }
  @keyframes ieeeCardReveal {
    from { opacity: 0; transform: translateY(20px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .ieee-card-wrap {
    animation: ieeeCardReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .ieee-input:focus {
    border-color: #023260 !important;
    box-shadow: 0 0 0 3px rgba(2,50,96,0.08);
    background: #fff !important;
  }
  .ieee-btn:hover {
    background: #023260 !important;
    box-shadow: 0 5px 20px rgba(2,50,96,0.4) !important;
    transform: translateY(-1px);
  }
  .ieee-btn:active { transform: translateY(0); }
`;

const Lantern = ({ left, color, shadow, duration, delay }) => (
  <div
    style={{
      position: "absolute",
      left,
      width: 14,
      height: 20,
      borderRadius: "50% 50% 45% 45%",
      background: color,
      boxShadow: shadow,
      animation: `ieeeFloatLantern ${duration} ${delay} linear infinite`,
      opacity: 0,
    }}>
    <div
      style={{
        position: "absolute",
        top: -3,
        left: "50%",
        transform: "translateX(-50%)",
        width: 6,
        height: 3,
        background: "#b8860b",
        borderRadius: 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 1,
        height: 6,
        background: "#b8860b",
      }}
    />
  </div>
);

const Petal = ({ left, color, duration, delay }) => (
  <div
    style={{
      position: "absolute",
      left,
      top: -20,
      width: 7,
      height: 11,
      borderRadius: "80% 0 80% 0",
      background: color,
      opacity: 0,
      animation: `ieeeFallPetal ${duration} ${delay} linear infinite`,
    }}
  />
);

const Events = () => {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotify = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setNotified(true);
    setTimeout(() => {
      setNotified(false);
      setEmail("");
    }, 2500);
  };

  return (
    <>
      <style>{styles}</style>

      <div
        className="ieee-scene relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
        {/* Ink circles */}
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(2,50,96,0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: "50%",
            border: "1px solid rgba(2,50,96,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />

        {/* Faded bg characters */}
        <span
          className="ieee-font-serif"
          style={{
            position: "absolute",
            fontSize: 180,
            fontWeight: 700,
            color: "rgba(2,50,96,0.04)",
            top: "5%",
            left: "-2%",
            lineHeight: 3,
            userSelect: "none",
            pointerEvents: "none",
          }}>
          福
        </span>
        <span
          className="ieee-font-serif"
          style={{
            position: "absolute",
            fontSize: 120,
            fontWeight: 700,
            color: "rgba(180,20,20,0.04)",
            bottom: "5%",
            right: "-1%",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}>
          壽
        </span>
        <span
          className="ieee-font-serif"
          style={{
            position: "absolute",
            fontSize: 80,
            fontWeight: 700,
            color: "rgba(2,50,96,0.04)",
            top: "20%",
            right: "8%",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}>
          喜
        </span>

        {/* Lanterns */}
        {LANTERNS.map((l, i) => (
          <Lantern key={i} {...l} />
        ))}

        {/* Petals */}
        {PETALS.map((p, i) => (
          <Petal key={i} {...p} />
        ))}

        {/* Card */}
        <div
          className="ieee-card-wrap relative z-10 w-full px-4 pt-12"
          style={{ maxWidth: 390 }}>
          <div className="ieee-card relative rounded-2xl p-6 overflow-hidden">
            {/* Dot pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle, rgba(2,50,96,0.03) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                pointerEvents: "none",
              }}
            />

            {/* Corner ornaments */}
            {[
              {
                top: 10,
                left: 10,
                borderColor: "#cc2233",
                borderWidth: "1.5px 0 0 1.5px",
              },
              {
                top: 10,
                right: 10,
                borderColor: "#023260",
                borderWidth: "1.5px 1.5px 0 0",
              },
              {
                bottom: 10,
                left: 10,
                borderColor: "#023260",
                borderWidth: "0 0 1.5px 1.5px",
              },
              {
                bottom: 10,
                right: 10,
                borderColor: "#cc2233",
                borderWidth: "0 1.5px 1.5px 0",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  borderStyle: "solid",
                  opacity: 0.5,
                  ...s,
                }}
              />
            ))}

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className="ieee-icon-ring relative flex items-center justify-center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "1.5px solid #023260",
                  background: "linear-gradient(135deg,#f0f6ff,#e8f0fa)",
                  boxShadow:
                    "0 2px 12px rgba(2,50,96,0.15), inset 0 1px 0 #fff",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#023260"
                  width={22}
                  height={22}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1
              className="ieee-font-serif text-center mb-1"
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#023260",
                letterSpacing: "0.02em",
              }}>
              Registration <span style={{ color: "#cc2233" }}>Coming Soon</span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-2 my-2.5">
              <div
                className="ieee-divider-line-l flex-1"
                style={{ height: 1 }}
              />
              <div className="flex items-center gap-1">
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#cc2233",
                  }}
                />
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#023260",
                  }}
                />
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#cc2233",
                  }}
                />
              </div>
              <div
                className="ieee-divider-line-r flex-1"
                style={{ height: 1 }}
              />
            </div>

            {/* Description */}
            <p
              className="ieee-font-sans text-center mb-4"
              style={{
                fontSize: 12,
                fontWeight: 300,
                color: "#6a7f95",
                lineHeight: 1.75,
                letterSpacing: "0.02em",
              }}>
              We are preparing the next big event for IEEE members.
              <br />
              Stay tuned for exciting opportunities ahead.
            </p>

            {/* Tags */}
            <div className="flex justify-center gap-1.5 mb-4">
              {["Workshops", "Networking"].map((t) => (
                <span
                  key={t}
                  className="ieee-font-sans"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.08em",
                    padding: "2px 8px",
                    borderRadius: 20,
                    fontWeight: 500,
                    background: "#fff0f0",
                    color: "#cc2233",
                    border: "1px solid #f5c0c5",
                  }}>
                  {t}
                </span>
              ))}
              <span
                className="ieee-font-sans"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  padding: "2px 8px",
                  borderRadius: 20,
                  fontWeight: 500,
                  background: "#f0f5ff",
                  color: "#023260",
                  border: "1px solid #b0c8e8",
                }}>
                Hackathons
              </span>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ieee-input ieee-font-sans w-full rounded-lg outline-none transition-all"
                style={{
                  background: "#fffff",
                  border: "1px solid rgba(2,50,96,0.4)",
                  padding: "9px 14px",
                  fontSize: 12,
                  color: "#023260",
                }}
              />
              <button
                onClick={handleNotify}
                className="ieee-btn ieee-font-serif relative w-full rounded-lg overflow-hidden transition-all"
                style={{
                  background: notified ? "#1a6630" : "#023260",
                  border: "none",
                  padding: "9px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  boxShadow: "0 3px 12px rgba(2,50,96,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}>
                {notified ? (
                  <span>✦ &nbsp;已通知&nbsp; ✦</span>
                ) : (
                  <>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#cc2233",
                      }}
                    />
                    Notify Me
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#cc2233",
                      }}
                    />
                  </>
                )}
              </button>
            </div>

            {/* Seal footer */}
            <div
              className="flex items-center gap-1.5 mt-3.5"
              style={{ opacity: 0.35 }}>
              <div className="ieee-seal-line-l flex-1" style={{ height: 1 }} />
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#cc2233",
                }}
              />
              <span
                className="ieee-font-serif"
                style={{
                  fontSize: 8,
                  color: "#023260",
                  letterSpacing: "0.15em",
                }}>
                IEEE EVENTS · 二〇二五
              </span>
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#cc2233",
                }}
              />
              <div className="ieee-seal-line-r flex-1" style={{ height: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
