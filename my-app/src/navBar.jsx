import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["Portfolio"],
      typeSpeed: 100,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 border-b border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1
          ref={typedRef}
          className="text-2xl font-bold text-white select-none"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white font-semibold hover:text-indigo-400 transition"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white p-2"
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down menu */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-slate-800 p-6 rounded-b-xl animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-white">Portfolio</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col gap-3">
              {LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-indigo-500/30 rounded transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
