import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      const currentString = strings[stringIndex];

      if (isPaused) {
        isPaused = false;
        timeoutRef.current = setTimeout(type, 1000);
        return;
      }

      if (isDeleting) {
        charIndex--;
        typedElement.textContent = currentString.slice(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
          timeoutRef.current = setTimeout(type, 500);
        } else {
          timeoutRef.current = setTimeout(type, 50);
        }
      } else {
        charIndex++;
        typedElement.textContent = currentString.slice(0, charIndex);
        if (charIndex === currentString.length) {
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
    <section className="flex flex-wrap items-center justify-center py-8 px-4 gap-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 min-w-[260px] text-center p-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Hi, I'm{" "}
          <span className="text-[var(--primary-color)]">Fakhir Ahmed Khan</span>
        </h1>
        <div className="mt-2 text-xl sm:text-2xl text-yellow-200 font-medium">
          I'm a{" "}
          <span
            id="typed"
            ref={typedRef}
            aria-live="polite"
            aria-label="animated role description"
          ></span>
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
          className="homeImg block w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-[12px] mx-auto sm:ml-4 md:ml-6 lg:ml-10 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          width={192}
          height={256}
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
