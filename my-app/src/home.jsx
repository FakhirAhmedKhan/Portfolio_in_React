import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const typedRef = useRef(null);
  const timeoutRef = useRef();

  useEffect(() => {
    const typedElement = typedRef.current;
    const strings = ["Web Designer", "Web Developer"];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const type = () => {
      const current = strings[stringIndex];

      if (isPaused) {
        isPaused = false;
        timeoutRef.current = setTimeout(type, 1000);
        return;
      }

      if (isDeleting) {
        charIndex--;
        typedElement.textContent = current.slice(0, charIndex);
        timeoutRef.current = setTimeout(type, charIndex === 0 ? 500 : 50);
        if (charIndex === 0) {
          isDeleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
        }
      } else {
        charIndex++;
        typedElement.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          isDeleting = true;
          isPaused = true;
        }
        timeoutRef.current = setTimeout(type, 80);
      }
    };

    type();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className="flex flex-wrap items-center justify-center gap-8 px-4 py-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 min-w-[260px] text-center p-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Hi, I'm <span className="text-[#ffd700]">Fakhir Ahmed Khan</span>
        </h1>
        <div className="mt-2 text-xl sm:text-2xl text-yellow-200 font-medium">
          I'm a{" "}
          <span
            id="typed"
            ref={typedRef}
            aria-live="polite"
            aria-label="animated role description"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex-1 min-w-[220px] flex justify-center items-center"
      >
        <img
          src="/portfolio_in_React/assets/hero.avif"
          alt="Portrait of Fakhir Ahmed Khan"
          className="block w-full max-w-[400px] rounded-xl mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          width={192}
          height={256}
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
