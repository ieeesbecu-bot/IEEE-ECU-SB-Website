import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";

// ─── Helpers ───────────────────────────────────────────────────
const getInitials = (first = "", last = "") =>
  `${first.charAt(0)}${last.charAt(0)}`.toUpperCase() || "??";

const buildPositionLabel = (tier, team, position) => {
  if (!tier && !position) return "—";
  if (tier === "HighBoard") return position || "—";
  if (tier === "Board") return team ? `${team} ${position}` : position || "—";
  if (tier === "Member")
    return team ? `${team} · ${position}` : position || "—";
  return position || "—";
};

// ─── Styles ────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .acc-root { font-family: 'Noto Sans SC', sans-serif; }
  .acc-serif { font-family: 'Noto Serif SC', serif; }

  .acc-card {
    background: #ffffff;
    border: 1px solid rgba(2,50,96,0.1);
    border-radius: 20px;
    box-shadow: 0 2px 0 #cc2233, 0 4px 20px rgba(2,50,96,0.07);
    position: relative;
    overflow: hidden;
  }
  .acc-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%, #cc2233 100%);
    border-radius: 20px 20px 0 0;
  }

  .acc-corner {
    position: absolute; width: 14px; height: 14px; border-style: solid; opacity: 0.35;
    pointer-events: none;
  }

  .acc-tab {
    flex: 1; display: flex; align-items: center; gap: 10px;
    padding: 13px 18px; font-size: 12px; text-align: left;
    border: none; border-bottom: 2px solid transparent;
    cursor: pointer; transition: all 0.2s;
    font-family: 'Noto Sans SC', sans-serif; letter-spacing: 0.06em;
    background: transparent;
  }
  .acc-tab.active {
    background: #023260;
    color: #ffffff; font-weight: 500;
    border-bottom: 2px solid #cc2233;
    border-left: none;
  }
  .acc-tab:not(.active) { color: rgba(2,50,96,0.5); }
  .acc-tab:not(.active):hover { background: rgba(2,50,96,0.03); color: #023260; }

  .acc-section-divider {
    display: flex; align-items: center; gap: 8px; margin: 4px 0;
  }
  .acc-divider-line-l { flex:1; height:1px; background: linear-gradient(90deg, transparent, rgba(2,50,96,0.12)); }
  .acc-divider-line-r { flex:1; height:1px; background: linear-gradient(90deg, rgba(2,50,96,0.12), transparent); }
  .acc-divider-dot { width:4px; height:4px; border-radius:50%; background:#cc2233; opacity:0.5; }

  .acc-input {
    width: 100%; padding: 9px 14px; border-radius: 12px;
    border: 1px solid rgba(2,50,96,0.15); background: #f5f8ff;
    color: #023260; font-size: 13px; outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .acc-input::placeholder { color: rgba(2,50,96,0.3); }
  .acc-input:focus { border-color: #023260; box-shadow: 0 0 0 3px rgba(2,50,96,0.07); background: #fff; }
  .acc-input:read-only { opacity: 0.6; cursor: not-allowed; }
  .acc-input.error { border-color: rgba(204,34,51,0.5); }

  .acc-readonly {
    width: 100%; padding: 9px 14px; border-radius: 12px;
    border: 1px solid rgba(2,50,96,0.1); background: #eef2f7;
    color: rgba(2,50,96,0.6); font-size: 13px;
    font-family: 'Noto Sans SC', sans-serif; cursor: default;
  }

  .acc-btn {
    width: 100%; padding: 11px; border-radius: 12px;
    background: #023260; color: #fff; border: none; cursor: pointer;
    font-family: 'Noto Serif SC', serif; font-size: 12px;
    font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    transition: all 0.2s; box-shadow: 0 3px 12px rgba(2,50,96,0.25);
    display: flex; align-items: center; justify-content: center; gap: 8px;
    position: relative; overflow: hidden;
  }
  .acc-btn::after {
    content: '';
    position: absolute; bottom: 0; left: 25%; right: 25%;
    height: 1px; background: rgba(204,34,51,0.5);
  }
  .acc-btn:hover { background: #012040; box-shadow: 0 5px 20px rgba(2,50,96,0.35); transform: translateY(-1px); }
  .acc-btn:active { transform: translateY(0); }
  .acc-btn:disabled { background: #e2e8f0; color: #94a3b8; cursor: not-allowed; transform: none; box-shadow: none; }
  .acc-btn:disabled::after { display: none; }

  .acc-info-item { border-bottom: 1px solid rgba(2,50,96,0.05); padding-bottom: 10px; }
  .acc-info-item:last-child { border-bottom: none; padding-bottom: 0; }

  .acc-toast {
    position: fixed; top: 20px; right: 24px; z-index: 50;
    display: flex; align-items: center; gap: 10px;
    padding: 12px 18px; border-radius: 16px;
    font-family: 'Noto Sans SC', sans-serif; font-size: 13px; font-weight: 500;
    box-shadow: 0 8px 32px rgba(2,50,96,0.15);
    animation: accSlideIn 0.3s ease both;
  }
  .acc-toast.success { background: #fffdf8; border: 1px solid rgba(2,50,96,0.2); color: #023260; }
  .acc-toast.error   { background: #fff5f5; border: 1px solid rgba(204,34,51,0.3); color: #cc2233; }

  .acc-seal {
    display: flex; align-items: center; gap: 6px; opacity: 0.25; margin-top: 20px;
  }
  .acc-seal-line-l { flex:1; height:1px; background: linear-gradient(90deg, transparent, #023260); }
  .acc-seal-line-r { flex:1; height:1px; background: linear-gradient(90deg, #023260, transparent); }
  .acc-seal-dot { width:3px; height:3px; border-radius:50%; background:#cc2233; }
  .acc-seal-text { font-family:'Noto Serif SC',serif; font-size:8px; color:#023260; letter-spacing:0.15em; white-space:nowrap; }

  .acc-strength-bar { height:3px; flex:1; border-radius:999px; transition:background 0.3s; }

  /* ── Responsive grid ── */
  .acc-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 280px 1fr;
  }
  @media (max-width: 768px) {
    .acc-grid {
      grid-template-columns: 1fr;
    }
    .acc-info-row {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @keyframes accSlideIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }
  @keyframes accFadeUp  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .acc-fade-up { animation: accFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.3) sepia(1) saturate(2) hue-rotate(200deg); cursor:pointer; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-track { background:#f5f8ff; }
  ::-webkit-scrollbar-thumb { background:rgba(2,50,96,0.15); border-radius:4px; }
`;

// ─── Corner ornaments ──────────────────────────────────────────
const CORNERS_RED_BLUE = [
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

function Corners() {
  return CORNERS_RED_BLUE.map((s, i) => (
    <div key={i} className="acc-corner" style={s} />
  ));
}

// ─── Read-Only Field ───────────────────────────────────────────
function ReadOnlyField({ label, value }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "rgba(2,50,96,0.45)",
          textTransform: "uppercase",
          marginBottom: 6,
          fontFamily: "'Noto Sans SC', sans-serif",
        }}>
        {label}
      </label>
      <div className="acc-readonly">{value || "—"}</div>
    </div>
  );
}

// ─── Ornament Divider ──────────────────────────────────────────
function OrnamentDivider() {
  return (
    <div className="acc-section-divider">
      <div className="acc-divider-line-l" />
      <div className="acc-divider-dot" />
      <div className="acc-divider-line-r" />
    </div>
  );
}

// ─── Section Header ────────────────────────────────────────────
function SectionHeader({ title, subtitle, cnLabel }) {
  return (
    <div style={{ marginBottom: 10 }}>
      {cnLabel && (
        <p
          className="acc-serif"
          style={{
            fontSize: 10,
            letterSpacing: "0.4em",
            color: "rgba(2,50,96,0.4)",
            textTransform: "uppercase",
            marginBottom: 4,
          }}>
          {cnLabel}
        </p>
      )}
      <h2
        className="acc-serif"
        style={{ fontSize: 17, fontWeight: 700, color: "#023260" }}>
        {title}{" "}
        {subtitle && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "rgba(2,50,96,0.4)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}>
            {subtitle}
          </span>
        )}
      </h2>
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
        <div
          style={{ width: 24, height: 1, background: "rgba(204,34,51,0.35)" }}
        />
        <span style={{ color: "rgba(204,34,51,0.4)", fontSize: 10 }}>❖</span>
        <div
          style={{ width: 24, height: 1, background: "rgba(204,34,51,0.35)" }}
        />
      </div>
    </div>
  );
}

// ─── Toast ─────────────────────────────────────────────────────
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className={`acc-toast ${type}`}>
      <span>{type === "success" ? "✦" : "✕"}</span>
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: 6,
          opacity: 0.5,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 12,
        }}>
        ✕
      </button>
    </div>
  );
}

// ─── Avatar Section ────────────────────────────────────────────
function AvatarSection({ profile, avatarUrl, onAvatarChange, showToast }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !profile?.id) return;
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${profile.id}/avatar_${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("avatars")
        .upload(path, file, { upsert: true });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("avatars").getPublicUrl(path);
      const newUrl = data.publicUrl;
      const { error: dbErr } = await supabase
        .from("profiles")
        .update({ avatar_url: newUrl, updated_at: new Date().toISOString() })
        .eq("id", profile.id);
      if (dbErr) throw dbErr;
      onAvatarChange(newUrl);
      window.dispatchEvent(new Event("avatar-updated"));
      showToast("Profile picture updated!");
    } catch (err) {
      showToast(err.message || "Upload failed", "error");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
      }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(2,50,96,0.25)",
            boxShadow:
              "0 0 0 4px rgba(204,34,51,0.1), 0 4px 16px rgba(2,50,96,0.12)",
          }}>
          {avatarUrl ? (
            <img
              key={avatarUrl}
              src={avatarUrl}
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#214970",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
                color: "#023260",
                fontFamily: "'Noto Serif SC', serif",
              }}>
              {getInitials(profile?.first_name, profile?.last_name)}
            </div>
          )}
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backdropFilter: "blur(4px)",
            opacity: 0,
            border: "none",
            cursor: "pointer",
            fontSize: 11,
            color: "#023260",
            fontWeight: 600,
            fontFamily: "'Noto Sans SC', sans-serif",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "0")}>
          {uploading ? "..." : "Change"}
        </button>
        {uploading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "3px solid #214970",
              borderTopColor: "#023260",
              animation: "spin 0.8s linear infinite",
              pointerEvents: "none",
            }}
          />
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFile}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          className="acc-serif"
          style={{ fontWeight: 700, fontSize: 14, color: "#023260" }}>
          {profile?.first_name} {profile?.last_name}
        </p>
        <p
          style={{
            fontSize: 11,
            color: "rgba(2,50,96,0.5)",
            marginTop: 3,
            fontFamily: "'Noto Sans SC', sans-serif",
          }}>
          {buildPositionLabel(profile?.tier, profile?.team, profile?.position)}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            marginTop: 6,
          }}>
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#cc2233",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#023260",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#cc2233",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────
export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [avatarUrl, setAvatarUrl] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [faculty, setFaculty] = useState("");
  const [level, setLevel] = useState("");
  const [tier, setTier] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const showToast = (message, type = "success") => setToast({ message, type });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { user },
          error: userErr,
        } = await supabase.auth.getUser();
        if (userErr || !user) throw userErr || new Error("Not authenticated");
        setUser(user);
        const { data: prof, error: profErr } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        if (profErr && profErr.code !== "PGRST116") throw profErr;
        if (prof) {
          setProfile(prof);
          setFirstName(prof.first_name || "");
          setLastName(prof.last_name || "");
          setPhone(prof.phone_number || "");
          setDob(prof.date_of_birth || "");
          setFaculty(prof.faculty || "");
          setLevel(prof.level || "");
          setTier(prof.tier || "");
          setTeam(prof.team || "");
          setPosition(prof.position || "");
          setAvatarUrl(prof.avatar_url || null);
        }
      } catch (err) {
        showToast(err.message || "Failed to load profile", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) setUser(null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const updates = {
        id: user.id,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        phone_number: phone.trim(),
        date_of_birth: dob || null,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      setProfile((prev) => ({ ...prev, ...updates }));
      showToast("Profile updated successfully!");
      window.dispatchEvent(new Event("avatar-updated"));
    } catch (err) {
      showToast(err.message || "Failed to save profile", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      showToast("Please fill in all password fields", "error");
      return;
    }
    if (newPassword.length < 8) {
      showToast("Password must be at least 8 characters", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;
      setNewPassword("");
      setConfirmPassword("");
      showToast("Password changed successfully!");
    } catch (err) {
      showToast(err.message || "Failed to change password", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid rgba(2,50,96,0.15)",
              borderTopColor: "#023260",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <p
            className="acc-serif"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(2,50,96,0.4)",
              textTransform: "uppercase",
            }}>
            Loading
          </p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );

  if (!user)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <p
          style={{
            fontSize: 13,
            color: "rgba(2,50,96,0.5)",
            fontFamily: "'Noto Sans SC', sans-serif",
          }}>
          Not authenticated. Please sign in.
        </p>
      </div>
    );

  const positionLabel = buildPositionLabel(tier, team, position);
  const isHighBoard = tier === "HighBoard";
  const tabs = [
    { id: "profile", label: "Profile", cnLabel: "个人资料", icon: "◈" },
    { id: "security", label: "Security", cnLabel: "安全", icon: "⬡" },
  ];

  const pwStrength =
    newPassword.length === 0
      ? -1
      : newPassword.length < 8
        ? 0
        : newPassword.length < 12
          ? 1
          : newPassword.length < 16
            ? 2
            : 3;
  const pwColors = ["#cc2233", "#f59e0b", "#3b82f6", "#023260"];
  const pwLabels = ["Too short", "Acceptable", "Good", "Strong ✦"];

  return (
    <>
      <style>{styles}</style>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div
        className="acc-root acc-fade-up"
        style={{ minHeight: "100vh", background: "#ffffff" }}>
        <div style={{ width: "100%", padding: "96px 40px 48px" }}>
          {/* ── Responsive 2-col → 1-col grid ── */}
          <div className="acc-grid">
            {/* ── Left Panel ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="acc-card" style={{ padding: "28px 20px 22px" }}>
                <Corners />
                <AvatarSection
                  profile={{
                    ...profile,
                    id: user.id,
                    first_name: firstName,
                    last_name: lastName,
                    tier,
                    team,
                    position,
                  }}
                  avatarUrl={avatarUrl}
                  onAvatarChange={setAvatarUrl}
                  showToast={showToast}
                />
              </div>

              <div className="acc-card" style={{ padding: "20px 18px" }}>
                <Corners />
                <p
                  className="acc-serif"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.35em",
                    color: "rgba(2,50,96,0.35)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}>
                  账户信息
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Email", value: user.email },
                    { label: "Position", value: positionLabel },
                    { label: "Tier", value: tier || "—" },
                    ...(!isHighBoard
                      ? [{ label: "Team", value: team || "—" }]
                      : []),
                    { label: "Faculty", value: faculty || "—" },
                    { label: "Level", value: level || "—" },
                  ].map((item) => (
                    <div key={item.label} className="acc-info-item">
                      <p
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.12em",
                          color: "rgba(2,50,96,0.4)",
                          textTransform: "uppercase",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#023260",
                          marginTop: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="acc-seal">
                  <div className="acc-seal-line-l" />
                  <div className="acc-seal-dot" />
                  <span className="acc-seal-text">IEEE SB</span>
                  <div className="acc-seal-dot" />
                  <div className="acc-seal-line-r" />
                </div>
              </div>
            </div>

            {/* ── Right Panel ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                className="acc-card"
                style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ display: "flex" }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`acc-tab ${activeTab === tab.id ? "active" : ""}`}
                      style={{
                        flex: 1,
                        borderBottom:
                          activeTab === tab.id
                            ? "2px solid #cc2233"
                            : "2px solid transparent",
                        borderLeft: "none",
                        borderRight: "none",
                        borderTop: "none",
                      }}>
                      <span
                        style={{
                          fontSize: 14,
                          color:
                            activeTab === tab.id
                              ? "#cc2233"
                              : "rgba(2,50,96,0.3)",
                        }}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                      <span
                        style={{
                          fontSize: 9,
                          color: "rgba(2,50,96,0.3)",
                          marginLeft: "auto",
                          fontFamily: "'Noto Serif SC', serif",
                          letterSpacing: "0.1em",
                        }}>
                        {tab.cnLabel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="acc-card" style={{ padding: "28px 28px 24px" }}>
                <Corners />

                {/* ── Profile Tab ── */}
                {activeTab === "profile" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                    }}>
                    <SectionHeader
                      title="Personal Information"
                      subtitle="— update your profile"
                      cnLabel="个人信息"
                    />

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 14,
                      }}>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            color: "rgba(2,50,96,0.45)",
                            textTransform: "uppercase",
                            marginBottom: 6,
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}>
                          First Name
                        </label>
                        <input
                          className="acc-input"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Ahmed"
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            color: "rgba(2,50,96,0.45)",
                            textTransform: "uppercase",
                            marginBottom: 6,
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}>
                          Last Name
                        </label>
                        <input
                          className="acc-input"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Mohamed"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(2,50,96,0.45)",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Email Address
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          className="acc-input"
                          value={user.email}
                          readOnly
                          style={{
                            paddingRight: 80,
                            opacity: 0.6,
                            cursor: "not-allowed",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: 9,
                            color: "#023260",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            border: "1px solid rgba(2,50,96,0.25)",
                            padding: "2px 7px",
                            borderRadius: 8,
                            fontFamily: "'Noto Serif SC', serif",
                          }}>
                          Verified
                        </span>
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(2,50,96,0.45)",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Phone Number
                      </label>
                      <input
                        className="acc-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 1XX XXX XXXX"
                        type="tel"
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(2,50,96,0.45)",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Date of Birth
                      </label>
                      <input
                        className="acc-input"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        max={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div
                      style={{
                        borderTop: "1px solid rgba(2,50,96,0.08)",
                        paddingTop: 16,
                      }}>
                      <p
                        className="acc-serif"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.35em",
                          color: "rgba(2,50,96,0.35)",
                          textTransform: "uppercase",
                          marginBottom: 12,
                        }}>
                        组织信息 · Organization
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 12,
                          }}>
                          <ReadOnlyField label="Faculty" value={faculty} />
                          <ReadOnlyField label="Level" value={level} />
                        </div>
                        {isHighBoard ? (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: 12,
                            }}>
                            <ReadOnlyField label="Tier" value={tier} />
                            <ReadOnlyField label="Position" value={position} />
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr 1fr",
                              gap: 12,
                            }}>
                            <ReadOnlyField label="Tier" value={tier} />
                            <ReadOnlyField label="Team" value={team} />
                            <ReadOnlyField label="Position" value={position} />
                          </div>
                        )}
                      </div>
                    </div>

                    <OrnamentDivider />

                    <button
                      onClick={handleSaveProfile}
                      disabled={saving}
                      className="acc-btn">
                      {saving ? (
                        <>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                              animation: "spin 0.8s linear infinite",
                            }}
                          />
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                )}

                {/* ── Security Tab ── */}
                {activeTab === "security" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                    }}>
                    <SectionHeader
                      title="Change Password"
                      subtitle="— min. 8 characters"
                      cnLabel="安全设置"
                    />

                    {newPassword && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}>
                        <div style={{ display: "flex", gap: 4 }}>
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="acc-strength-bar"
                              style={{
                                background:
                                  i <= pwStrength
                                    ? pwColors[pwStrength]
                                    : "#ffffff",
                              }}
                            />
                          ))}
                        </div>
                        <p
                          style={{
                            fontSize: 11,
                            color:
                              pwStrength >= 0
                                ? pwColors[pwStrength]
                                : "rgba(2,50,96,0.4)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}>
                          {pwStrength >= 0 ? pwLabels[pwStrength] : ""}
                        </p>
                      </div>
                    )}

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(2,50,96,0.45)",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        New Password
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          className="acc-input"
                          type={showPw ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="••••••••"
                          style={{ paddingRight: 52 }}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPw((p) => !p)}
                          style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: 11,
                            color: "rgba(2,50,96,0.5)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}>
                          {showPw ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(2,50,96,0.45)",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Confirm Password
                      </label>
                      <input
                        className={`acc-input${confirmPassword && confirmPassword !== newPassword ? " error" : ""}`}
                        type={showPw ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                      />
                      {confirmPassword && confirmPassword !== newPassword && (
                        <p
                          style={{
                            fontSize: 11,
                            color: "#cc2233",
                            marginTop: 4,
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}>
                          Passwords do not match
                        </p>
                      )}
                    </div>

                    <OrnamentDivider />

                    <button
                      onClick={handleChangePassword}
                      disabled={
                        saving ||
                        !newPassword ||
                        newPassword !== confirmPassword
                      }
                      className="acc-btn">
                      {saving ? (
                        <>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                              animation: "spin 0.8s linear infinite",
                            }}
                          />
                          Updating...
                        </>
                      ) : (
                        "Update Password"
                      )}
                    </button>

                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: 14,
                        border: "1px solid rgba(2,50,96,0.1)",
                        background: "#f5f8ff",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background:
                            "linear-gradient(90deg, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%)",
                        }}
                      />
                      <p
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.2em",
                          color: "rgba(2,50,96,0.4)",
                          textTransform: "uppercase",
                          marginBottom: 8,
                          fontFamily: "'Noto Serif SC', serif",
                        }}>
                        当前会话 · Current Session
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(2,50,96,0.6)",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Signed in as{" "}
                        <span style={{ color: "#023260", fontWeight: 500 }}>
                          {user.email}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "rgba(2,50,96,0.4)",
                          marginTop: 4,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}>
                        Last sign in:{" "}
                        {user.last_sign_in_at
                          ? new Date(user.last_sign_in_at).toLocaleString()
                          : "—"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="acc-seal">
                  <div className="acc-seal-line-l" />
                  <div className="acc-seal-dot" />
                  <span className="acc-seal-text">IEEE SB · 账户设置</span>
                  <div className="acc-seal-dot" />
                  <div className="acc-seal-line-r" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </>
  );
}
