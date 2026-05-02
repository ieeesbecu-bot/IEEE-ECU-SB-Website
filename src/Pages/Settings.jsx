import { useState } from "react";

// ─── Supabase note ────────────────────────────────────────────────
// Install: npm install @supabase/supabase-js
// import { supabase } from "@/lib/supabaseClient";   ← your supabase instance
//
// Fields that need a Supabase table:
//   Table: user_settings  (one row per user, linked by user_id = auth.uid())
//   Columns:
//     id uuid primary key default uuid_generate_v4()
//     user_id uuid references auth.users(id) on delete cascade
//     notif_events boolean default true
//     notif_reminder text default '1hr'   -- '1hr' | '1day' | 'off'
//     notif_news boolean default true
//     notif_new_member boolean default false
//     theme text default 'light'          -- 'light' | 'dark' | 'system'
//     language text default 'en'         -- 'en' | 'ar'
//     event_types text[] default '{workshops,seminars}'
//     calendar_sync boolean default false
//     profile_visibility text default 'public' -- 'public'|'members'|'private'
//     show_email boolean default true
//     show_activity boolean default true
//     linkedin text default ''
//     github text default ''
//     ieee_id text default ''
//     updated_at timestamptz default now()
//
// RLS: enable row-level security, policy: user can only read/write their own row.
// ─────────────────────────────────────────────────────────────────

const PRIMARY = "#023260";

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="relative inline-flex items-center flex-shrink-0 h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none"
      style={{ backgroundColor: value ? PRIMARY : "#cbd5e1" }}>
      <span
        className="inline-block w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
        style={{ transform: value ? "translateX(22px)" : "translateX(3px)" }}
      />
    </button>
  );
}

function PillGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150"
          style={
            value === opt.value
              ? {
                  backgroundColor: PRIMARY,
                  color: "#fff",
                  borderColor: PRIMARY,
                }
              : {
                  backgroundColor: "transparent",
                  color: "#64748b",
                  borderColor: "#e2e8f0",
                }
          }>
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function ChipGroup({ options, value, onChange }) {
  const toggle = (v) => {
    if (value.includes(v)) onChange(value.filter((x) => x !== v));
    else onChange([...value, v]);
  };
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((opt) => {
        const active = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150"
            style={
              active
                ? {
                    backgroundColor: "#eef2f8",
                    color: PRIMARY,
                    borderColor: PRIMARY,
                  }
                : {
                    backgroundColor: "transparent",
                    color: "#64748b",
                    borderColor: "#e2e8f0",
                  }
            }>
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function VisGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className="px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-150"
          style={
            value === opt.value
              ? {
                  backgroundColor: PRIMARY,
                  color: "#fff",
                  borderColor: PRIMARY,
                }
              : {
                  backgroundColor: "transparent",
                  color: "#64748b",
                  borderColor: "#e2e8f0",
                }
          }>
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function SectionCard({ icon, title, desc, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm w-full">
      <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-b border-slate-100">
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-sm sm:text-base flex-shrink-0"
          style={{ backgroundColor: "#eef2f8" }}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: PRIMARY }}>
            {title}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
        </div>
      </div>
      <div className="px-4 sm:px-5 divide-y divide-slate-100">{children}</div>
    </div>
  );
}

function Row({ label, sub, right }) {
  return (
    <div className="flex items-center justify-between py-3 sm:py-3.5 gap-3 sm:gap-4">
      <div className="min-w-0">
        <p className="text-xs sm:text-sm text-slate-700">{label}</p>
        {sub && (
          <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">{sub}</p>
        )}
      </div>
      <div className="flex-shrink-0">{right}</div>
    </div>
  );
}

function StackRow({ label, sub, children }) {
  return (
    <div className="py-3 sm:py-3.5">
      <p className="text-xs sm:text-sm text-slate-700">{label}</p>
      {sub && (
        <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">{sub}</p>
      )}
      {children}
    </div>
  );
}

function LinkedInput({ placeholder, value, onChange, prefix }) {
  return (
    <div className="flex items-center gap-2 mt-1.5">
      <span className="text-xs text-slate-400 hidden sm:inline">{prefix}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 w-full text-xs sm:text-sm border border-slate-200 rounded-lg px-2.5 sm:px-3 py-1.5 focus:outline-none focus:ring-2 focus:border-transparent"
        style={{ "--tw-ring-color": PRIMARY + "40" }}
      />
    </div>
  );
}

export default function SettingsPage() {
  const [notifEvents, setNotifEvents] = useState(true);
  const [notifReminder, setNotifReminder] = useState("1hr");
  const [notifNews, setNotifNews] = useState(true);
  const [notifNewMember, setNotifNewMember] = useState(false);

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const [eventTypes, setEventTypes] = useState(["workshops", "seminars"]);
  const [calendarSync, setCalendarSync] = useState(false);

  const [profileVisibility, setProfileVisibility] = useState("public");
  const [showEmail, setShowEmail] = useState(true);
  const [showActivity, setShowActivity] = useState(true);

  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [ieeeId, setIeeeId] = useState("");

  const [saved, setSaved] = useState(false);

  // TODO: replace with actual Supabase upsert:
  // const { data: { user } } = await supabase.auth.getUser();
  // await supabase.from("user_settings").upsert({
  //   user_id: user.id,
  //   notif_events: notifEvents, notif_reminder: notifReminder,
  //   notif_news: notifNews, notif_new_member: notifNewMember,
  //   theme, language, event_types: eventTypes,
  //   calendar_sync: calendarSync, profile_visibility: profileVisibility,
  //   show_email: showEmail, show_activity: showActivity,
  //   linkedin, github, ieee_id: ieeeId,
  //   updated_at: new Date().toISOString(),
  // }, { onConflict: "user_id" });
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-16 pt-24 pb-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1
            className="text-xl sm:text-2xl font-bold"
            style={{ color: PRIMARY }}>
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage your preferences for the ECU IEEE portal
          </p>
        </div>

        {/* Decorative banner */}
        <div
          className="rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 relative overflow-hidden"
          style={{ backgroundColor: PRIMARY }}>
          <span className="text-2xl sm:text-3xl opacity-80 select-none">
            🏮
          </span>
          <div>
            <p className="text-white text-xs sm:text-sm font-semibold">
              IEEE ECU Student Branch
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              Spring 2025 · Cairo, Egypt
            </p>
          </div>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl opacity-10 select-none">
            ⛩
          </span>
          <span className="absolute -top-6 right-20 w-20 h-20 rounded-full border-[10px] border-white/5 pointer-events-none" />
          <span className="absolute bottom-[-30px] right-5 w-14 h-14 rounded-full border-8 border-white/5 pointer-events-none" />
        </div>

        {/* Sections grid — 1 col on mobile, 2 cols on lg+ */}
        <div className="grid grid-cols-1 gap-5">
          {/* Notifications */}
          <SectionCard
            icon="🔔"
            title="Notification preferences"
            desc="Control what alerts you receive">
            <Row
              label="Event announcements"
              sub="Get notified when new events are posted"
              right={<Toggle value={notifEvents} onChange={setNotifEvents} />}
            />
            <Row
              label="Event reminder"
              sub="How early to remind you before an event"
              right={
                <PillGroup
                  value={notifReminder}
                  onChange={setNotifReminder}
                  options={[
                    { label: "1 hr", value: "1hr" },
                    { label: "1 day", value: "1day" },
                    { label: "Off", value: "off" },
                  ]}
                />
              }
            />
            <Row
              label="Branch news & updates"
              sub="Weekly digest from the student branch"
              right={<Toggle value={notifNews} onChange={setNotifNews} />}
            />
            <Row
              label="New member joins"
              sub="Notify when someone new joins the branch"
              right={
                <Toggle value={notifNewMember} onChange={setNotifNewMember} />
              }
            />
          </SectionCard>

          {/* Appearance */}
          <SectionCard
            icon="🎨"
            title="Appearance"
            desc="Display and theme preferences">
            <Row
              label="Theme"
              sub="Choose your portal appearance"
              right={
                <PillGroup
                  value={theme}
                  onChange={setTheme}
                  options={[
                    { label: "Light", value: "light" },
                    { label: "Dark", value: "dark" },
                    { label: "System", value: "system" },
                  ]}
                />
              }
            />
            <Row
              label="Language"
              sub="Portal display language"
              right={
                <PillGroup
                  value={language}
                  onChange={setLanguage}
                  options={[
                    { label: "English", value: "en" },
                    { label: "Arabic", value: "ar" },
                  ]}
                />
              }
            />
          </SectionCard>

          {/* Event preferences */}
          <SectionCard
            icon="📅"
            title="Event preferences"
            desc="Personalize what events you see">
            <StackRow
              label="Preferred event types"
              sub="We'll highlight these in your feed">
              <ChipGroup
                value={eventTypes}
                onChange={setEventTypes}
                options={[
                  { label: "Workshops", value: "workshops" },
                  { label: "Seminars", value: "seminars" },
                  { label: "Hackathons", value: "hackathons" },
                  { label: "Competitions", value: "competitions" },
                  { label: "Networking", value: "networking" },
                  { label: "Webinars", value: "webinars" },
                ]}
              />
            </StackRow>
            <Row
              label="Google Calendar sync"
              sub="Automatically add registered events to your calendar"
              right={<Toggle value={calendarSync} onChange={setCalendarSync} />}
            />
          </SectionCard>

          {/* Privacy */}
          <SectionCard
            icon="🔒"
            title="Privacy"
            desc="Control your visibility to other members">
            <StackRow
              label="Profile visibility"
              sub="Who can see your member profile">
              <VisGroup
                value={profileVisibility}
                onChange={setProfileVisibility}
                options={[
                  { label: "Public", value: "public" },
                  { label: "Members only", value: "members" },
                  { label: "Private", value: "private" },
                ]}
              />
            </StackRow>
            <StackRow
              label="Show email in member directory"
              sub="Other members can see your email">
              <VisGroup
                value={showEmail ? "yes" : "no"}
                onChange={(v) => setShowEmail(v === "yes")}
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
              />
            </StackRow>
            <Row
              label="Show activity on profile"
              sub="Events attended, resources downloaded"
              right={<Toggle value={showActivity} onChange={setShowActivity} />}
            />
          </SectionCard>

          {/* Integrations — spans full width */}
          <SectionCard icon="🔗" 
              icon="🔗"
              title="Integrations"
              desc="Connect your external profiles">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="sm:pr-5">
                  <StackRow
                    label="LinkedIn"
                    sub="Displayed on your member card">
                    <LinkedInput
                      prefix="linkedin.com/in/"
                      placeholder="your-username"
                      value={linkedin}
                      onChange={setLinkedin}
                    />
                  </StackRow>
                </div>
                <div className="sm:px-5">
                  <StackRow label="GitHub" sub="Show project contributions">
                    <LinkedInput
                      prefix="github.com/"
                      placeholder="your-username"
                      value={github}
                      onChange={setGithub}
                    />
                  </StackRow>
                </div>
                <div className="sm:pl-5">
                  <StackRow
                    label="IEEE membership ID"
                    sub="Link your global IEEE account">
                    <LinkedInput
                      prefix="ID:"
                      placeholder="e.g. 12345678"
                      value={ieeeId}
                      onChange={setIeeeId}
                    />
                  </StackRow>
                </div>
              </div>
            </SectionCard>
          
        </div>

        {/* Save button */}
        <div className="mt-6 sm:mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 active:scale-95"
            style={{ backgroundColor: PRIMARY }}>
            Save settings
          </button>
          {saved && (
            <span className="text-sm text-emerald-500 font-medium animate-pulse">
              ✓ Saved successfully
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
