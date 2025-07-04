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
      <div className="nav-wrapper">
        <nav aria-label="Main Navigation">
          <div className="left">
            <span id="navText" aria-live="polite" aria-atomic="true"></span>
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="primary-navigation"
          >
            &#9776;
          </button>
          <ul className="nav-links" id="primary-navigation">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
