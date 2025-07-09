// App.jsx
import NavBar from "./navBar";
import Home from "./home";
import About from "./about";
import Program from "./project";
import Footer from "./footer";

export default function App() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Program />
      </section>
      <Footer />
    </>
  );
}
