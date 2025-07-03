import "./input.css";
import { useEffect } from "react";
import Typed from "typed.js";
import NavBar from "./navBar";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import Program from "./project";

function App() {
  // Typed.js setup
  useEffect(() => {
    const typed1 = new Typed("#typed", {
      strings: ["Web Designer", "Web Developer"],
      typeSpeed: 80,
      backDelay: 1000,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    const typed2 = new Typed("#navText", {
      strings: ["Portfolio"],
      typeSpeed: 150,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  // hamburger toggle
  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    const handleClick = () => {
      navLinks.classList.toggle("active");
    };

    navToggle?.addEventListener("click", handleClick);
    return () => {
      navToggle?.removeEventListener("click", handleClick);
    };
  }, []);

  // smoke trail
  useEffect(() => {
    const spawnSmoke = (e) => {
      const smoke = document.createElement("div");
      smoke.className = "smoke-particle";
      smoke.style.left = `${e.clientX}px`;
      smoke.style.top = `${e.clientY}px`;
      document.body.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1200);
    };

    document.addEventListener("mousemove", spawnSmoke);
    return () => document.removeEventListener("mousemove", spawnSmoke);
  }, []);

  return (
    <div className="app">
      <NavBar />

      <Home />

      <About />

      <Program />

      <Footer />
    </div>
  );
}

export default App;
