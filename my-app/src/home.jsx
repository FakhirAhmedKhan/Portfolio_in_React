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
    <section className="flex flex-wrap items-center justify-center gap-8 px-4 py-16 min-h-screen md:flex-row">
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

      {/* 3D Model Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="flex-1 min-w-[260px] max-w-[480px] w-full flex justify-center items-center"
      >
        <model-viewer
          src="./assets/models/scene.gltf"
          alt="3D model of a robot"
          ar
          ar-modes="scene-viewer webxr quick-look"
          auto-rotate
          camera-controls
          exposure="1"
          className="w-full h-[450px] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] will-change-transform mt-4"
        ></model-viewer>
      </motion.div>
    </section>
  );
}
