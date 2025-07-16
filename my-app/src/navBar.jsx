import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import Typed from "typed.js";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const typedRef = useRef(null);

  // Initialize Typed.js
  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["Portfolio"],
      typeSpeed: 100,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  // Close mobile menu on hashchange
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const NavLinks = ({ onClick }) =>
    LINKS.map(({ name, href }) => (
      <a
        key={name}
        href={href}
        onClick={onClick}
        className="block px-4 py-2 text-white hover:text-indigo-400 hover:bg-indigo-500/20 rounded transition duration-200 md:p-0 md:hover:bg-transparent"
      >
        {name}
      </a>
    ));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo + Greeting */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <h1 className="text-2xl font-bold text-white select-none">
            <span ref={typedRef} />
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">{<NavLinks />}</nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-indigo-500/30 transition"
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
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-slate-800 p-6 rounded-b-xl shadow-lg md:hidden"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-white">Portfolio</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl leading-none"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-3">
            <NavLinks onClick={() => setIsOpen(false)} />
          </nav>
        </Motion.div>
      )}
    </header>
  );
}
