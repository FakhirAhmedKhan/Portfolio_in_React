import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navTextRef = useRef(null);
  useEffect(() => {
    if (navTextRef.current) {
      const typed = new Typed(navTextRef.current, {
        strings: ["Portfolio"],
        typeSpeed: 120,
        showCursor: false,
      });
      return () => typed.destroy();
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur bg-gradient-to-b from-slate-900/90 to-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Typed logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wide select-none">
          <span ref={navTextRef} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 text-white font-semibold rounded transition hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 scale-x-0 hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            className="fixed inset-0 z-50 md:hidden"
            open={isOpen} // Add this line
            onClose={() => setIsOpen(false)}
          >
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur"
            />

            {/* sliding panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-b-2xl shadow-2xl border-b border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-extrabold text-white">
                  Portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl focus:outline-none"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-lg font-semibold text-white rounded hover:bg-indigo-400/20 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
