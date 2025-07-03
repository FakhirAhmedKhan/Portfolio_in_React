import { useEffect, useCallback } from "react";

export default function NavBar() {
  const toggleNavLinks = useCallback(() => {
    const navLinks = document.querySelector(".nav-links");
    navLinks?.classList.toggle("active");

    // update aria-expanded
    const navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    }
  }, []);

  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    navToggle?.addEventListener("click", toggleNavLinks);

    return () => navToggle?.removeEventListener("click", toggleNavLinks);
  }, [toggleNavLinks]);

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
