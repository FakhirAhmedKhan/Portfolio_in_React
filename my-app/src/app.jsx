// App.jsx
import NavBar from "./navBar";
import Home from "./home";
import About from "./about";
import Program from "./project";
import Footer from "./footer";

const COMPONENTS = [NavBar, Home, About, Program, Footer];

export default function App() {
  return COMPONENTS.map((Component, idx) => <Component key={idx} />);
}
