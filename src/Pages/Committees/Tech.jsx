import React from "react";
import GeneralIcon from "/src/assets/Icons/General.png";
import SoftwareIcon from "/src/assets/Icons/Software.png";
import HardwareIcon from "/src/assets/Icons/Hardware.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .tt-root { font-family: 'Noto Sans SC', sans-serif; }
  .tt-serif { font-family: 'Noto Serif SC', serif; }

  .tt-card {
    position: relative;
    background: linear-gradient(135deg, #f0f6ff, #e8f0fa);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(2,50,96,0.12);
    border-radius: 18px;
    padding: 22px 18px 18px;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s;
    box-shadow: 0 2px 0 #cc2233, 0 4px 16px rgba(2,50,96,0.07);
  }
  .tt-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%, #cc2233 100%);
    border-radius: 18px 18px 0 0;
  }
  .tt-card:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 2px 0 #cc2233, 0 10px 28px rgba(2,50,96,0.13);
  }

  .tt-corner {
    position: absolute; width: 14px; height: 14px; border-style: solid; opacity: 0.4;
  }

  .tt-icon-ring {
    width: 56px; height: 56px; border-radius: 50%;
    background: linear-gradient(135deg, #f0f6ff, #e8f0fa);
    border: 1.5px solid #023260;
    box-shadow: 0 2px 10px rgba(2,50,96,0.12), inset 0 1px 0 #fff;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px; position: relative; flex-shrink: 0;
  }
  .tt-icon-ring::after {
    content: '';
    position: absolute; top: -3px; right: -3px;
    width: 8px; height: 8px; border-radius: 50%;
    background: #cc2233; border: 1.5px solid #fff8f0;
  }

  .tt-divider-line-l { background: linear-gradient(90deg, transparent, rgba(2,50,96,0.15)); }
  .tt-divider-line-r { background: linear-gradient(90deg, rgba(2,50,96,0.15), transparent); }
  .tt-seal-line-l { background: linear-gradient(90deg, transparent, #6e99c2); }
  .tt-seal-line-r { background: linear-gradient(90deg, #6e99c2, transparent); }

  @keyframes ttReveal {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .tt-card:nth-child(1) { animation: ttReveal 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
  .tt-card:nth-child(2) { animation: ttReveal 0.6s 0.12s cubic-bezier(0.16,1,0.3,1) both; }
  .tt-card:nth-child(3) { animation: ttReveal 0.6s 0.19s cubic-bezier(0.16,1,0.3,1) both; }
`;

const CORNERS = [
  { top: 10, left: 10, borderColor: "#cc2233", borderWidth: "1.5px 0 0 1.5px" },
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
];

function Card({ icon, title, description }) {
  return (
    <div className="tt-card">
      {CORNERS.map((s, i) => (
        <div key={i} className="tt-corner" style={s} />
      ))}
      <div className="tt-icon-ring">
        <img
          src={icon}
          alt={title}
          style={{ width: 28, height: 28, objectFit: "contain" }}
        />
      </div>
      <h3
        className="tt-serif"
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#023260",
          marginBottom: 6,
          letterSpacing: "0.02em",
        }}>
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          margin: "4px 0 8px",
          width: "100%",
        }}>
        <div className="tt-divider-line-l flex-1" style={{ height: 1 }} />
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#cc2233",
            opacity: 0.5,
          }}
        />
        <div className="tt-divider-line-r flex-1" style={{ height: 1 }} />
      </div>
      <p
        className="tt-root"
        style={{
          fontSize: 11,
          fontWeight: 300,
          color: "rgba(2,50,96,0.6)",
          lineHeight: 1.7,
          letterSpacing: "0.02em",
        }}>
        {description}
      </p>
    </div>
  );
}

export default function TechnicalTeam() {
  const teams = [
    {
      title: "General",
      description: "Workshops, training sessions & general technical growth.",
      icon: GeneralIcon,
    },
    {
      title: "Software",
      description: "Recruitment, interviews, follow-up with teams.",
      icon: SoftwareIcon,
    },
    {
      title: "Hardware",
      description:
        "Build external connections, logistics, sponsors & partnerships.",
      icon: HardwareIcon,
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <section className="tt-root min-h-screen flex flex-col items-center justify-center pt-28 pb-14 px-4 bg-gradient-to-t from-[#023260] to-transparent overflow-auto md:overflow-hidden md:h-screen">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="tt-serif"
            style={{
              fontSize: 10,
              letterSpacing: "0.45em",
              color: "rgba(2,50,96,0.45)",
              textTransform: "uppercase",
              marginBottom: 6,
            }}>
            技术团队
          </p>
          <h2
            className="tt-serif"
            style={{ fontSize: 26, fontWeight: 700, color: "#023260" }}>
            Technical <span style={{ color: "#cc2233" }}>Team</span>
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 8,
            }}>
            <div
              style={{
                width: 36,
                height: 1,
                background: "rgba(204,34,51,0.4)",
              }}
            />
            <span style={{ color: "rgba(204,34,51,0.5)", fontSize: 11 }}>
              ❖
            </span>
            <div
              style={{
                width: 36,
                height: 1,
                background: "rgba(204,34,51,0.4)",
              }}
            />
          </div>
        </div>

        {/* All 3 cards in a single horizontal row on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {teams.map((team, i) => (
            <Card key={i} {...team} />
          ))}
        </div>

        {/* Seal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 22,
            opacity: 0.3,
            maxWidth: 320,
            width: "100%",
          }}>
          <div className="tt-seal-line-l flex-1" style={{ height: 1 }} />
          <div
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#cc2233",
            }}
          />
          <span
            className="tt-serif"
            style={{
              fontSize: 8,
              color: "#6e99c2",
              letterSpacing: "0.15em",
              whiteSpace: "nowrap",
            }}>
            IEEE SB · 技术团队
          </span>
          <div
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#cc2233",
            }}
          />
          <div className="tt-seal-line-r flex-1" style={{ height: 1 }} />
        </div>
      </section>
    </>
  );
}
