import { useState, useEffect, useRef, useCallback } from "react";
import ChineesImage from "../assets/About/stunning-chinese-environment-landscape.jpg";
import { supabase } from "../supabaseClient";
import { useAuth } from "../Context/AuthContext";

const STORAGE_BUCKET = "ieee-media";

const canUserPost = (profile) => {
  if (!profile) return false;
  const tier = (profile.tier || "").toLowerCase();
  const team = (profile.team || "").toLowerCase();
  const role = (profile.role || "").toLowerCase();
  if (role === "admin") return true;
  if (tier === "high board") return true;
  if (tier === "board" && team === "media") return true;
  return false;
};

const getAnonId = () => {
  try {
    let id = localStorage.getItem("ieee_anon_id");
    if (!id) {
      id = "anon_" + Math.random().toString(36).slice(2) + Date.now();
      localStorage.setItem("ieee_anon_id", id);
    }
    return id;
  } catch {
    return "anon_fallback";
  }
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
const isImage = (url) => /\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(url);

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .tl-root { font-family: 'Noto Sans SC', sans-serif; }
  .tl-serif { font-family: 'Noto Serif SC', serif; }

  .tl-card {
    background: #fff;
    border: 1px solid rgba(2,50,96,0.08);
    border-radius: 18px;
    box-shadow: 0 1px 3px rgba(2,50,96,0.06), 0 4px 12px rgba(2,50,96,0.04);
    transition: box-shadow 0.2s, transform 0.2s;
    overflow: hidden;
    margin-bottom: 14px;
  }
  .tl-card:hover {
    box-shadow: 0 4px 20px rgba(2,50,96,0.1);
    transform: translateY(-1px);
  }
  .tl-card-top {
    height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%, #cc2233 100%);
  }

  .tl-composer {
    background: rgba(255,253,248,0.92);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(2,50,96,0.12);
    border-radius: 18px;
    box-shadow: 0 2px 0 #cc2233, 0 4px 16px rgba(2,50,96,0.08);
    padding: 14px 16px;
    margin-bottom: 14px;
    position: relative;
    overflow: hidden;
  }
  .tl-composer::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%, #cc2233 100%);
  }

  .tl-search {
    background: rgba(255,253,248,0.92);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(2,50,96,0.12);
    border-radius: 999px;
    box-shadow: 0 1px 8px rgba(2,50,96,0.06);
    padding: 10px 18px;
    margin-bottom: 5px;
    display: flex; align-items: center; gap: 10px;
  }
  .tl-search input {
    flex: 1; background: transparent; border: none; outline: none;
    font-family: 'Noto Sans SC', sans-serif; font-size: 13px; color: #023260;
  }
  .tl-search input::placeholder { color: rgba(2,50,96,0.3); }

  .tl-like-btn {
    display: flex; align-items: center; gap: 6px;
    padding: 5px 14px; border-radius: 999px; font-size: 12px; font-weight: 500;
    border: 1px solid rgba(2,50,96,0.15); cursor: pointer; transition: all 0.15s;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-like-btn.liked {
    background: #fff0f0; border-color: #f5c0c5; color: #cc2233;
  }
  .tl-like-btn:not(.liked) {
    background: transparent; color: #6a8aaa;
  }
  .tl-like-btn:not(.liked):hover { background: #f5f8ff; }

  .tl-comment-btn {
    font-size: 12px; font-weight: 600; cursor: pointer;
    transition: color 0.15s; border: none; background: none; padding: 0;
    font-family: 'Noto Sans SC', sans-serif;
  }

  .tl-comment-input {
    flex: 1; background: transparent; border: none; outline: none;
    font-size: 12px; color: #023260; font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-comment-input::placeholder { color: rgba(2,50,96,0.3); }

  .tl-comment-box {
    flex: 1; display: flex; align-items: center; gap: 8px;
    background: #f5f8ff; border: 1px solid rgba(2,50,96,0.1);
    border-radius: 999px; padding: 6px 14px;
  }

  .tl-guest-input {
    width: 100%; background: #f5f8ff;
    border: 1px solid rgba(2,50,96,0.1); border-radius: 999px;
    padding: 6px 14px; font-size: 12px; color: #023260; outline: none;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-guest-input::placeholder { color: rgba(2,50,96,0.3); }

  .tl-modal-backdrop {
    position: fixed; inset: 0; background: rgba(1,20,40,0.6);
    backdrop-filter: blur(6px); z-index: 50;
    display: flex; align-items: center; justify-content: center; padding: 16px;
  }
  .tl-modal {
    background: #fffdf8;
    border: 1px solid rgba(2,50,96,0.12);
    border-radius: 24px;
    padding: 24px;
    width: 100%; max-width: 480px;
    box-shadow: 0 2px 0 #cc2233, 0 20px 60px rgba(1,20,40,0.3);
    max-height: 90vh; overflow-y: auto;
    position: relative;
  }
  .tl-modal::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #cc2233 0%, #cc2233 33%, #023260 33%, #023260 66%, #cc2233 66%, #cc2233 100%);
    border-radius: 24px 24px 0 0;
  }

  .tl-modal-input {
    width: 100%; border: 1px solid rgba(2,50,96,0.15); border-radius: 12px;
    padding: 10px 14px; font-size: 13px; color: #023260; outline: none;
    background: #f5f8ff; transition: border-color 0.2s;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-modal-input::placeholder { color: rgba(2,50,96,0.3); }
  .tl-modal-input:focus { border-color: #023260; background: #fff; }

  .tl-btn-primary {
    width: 100%; padding: 11px; border-radius: 12px; font-size: 13px; font-weight: 700;
    letter-spacing: 0.06em; border: none; cursor: pointer;
    font-family: 'Noto Serif SC', serif;
    transition: all 0.2s; background: #023260; color: #fff;
    box-shadow: 0 3px 12px rgba(2,50,96,0.25);
  }
  .tl-btn-primary:hover { background: #012040; transform: translateY(-1px); }
  .tl-btn-primary:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; transform: none; box-shadow: none; }

  .tl-btn-secondary {
    flex: 1; padding: 10px; border-radius: 12px; font-size: 13px; font-weight: 600;
    border: 1px solid rgba(2,50,96,0.15); color: #6a8aaa; background: transparent;
    cursor: pointer; transition: all 0.2s; font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-btn-secondary:hover { background: #f5f8ff; }

  .tl-drop-zone {
    border: 1.5px dashed rgba(2,50,96,0.2); border-radius: 12px;
    padding: 14px; text-align: center; cursor: pointer; transition: all 0.2s;
    font-size: 12px; color: rgba(2,50,96,0.4);
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-drop-zone:hover { border-color: #cc2233; color: #cc2233; background: #fff5f5; }

  .tl-ornament { display: flex; align-items: center; gap: 8px; }
  .tl-ornament-line { flex: 1; height: 1px; background: rgba(2,50,96,0.1); }
  .tl-ornament-dot  { width: 4px; height: 4px; border-radius: 50%; background: #cc2233; opacity: 0.5; }

  .tl-divider { height: 1px; background: rgba(2,50,96,0.06); margin: 12px 0 10px; }

  /* hero text */
  .tl-hero-title {
    font-family: 'Noto Serif SC', serif;
    font-size: clamp(22px, 4vw, 32px);
    font-weight: 700; color: #fff;
    text-shadow: 0 2px 20px rgba(0,0,0,0.4);
    line-height: 1.35; text-align: center;
  }
  .tl-hero-sub {
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 11px; letter-spacing: 0.4em;
    color: rgba(255,255,255,0.55); margin-bottom: 10px;
    text-transform: uppercase;
  }

  /* menu */
  .tl-menu {
    position: absolute; right: 0; top: 36px; width: 144px;
    background: #fff; border-radius: 14px;
    box-shadow: 0 4px 20px rgba(2,50,96,0.12);
    border: 1px solid rgba(2,50,96,0.08);
    overflow: hidden; z-index: 20;
  }
  .tl-menu-item {
    display: flex; align-items: center; gap: 8px;
    width: 100%; padding: 10px 14px; font-size: 12px;
    background: none; border: none; cursor: pointer;
    transition: background 0.15s; font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-menu-item:hover { background: #f5f8ff; }
  .tl-menu-item.danger { color: #cc2233; }
  .tl-menu-item.danger:hover { background: #fff5f5; }

  /* IEEE badge */
  .tl-ieee-badge {
    width: 40px; height: 40px; border-radius: 50%;
    background: #023260; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Noto Serif SC', serif; font-size: 9px;
    font-weight: 700; letter-spacing: 0.05em; flex-shrink: 0;
  }

  /* Lightbox */
  .tl-lightbox {
    position: fixed; inset: 0; z-index: 100;
    background: rgba(0,0,0,0.92);
    display: flex; align-items: center; justify-content: center;
  }

  /* Seal */
  .tl-seal {
    display: flex; align-items: center; gap: 6px; opacity: 0.3; margin-top: 12px;
  }
  .tl-seal-line-l { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #023260); }
  .tl-seal-line-r { flex: 1; height: 1px; background: linear-gradient(90deg, #023260, transparent); }
  .tl-seal-dot { width: 3px; height: 3px; border-radius: 50%; background: #cc2233; }
  .tl-seal-text { font-family: 'Noto Serif SC', serif; font-size: 8px; color: #023260; letter-spacing: 0.15em; }

  @keyframes tlReveal {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .tl-reveal { animation: tlReveal 0.5s cubic-bezier(0.16,1,0.3,1) both; }
`;

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [images.length, onClose]);

  return (
    <div className="tl-lightbox" onClick={onClose}>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "#fff",
          fontSize: 28,
          background: "none",
          border: "none",
          cursor: "pointer",
          lineHeight: 1,
        }}>
        ×
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIdx((i) => (i - 1 + images.length) % images.length);
            }}
            style={{
              position: "absolute",
              left: 16,
              color: "#fff",
              fontSize: 32,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}>
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIdx((i) => (i + 1) % images.length);
            }}
            style={{
              position: "absolute",
              right: 16,
              color: "#fff",
              fontSize: 32,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}>
            ›
          </button>
        </>
      )}
      <img
        src={images[idx]}
        alt=""
        style={{
          maxHeight: "90vh",
          maxWidth: "90vw",
          objectFit: "contain",
          borderRadius: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      />
      {images.length > 1 && (
        <div
          style={{ position: "absolute", bottom: 5, display: "flex", gap: 6 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: i === idx ? "#fff" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Avatars ───────────────────────────────────────────────────────────────────
function IEEEAvatar({ size = 40 }) {
  return (
    <div
      className="tl-ieee-badge"
      style={{ width: size, height: size, fontSize: size < 36 ? 8 : 9 }}>
      IEEE
    </div>
  );
}

function UserAvatar({ name = "?", avatarUrl, size = 28 }) {
  if (avatarUrl)
    return (
      <img
        src={avatarUrl}
        alt={name}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    );
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const palette = ["#023260", "#cc2233", "#0a6640", "#b87820", "#5a3a9a"];
  const bg = palette[name.charCodeAt(0) % palette.length];
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.35,
        fontWeight: 700,
        flexShrink: 0,
        fontFamily: "'Noto Sans SC', sans-serif",
      }}>
      {initials}
    </div>
  );
}

function FileIcon({ url }) {
  const ext = url?.split(".").pop()?.toLowerCase() || "";
  const map = {
    pdf: "📄",
    doc: "📝",
    docx: "📝",
    ppt: "📊",
    pptx: "📊",
    xls: "📈",
    xlsx: "📈",
    zip: "🗜️",
    mp4: "🎬",
    mov: "🎬",
  };
  return <span style={{ fontSize: 22 }}>{map[ext] || "📎"}</span>;
}

// ── Media grid ────────────────────────────────────────────────────────────────
function MediaGrid({ files }) {
  const [lightbox, setLightbox] = useState(null);
  if (!files || files.length === 0) return null;
  const images = files.filter(isImage);
  const others = files.filter((f) => !isImage(f));

  return (
    <>
      <div style={{ marginTop: 10 }}>
        {images.length > 0 && (
          <div
            style={{
              display: "grid",
              gap: 3,
              borderRadius: 12,
              overflow: "hidden",
              gridTemplateColumns:
                images.length === 1
                  ? "1fr"
                  : images.length === 2
                    ? "1fr 1fr"
                    : "1fr 1fr 1fr",
            }}>
            {images.slice(0, 3).map((src, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: images.length === 1 ? "16/9" : "1/1",
                }}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {i === 2 && images.length > 3 && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(1,20,40,0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "'Noto Serif SC', serif",
                    }}>
                    +{images.length - 3}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {others.length > 0 && (
          <div
            style={{
              marginTop: 6,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
            {others.map((url, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(2,50,96,0.1)",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#f5f8ff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }>
                <FileIcon url={url} />
                <span
                  style={{
                    fontSize: 12,
                    color: "#4a6a8a",
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  {decodeURIComponent(
                    url.split("/").pop()?.split("?")[0] || "File",
                  )}
                </span>
                <span style={{ fontSize: 12, color: "rgba(2,50,96,0.3)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
      {lightbox !== null && (
        <Lightbox
          images={images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

// ── Comments ──────────────────────────────────────────────────────────────────
function CommentsSection({ postId, visitorId, currentProfile }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [guestName, setGuestName] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isLoggedIn = !!currentProfile;

  const fetchComments = async () => {
    const { data } = await supabase
      .from("ieee_comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });
    if (data) setComments(data);
  };

  useEffect(() => {
    if (expanded) fetchComments();
  }, [expanded]);

  const handleSubmit = async () => {
    if (!text.trim() || (!isLoggedIn && !guestName.trim())) return;
    setLoading(true);
    const displayName = isLoggedIn
      ? currentProfile.full_name || currentProfile.first_name || "Member"
      : guestName.trim();
    const { error } = await supabase.from("ieee_comments").insert({
      post_id: postId,
      author_id: visitorId,
      author_name: displayName,
      content: text.trim(),
    });
    if (!error) {
      setText("");
      setGuestName("");
      await fetchComments();
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: 6 }}>
      <button
        className="tl-comment-btn"
        onClick={() => setExpanded((v) => !v)}
        style={{ color: expanded ? "#023260" : "#9ca3af" }}>
        {expanded
          ? "Hide comments"
          : `View comments${comments.length > 0 ? ` (${comments.length})` : ""}`}
      </button>

      {expanded && (
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
          {comments.length === 0 && (
            <p
              style={{
                fontSize: 11,
                color: "rgba(2,50,96,0.3)",
                textAlign: "center",
                padding: "6px 0",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}>
              No comments yet. Be the first!
            </p>
          )}
          {comments.map((c) => (
            <div
              key={c.id}
              style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <UserAvatar name={c.author_name || "?"} size={26} />
              <div
                style={{
                  flex: 1,
                  background: "#f5f8ff",
                  borderRadius: 14,
                  padding: "7px 12px",
                }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#023260",
                    fontFamily: "'Noto Serif SC', serif",
                  }}>
                  {c.author_name || "Member"}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "#4a6a8a",
                    marginTop: 2,
                    lineHeight: 1.5,
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}>
                  {c.content}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 4,
            }}>
            {!isLoggedIn && (
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Your name..."
                className="tl-guest-input"
              />
            )}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <UserAvatar
                name={
                  isLoggedIn
                    ? currentProfile.full_name || "M"
                    : guestName || "?"
                }
                avatarUrl={currentProfile?.avatar_url}
                size={26}
              />
              <div className="tl-comment-box">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Write a comment..."
                  className="tl-comment-input"
                />
                <button
                  onClick={handleSubmit}
                  disabled={
                    !text.trim() ||
                    loading ||
                    (!isLoggedIn && !guestName.trim())
                  }
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#023260",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    opacity:
                      !text.trim() ||
                      loading ||
                      (!isLoggedIn && !guestName.trim())
                        ? 0.3
                        : 1,
                    fontFamily: "'Noto Serif SC', serif",
                  }}>
                  {loading ? "..." : "Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditPostModal({ post, onClose, onSave }) {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!content.trim()) return;
    setLoading(true);
    const { error, data } = await supabase
      .from("ieee_posts")
      .update({ title: title || null, content })
      .eq("id", post.id)
      .select()
      .single();
    if (!error && data) onSave(data);
    setLoading(false);
    onClose();
  };

  return (
    <div
      className="tl-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="tl-modal tl-reveal">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}>
          <IEEEAvatar size={40} />
          <div>
            <p
              className="tl-serif"
              style={{ fontWeight: 700, fontSize: 14, color: "#023260" }}>
              Edit Post
            </p>
            <p
              style={{
                fontSize: 11,
                color: "rgba(2,50,96,0.4)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}>
              IEEE Student Branch
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: "auto",
              fontSize: 22,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(2,50,96,0.3)",
              lineHeight: 1,
            }}>
            ×
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="tl-modal-input"
          />
          <textarea
            placeholder="What's happening..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="tl-modal-input"
            style={{ resize: "none" }}
          />
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button onClick={onClose} className="tl-btn-secondary">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!content.trim() || loading}
            className="tl-btn-primary"
            style={{ flex: 1, width: "auto" }}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Post Card ─────────────────────────────────────────────────────────────────
function PostCard({
  post,
  onLike,
  onDelete,
  onEdit,
  visitorId,
  currentProfile,
  canPost,
}) {
  const liked = post.likes?.includes(visitorId);
  const isOwner = currentProfile && post.author_id === currentProfile.id;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [postData, setPostData] = useState(post);
  const menuRef = useRef();

  useEffect(() => {
    const h = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const handleDelete = async () => {
    if (!window.confirm("Delete this post?")) return;
    setMenuOpen(false);
    onDelete(post.id);
  };

  return (
    <>
      <div className="tl-card tl-reveal">
        <div className="tl-card-top" />
        <div style={{ padding: "14px 16px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}>
            <IEEEAvatar size={38} />
            <div style={{ flex: 1 }}>
              <p
                className="tl-serif"
                style={{ fontWeight: 700, fontSize: 13, color: "#023260" }}>
                IEEE Student Branch
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(2,50,96,0.4)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                }}>
                {formatDate(postData.created_at)} ·{" "}
                {formatTime(postData.created_at)}
              </p>
            </div>
            {isOwner && (
              <div style={{ position: "relative" }} ref={menuRef}>
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: 18,
                    color: "rgba(2,50,96,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.15s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "rgba(2,50,96,0.06)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "none")
                  }>
                  ⋯
                </button>
                {menuOpen && (
                  <div className="tl-menu">
                    <button
                      className="tl-menu-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setShowEdit(true);
                      }}>
                      ✏️ Edit
                    </button>
                    <button
                      className="tl-menu-item danger"
                      onClick={handleDelete}>
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {postData.title && (
            <h3
              className="tl-serif"
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#023260",
                marginBottom: 6,
              }}>
              {postData.title}
            </h3>
          )}
          <p
            style={{
              fontSize: 13,
              color: "#4a6a8a",
              lineHeight: 1.65,
              whiteSpace: "pre-wrap",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}>
            {postData.content}
          </p>
          <MediaGrid files={postData.images || []} />

          <div className="tl-divider" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}>
            <button
              onClick={() => onLike(postData.id)}
              className={`tl-like-btn${liked ? " liked" : ""}`}>
              <span>{liked ? "❤️" : "🤍"}</span>
              <span>{(postData.likes || []).length}</span>
            </button>
            <span
              style={{
                fontSize: 11,
                color: "rgba(2,50,96,0.3)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}>
              💬 {postData.comments_count || 0}
            </span>
          </div>
          <CommentsSection
            postId={postData.id}
            visitorId={visitorId}
            currentProfile={currentProfile}
          />

          <div className="tl-seal">
            <div className="tl-seal-line-l" />
            <div className="tl-seal-dot" />
            <span className="tl-seal-text">IEEE SB</span>
            <div className="tl-seal-dot" />
            <div className="tl-seal-line-r" />
          </div>
        </div>
      </div>
      {showEdit && (
        <EditPostModal
          post={postData}
          onClose={() => setShowEdit(false)}
          onSave={(u) => {
            setPostData(u);
            onEdit(u);
          }}
        />
      )}
    </>
  );
}

// ── Upload helper ─────────────────────────────────────────────────────────────
async function uploadFile(file, userId) {
  const ext = file.name.split(".").pop();
  const path = `posts/${userId}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// ── Add Post Modal ────────────────────────────────────────────────────────────
function AddPostModal({ onClose, onSubmit, currentUser }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const handleFiles = (selected) => {
    const arr = Array.from(selected);
    setFiles((prev) => [...prev, ...arr]);
    setPreviews((prev) => [
      ...prev,
      ...arr.map((f) =>
        f.type.startsWith("image/") ? URL.createObjectURL(f) : null,
      ),
    ]);
  };
  const removeFile = (i) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
    setPreviews((prev) => prev.filter((_, idx) => idx !== i));
  };
  const handleSubmit = async () => {
    if (!content.trim()) return;
    setLoading(true);
    setUploading(files.length > 0);
    let uploadedUrls = [];
    try {
      uploadedUrls = await Promise.all(
        files.map((f) => uploadFile(f, currentUser.id)),
      );
    } catch (err) {
      console.error("Upload error:", err);
    }
    setUploading(false);
    await onSubmit({ title, content, images: uploadedUrls });
    setLoading(false);
    onClose();
  };

  return (
    <div
      className="tl-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="tl-modal tl-reveal">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}>
          <IEEEAvatar size={40} />
          <div>
            <p
              className="tl-serif"
              style={{ fontWeight: 700, fontSize: 14, color: "#023260" }}>
              IEEE Student Branch
            </p>
            <p
              style={{
                fontSize: 11,
                color: "rgba(2,50,96,0.4)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}>
              New post
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: "auto",
              fontSize: 22,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(2,50,96,0.3)",
              lineHeight: 1,
            }}>
            ×
          </button>
        </div>

        <div className="tl-ornament" style={{ marginBottom: 14 }}>
          <div className="tl-ornament-line" />
          <div className="tl-ornament-dot" />
          <div
            className="tl-ornament-dot"
            style={{ background: "rgba(2,50,96,0.2)" }}
          />
          <div className="tl-ornament-dot" />
          <div className="tl-ornament-line" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 12,
          }}>
          <input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="tl-modal-input"
          />
          <textarea
            placeholder="What's happening in the team? Share an update, event, or moment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="tl-modal-input"
            style={{ resize: "none" }}
          />
        </div>

        <div
          className="tl-drop-zone"
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
          }}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4,.mov"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
          📎 Click or drag & drop — images, PDFs, docs, videos...
        </div>

        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              margin: "10px 0",
            }}>
            {files.map((f, i) => (
              <div key={i} style={{ position: "relative" }}>
                {previews[i] ? (
                  <img
                    src={previews[i]}
                    alt=""
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 10,
                      border: "1px solid rgba(2,50,96,0.1)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      background: "#f5f8ff",
                      borderRadius: 10,
                      border: "1px solid rgba(2,50,96,0.1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}>
                    <FileIcon url={f.name} />
                    <span style={{ fontSize: 8, color: "rgba(2,50,96,0.4)" }}>
                      {f.name.split(".").pop()?.toUpperCase()}
                    </span>
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(i);
                  }}
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#023260",
                    color: "#fff",
                    border: "none",
                    fontSize: 11,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!content.trim() || loading}
          className="tl-btn-primary"
          style={{ marginTop: 6 }}>
          {uploading
            ? "Uploading files..."
            : loading
              ? "Sharing..."
              : "Share Post"}
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function IEEETimeline() {
  const { user: currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [visitorId] = useState(() => getAnonId());
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!currentUser) {
      setCurrentProfile(null);
      return;
    }
    supabase
      .from("profiles")
      .select("*")
      .eq("id", currentUser.id)
      .single()
      .then(({ data }) => {
        if (data) setCurrentProfile(data);
      });
  }, [currentUser?.id]);

  const canPost = canUserPost(currentProfile);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("ieee_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("fetchPosts error:", error.message);
      else setPosts(data || []);
    } catch (err) {
      console.error("fetchPosts exception:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    const channel = supabase
      .channel("ieee_posts_rt")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "ieee_posts" },
        (payload) => {
          setPosts((prev) => {
            if (prev.find((p) => p.id === payload.new.id)) return prev;
            return [payload.new, ...prev];
          });
        },
      )
      .subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  const handleAddPost = async ({ title, content, images }) => {
    if (!currentUser) return;
    const newPost = {
      author_id: currentUser.id,
      author_role: currentProfile?.role || "member",
      title: title || null,
      content,
      images,
      likes: [],
      comments_count: 0,
    };
    const { error, data } = await supabase
      .from("ieee_posts")
      .insert([newPost])
      .select()
      .single();
    if (!error && data)
      setPosts((prev) => {
        if (prev.find((p) => p.id === data.id)) return prev;
        return [data, ...prev];
      });
    else if (error) console.error("Insert error:", error.message);
  };

  const handleLike = async (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (!post) return;
    const liked = post.likes?.includes(visitorId);
    const newLikes = liked
      ? post.likes.filter((id) => id !== visitorId)
      : [...(post.likes || []), visitorId];
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: newLikes } : p)),
    );
    await supabase
      .from("ieee_posts")
      .update({ likes: newLikes })
      .eq("id", postId);
  };

  const handleDelete = async (postId) => {
    await supabase.from("ieee_posts").delete().eq("id", postId);
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  const handleEdit = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p)),
    );
  };

  const filteredPosts = search.trim()
    ? posts.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(search.toLowerCase()) ||
          (p.content || "").toLowerCase().includes(search.toLowerCase()),
      )
    : posts;

  return (
    <>
      <style>{styles}</style>

      <div
        className="tl-root"
        style={{ minHeight: "100vh", background: "#f0ece4" }}>
        {/* Hero — background image fixed, loads fast with eager */}
        <div
          style={{
            position: "fixed",
            height: "90vh",
            width: "100%",
            overflow: "hidden",
            top: 0,
            left: 0,
            zIndex: 0,
          }}>
          <img
            src={ChineesImage}
            alt=""
            loading="eager"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              willChange: "transform",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(240,236,228,1) 100%)",
            }}
          />
          {/* Hero text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 90,
            }}>
            <p className="tl-hero-sub">二〇二五 · IEEE Student Branch</p>
            <h1 className="tl-hero-title">
              Discover what's happening
              <br />
              in our community.
            </h1>
            {/* Hero divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 10,
              }}>
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "rgba(255,255,255,0.35)",
                }}
              />
              <span style={{ color: "rgba(204,34,51,0.7)", fontSize: 11 }}>
                ❖
              </span>
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "rgba(255,255,255,0.35)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Feed */}
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "0 16px 80px",
            paddingTop: 330,
            position: "relative",
            zIndex: 10,
          }}>
          {/* Search */}
          <div className="tl-search">
            <span style={{ color: "rgba(2,50,96,0.3)", fontSize: 16 }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts..."
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(2,50,96,0.3)",
                  fontSize: 18,
                  lineHeight: 1,
                }}>
                ×
              </button>
            )}
          </div>

          {/* Composer */}
          {canPost && (
            <div className="tl-composer">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IEEEAvatar size={36} />
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    flex: 1,
                    textAlign: "left",
                    background: "rgba(2,50,96,0.05)",
                    border: "1px solid rgba(2,50,96,0.1)",
                    borderRadius: 999,
                    padding: "9px 18px",
                    fontSize: 12,
                    color: "rgba(2,50,96,0.4)",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "rgba(2,50,96,0.08)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "rgba(2,50,96,0.05)")
                  }>
                  Share something with the team...
                </button>
              </div>
            </div>
          )}

          {/* Posts */}
          {loading ? (
            <div
              style={{
                textAlign: "center",
                color: "rgba(2,50,96,0.4)",
                padding: "60px 0",
                fontSize: 13,
                fontFamily: "'Noto Sans SC', sans-serif",
              }}>
              Loading posts...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "rgba(2,50,96,0.35)",
                padding: "16px 0",
                fontSize: 13,
                fontFamily: "'Noto Serif SC', serif",
              }}>
              {search
                ? `No posts found for "${search}"`
                : "No posts yet. 暂无内容"}
            </div>
          ) : (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                onDelete={handleDelete}
                onEdit={handleEdit}
                visitorId={visitorId}
                currentProfile={currentProfile}
                canPost={canPost}
              />
            ))
          )}
        </div>
      </div>

      {showModal && (
        <AddPostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
          currentUser={currentUser}
        />
      )}
    </>
  );
}
