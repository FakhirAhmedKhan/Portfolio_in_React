import { useEffect } from "react";
import Typed from "typed.js";

export default function NavBar() {
  useEffect(() => {
    // Typed.js animation
    const typed2 = new Typed("#navText", {
      strings: ["Portfolio"],
      typeSpeed: 150,
      loop: false,
      showCursor: false,
    });

    // Hamburger toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    const handleClick = () => {
      navLinks?.classList.toggle("active");
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    };

    navToggle?.addEventListener("click", handleClick);

    // cleanup
    return () => {
      typed2.destroy();
      navToggle?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header>
      <div className="nav-wrapper flex justify-center p-[1.5px] rounded-[30px] w-fit mx-auto mt-[22px] shadow-[0_0_12px_rgba(255,255,255,0.2)] custom-nav-wrapper">
        <nav
          aria-label="Main Navigation"
          className="flex justify-between items-center rounded-[30px] h-[60px] px-8 shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] custom-nav-bg"
        >
          <div className="left inline-block min-w-[140px] max-w-screen overflow-hidden whitespace-nowrap text-2xl font-bold mt-1 text-white tracking-[0.5px] transition-colors duration-300 animate-textScroll">
            <span id="navText" aria-live="polite" aria-atomic="true"></span>
          </div>
          <button
            className="nav-toggle hidden bg-none border-none text-2xl text-white cursor-pointer mr-4"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="primary-navigation"
          >
            &#9776;
          </button>
          <ul
            className="nav-links list-none flex gap-10 m-0 p-0"
            id="primary-navigation"
          >
            <li className="relative px-6 py-7 text-base font-semibold text-white no-underline rounded-xl transition-colors duration-300 hover:text-indigo-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              <a href="#home">Home</a>
            </li>
            <li className="relative px-6 py-7 text-base font-semibold text-white no-underline rounded-xl transition-colors duration-300 hover:text-indigo-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              <a href="#about">About</a>
            </li>
            <li className="relative px-6 py-7 text-base font-semibold text-white no-underline rounded-xl transition-colors duration-300 hover:text-indigo-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
