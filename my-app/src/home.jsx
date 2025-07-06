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
    <main id="home" className="w-full scroll-smooth">
      <section className="firstSection flex flex-wrap items-center justify-center py-20 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 md:gap-8 lg:gap-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="intro flex-1 min-w-[280px] sm:min-w-[350px] md:min-w-[400px] text-center p-4 sm:p-6 md:p-8"
        >
          <span className="intro-text block text-[clamp(1.5rem,6vw,3rem)] sm:text-[clamp(2rem,5vw,3rem)] text-white leading-[1.3]">
            Hi, I'm
            <span className="name text-[var(--primary-color)] font-bold block sm:inline">
              {" "}
              Fakhir Ahmed Khan
            </span>
          </span>
          <span className="block mt-2 font-medium text-[clamp(1rem,4vw,1.6rem)] sm:text-[clamp(1.2rem,4vw,1.6rem)] text-[hsl(0,13%,95%)]">
            I'm a{" "}
            <span
              className="text-[clamp(1.5rem,6vw,3rem)] sm:text-[clamp(2rem,5vw,3rem)] text-[#f4da34cd]"
              id="typed"
              ref={typedRef}
              aria-live="polite"
              aria-label="animated role description"
            ></span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="rightSection flex-1 min-w-[280px] sm:min-w-[320px] md:min-w-[350px] flex justify-center"
        >
          <img
            src="./assets/homeImg.png"
            alt="Portrait of Fakhir Ahmed Khan"
            className="homeImg block w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-[12px] mx-auto sm:ml-4 md:ml-6 lg:ml-10 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      </section>
    </main>
  );
}
