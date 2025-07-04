import { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    const typed1 = new Typed("#typed", {
      strings: ["Web Designer", "Web Developer"],
      typeSpeed: 80,
      backDelay: 1000,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <main id="home">
      <section className="firstSection flex flex-wrap items-center justify-center py-8 gap-[var(--gap)]">
        <div className="intro flex-[1_1_400px] text-center p-8 px-4">
          <span className="intro-text block text-[clamp(2rem,5vw,3rem)] text-white leading-[1.3]">
            Hi, I’m
            <span className="name text-[var(--primary-color)] font-bold">
              Fakhir Ahmed Khan
            </span>
          </span>
          <span className="block mt-2 font-medium text-[clamp(1.2rem,4vw,1.6rem)] text-[hsl(0,13%,95%)]">
            I’m a <span className="role"></span>
            <br />
            <span
              className="text-[clamp(2rem,5vw,3rem)] text-[#f4da34cd]"
              id="typed"
              aria-live="polite"
              aria-label="animated role description"
            ></span>
          </span>
        </div>
        <div className="rightSection flex-[1_1_350px]">
          <img
            src="./assets/homeImg.png"
            alt="Portrait of Fakhir Ahmed Khan"
            className="homeImg block w-[400px] h-auto rounded-[12px] ml-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
