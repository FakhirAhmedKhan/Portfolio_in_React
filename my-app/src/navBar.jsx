import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Dialog } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navTextRef = useRef(null);

  useEffect(() => {
    if (!navTextRef.current) return;
    const typed = new Typed(navTextRef.current, {
      strings: ["Portfolio"],
      typeSpeed: 120,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const onHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-900/90 border-b border-white/10 shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1
          ref={navTextRef}
          className="text-2xl md:text-3xl font-extrabold text-white select-none"
        />
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative px-3 py-2 text-white font-semibold rounded hover:text-indigo-400 transition"
            >
              {name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 scale-x-0 hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-white focus:outline-none focus-visible:ring-2      focus-visible:ring-indigo-400"
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7"
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
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 md:hidden"
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
              transition={{ duration: 0.3 }}
              className="fixed top-0 inset-x-0 bg-slate-800 p-6 rounded-b-2xl shadow-2xl border-b border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-extrabold text-white">
                  Portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl"
                  aria-label="Close menu"
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
                      className="block px-4 py-2 text-white rounded hover:bg-indigo-500/20 transition"
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
