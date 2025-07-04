import "./input.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import NavBar from "./navBar";
import Home from "./home";
import About from "./about";
import Program from "./project";
import Footer from "./footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Home />
    <About />
    <Program />
    <Footer />
  </StrictMode>
);
