export default function Footer() {
  return (
    // "fixed bottom-0" keeps it pinned to the screen regardless of scroll
    // "z-50" ensures it stays on top of other elements
    <footer className="fixed bottom-0 left-0 w-full  py-2 text-center text-xs text-zinc-800  backdrop-blur-sm ">
      © {new Date().getFullYear()} IEEE ECU Team. All rights reserved.
    </footer>
  );
}
