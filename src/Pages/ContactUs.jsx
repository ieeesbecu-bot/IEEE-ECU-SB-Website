import React, { useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    background: "linear-gradient(to top, #023260, transparent)",
  }

  .cu-root {
    background: linear-gradient(to top, #023260, rgba(2, 50, 96, 0));
    min-height: 100vh;
    font-family: 'Noto Sans SC', sans-serif;
  }

  .cu-bg-char {
    position: absolute;
    font-family: 'Noto Serif SC', serif;
    font-weight: 700;
    pointer-events: none;
    user-select: none;
    line-height: 1;
  }

  .cu-petal {
    position: absolute;
    width: 7px;
    height: 11px;
    border-radius: 80% 0 80% 0;
    opacity: 0;
    animation: cuFallPetal linear infinite;
    top: -20px;
  }
  @keyframes cuFallPetal {
    0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
    8%   { opacity: 0.45; }
    85%  { opacity: 0.25; }
    100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
  }

  .cu-label {
    font-family: 'Noto Serif SC', serif;
    font-size: 11px;
    letter-spacing: 0.45em;
    color: #023260;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .cu-divider { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 6px; }
  .cu-divider-line { width: 40px; height: 1px; background: rgba(204,34,51,0.45); }
  .cu-divider-diamond { color: rgba(204,34,51,0.55); font-size: 11px; }

  .cu-icon-circle {
    width: 36px; height: 36px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s, transform 0.25s, border-color 0.25s;
    backdrop-filter: blur(4px);
  }
  .cu-icon-circle:hover {
    background: rgba(204,34,51,0.2);
    border-color: rgba(204,34,51,0.5);
    transform: scale(1.1);
  }

  .cu-form-card {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(204,34,51,0.15);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }
  .cu-form-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, rgba(255,255,255,0.12) 33%, rgba(255,255,255,0.12) 66%, #cc2233 66%, #cc2233 100%);
  }

  .cu-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 13px;
    font-weight: 300;
    padding: 8px 0;
    transition: border-color 0.3s;
    letter-spacing: 0.02em;
  }
  .cu-input::placeholder { color: rgba(255,255,255,0.35); }

  .cu-btn {
    background: #cc2233;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 10px 36px;
    font-family: 'Noto Serif SC', serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(204,34,51,0.35);
    position: relative;
    overflow: hidden;
  }
  .cu-btn::after {
    content: '';
    position: absolute;
    bottom: 0; left: 25%; right: 25%;
    height: 1px;
    background: rgba(255,215,0,0.4);
  }
  .cu-btn:hover {
    background: #fff;
    color: #cc2233;
    box-shadow: 0 6px 24px rgba(204,34,51,0.4);
    transform: translateY(-1px);
  }
  .cu-btn:active { transform: translateY(0); }
  .cu-btn:disabled { background: rgba(255,255,255,0.2); color: rgba(255,255,255,0.4); cursor: not-allowed; transform: none; box-shadow: none; }

  .cu-form-title { font-family: 'Noto Serif SC', serif; color:#023260 }

  .cu-ornament { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
  .cu-ornament-line { flex: 1; height: 1px; background: rgba(204,34,51,0.25); }
  .cu-ornament-dot  { width: 4px; height: 4px; border-radius: 50%; background: #cc2233; opacity: 0.6; }

  @keyframes cuReveal {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cu-reveal       { animation: cuReveal 0.7s cubic-bezier(0.16,1,0.3,1) both; }
  .cu-reveal-delay { animation: cuReveal 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both; }
`;

const PETALS = [
  { left: "8%", color: "#cc2233", duration: "9s", delay: "0s" },
  { left: "25%", color: "#e04455", duration: "11s", delay: "2s" },
  { left: "50%", color: "#cc2233", duration: "8s", delay: "4.5s" },
  { left: "72%", color: "#e04455", duration: "13s", delay: "1s" },
  { left: "90%", color: "#cc2233", duration: "10s", delay: "3s" },
];

export default function ContactUs() {
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    emailjs
      .sendForm(
        "service_nhpzl3c",
        "template_2xnln9h",
        form.current,
        "Ihsc4IAixAZ1IGWXQ",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("success");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccess("error");
          setLoading(false);
        },
      );
  };

  return (
    <>
      <style>{styles}</style>

      <div className="cu-root relative min-h-screen w-full flex items-center justify-center px-6 py-10 lg:py-0 overflow-hidden">
        {/* Faded Chinese bg characters */}
        <span
          className="cu-bg-char"
          style={{
            fontSize: 220,
            color: "rgba(255,255,255,0.025)",
            bottom: "-2%",
            left: "-3%",
          }}>
          联
        </span>
        <span
          className="cu-bg-char"
          style={{
            fontSize: 160,
            color: "rgba(204,34,51,0.04)",
            top: "5%",
            right: "-2%",
          }}>
          系
        </span>
        <span
          className="cu-bg-char"
          style={{
            fontSize: 100,
            color: "rgba(255,255,255,0.02)",
            top: "25%",
            left: "5%",
          }}>
          我
        </span>

        {/* Falling petals */}
        {PETALS.map((p, i) => (
          <div
            key={i}
            className="cu-petal"
            style={{
              left: p.left,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl w-full flex flex-col justify-center h-full">
          {/* Header */}
          <div className="text-center mb-4 mt-20 cu-reveal ">
            <p className="cu-label ">联系我们</p>
            <h1
              className="text-3xl md:text-3xl font-extrabold text-[#023260]"
              style={{ fontFamily: "'Noto Serif SC', serif" }}>
              Contact <span style={{ color: "#D92525" }}>Us.</span>
            </h1>
            <div className="cu-divider">
              <div className="cu-divider-line" />
              <span className="cu-divider-diamond">❖</span>
              <div className="cu-divider-line" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            {/* Left — Contact Info */}
            <div className="cu-reveal flex flex-col justify-center items-center md:items-start md:pl-10 space-y-1 md:space-y-1">
              <div className="space-y-3 md:space-y-3 md:ml-1">
                <div className="flex items-center gap-4 group">
                  <div className="cu-icon-circle">
                    <MapPin size={13} color="white" />
                  </div>
                  <div>
                    <h3
                      className="text-white text-sm font-bold uppercase tracking-wide"
                      style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      Address
                    </h3>
                    <p
                      className="text-white/65 text-xs md:text-base font-light"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      Heliopolis, Gesr El-Suez st.
                      <br />
                      After Tgneed Bridge.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="cu-icon-circle">
                    <Phone size={13} color="white" />
                  </div>
                  <div>
                    <h3
                      className="text-white text-sm font-bold uppercase tracking-wide"
                      style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      Phone
                    </h3>
                    <p
                      className="text-white/65 text-xs md:text-base font-light"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      561-456-2321
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="cu-icon-circle">
                    <Mail size={13} color="white" />
                  </div>
                  <div>
                    <h3
                      className="text-white text-sm font-bold uppercase tracking-wide"
                      style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      Email
                    </h3>
                    <p
                      className="text-white/65 text-xs md:text-base font-light"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      ieeesb.ecu@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="cu-form-card cu-reveal-delay p-5 sm:p-3 md:p-2 mb-2 md:px-8 max-w-lg mx-auto md:mx-0 w-full">
              <div className="cu-ornament">
                <div className="cu-ornament-line" />
                <div className="cu-ornament-dot" />
                <div
                  className="cu-ornament-dot"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                />
                <div className="cu-ornament-dot" />
                <div className="cu-ornament-line" />
              </div>

              <p
                className="cu-label"
                style={{ color: "text-[#023260]", marginBottom: 2 }}>
                发送消息
              </p>
              <h2 className="cu-form-title text-xl md:text-2xl font-bold text-white mb-1">
                Send Message
              </h2>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-6">
                <div className="relative border-b-2 border-white/20 focus-within:border-white transition-colors">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="cu-input"
                  />
                </div>
                <div className="relative border-b-2 border-white/20 focus-within:border-white transition-colors">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="cu-input"
                  />
                </div>
                <div className="relative border-b-2 border-white/20 focus-within:border-white transition-colors">
                  <textarea
                    name="message"
                    placeholder="Type your Message..."
                    rows={2}
                    required
                    className="cu-input"
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cu-btn w-full">
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p
                    className="mt-3 text-center font-semibold text-sm"
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      color: success === "success" ? "#7de8a0" : "#ff8090",
                    }}>
                    {success === "success"
                      ? "✦  Message sent successfully!  ✦"
                      : "✦  Failed to send. Please try again.  ✦"}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
