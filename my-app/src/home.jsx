import { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import Typed from "typed.js";

const ROLES = ["Web Designer", "Web Developer"];

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: ROLES,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="flex flex-wrap items-center justify-center gap-8 px-4 py-16 min-h-screen md:flex-row">
      <Motion.div className="flex-1 min-w-[260px] text-center p-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Hi, I'm <span className="text-[#ffd700]">Fakhir Ahmed Khan</span>
        </h1>
        <p className="mt-2 text-xl sm:text-2xl text-yellow-200 font-medium">
          I'm a{" "}
          <span
            id="typed"
            aria-live="polite"
            aria-label="animated role description"
          />
        </p>
      </Motion.div>

      <Motion.div className="flex-1 min-w-[260px] max-w-[480px] w-full flex justify-center items-center">
        <model-viewer
          src="./assets/models/scene.gltf"
          ar
          ar-modes="scene-viewer webxr quick-look"
          auto-rotate
          camera-controls
          exposure="1"
          style={{ width: "100%", height: "450px", borderRadius: "1rem" }}
        />
      </Motion.div>
    </section>
  );
}
