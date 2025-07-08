import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navTextRef = useRef(null);

  // Typed.js animation
  useEffect(() => {
    if (!navTextRef.current) return;
    const typed = new Typed(navTextRef.current, {
      strings: ["Portfolio"],
      typeSpeed: 120,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  // Trap focus inside modal when open
  useEffect(() => {
    if (!isOpen) return;

    const focusEls = () =>
      document.querySelectorAll(
        '.fixed.inset-0 [tabindex]:not([tabindex="-1"]), .fixed.inset-0 button, .fixed.inset-0 a'
      );

    const handleTab = (e) => {
      const els = focusEls();
      const [first, ...rest] = els;
      const last = rest.at(-1);

      if (e.key === "Tab") {
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Close menu on hash change
  useEffect(() => {
    const onHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Render nav links
  const navLinks = (props = {}) =>
    NAV_LINKS.map(({ name, href }) => (
      <a key={name} href={href} {...props}>
        {name}
        {props.children}
      </a>
    ));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 border-b border-white/10 shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl md:text-3xl font-extrabold text-white select-none">
          <span ref={navTextRef} />
        </div>
        <nav className="hidden md:flex gap-8">
          {navLinks({
            className:
              "relative px-3 py-2 text-white font-semibold rounded hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-400 transition",
            tabIndex: 0,
            children: (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 scale-x-0 hover:scale-x-100 transition-transform origin-left rounded-full" />
            ),
          })}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 focus-visible:ring-2 focus-visible:ring-indigo-400"
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
      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            className="fixed inset-0 z-50 md:hidden"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            static
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 bg-slate-800 p-6 rounded-b-2xl shadow-2xl border-b border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-extrabold text-white">
                  Portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl"
                  aria-label="Close menu"
                  tabIndex={0}
                >
                  &times;
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-base text-white rounded hover:bg-indigo-500/20 transition"
                      tabIndex={0}
                    >
                      {name}
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
