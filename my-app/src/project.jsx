import { useState, useMemo } from "react";
import { motion as Motion } from "framer-motion";

const WORKS = [
  {
    title: "📝 Circum Finder",
    link: "https://pi-program.vercel.app/",
    pra: "The Circumference Finder is a straightforward tool that calculates the circumference of a circle based on user input. By entering the radius or diameter.",
    codeLink: "https://github.com/FakhirAhmedKhan/PI-Program",
    img: "/portfolio_in_React/assets/Circum-Finder.avif",
  },
  {
    title: "🧾 Unit Converter",
    link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
    pra: "Temperature: Convert between Celsius (°C) and Fahrenheit (°F). Speed: Switch between Kilometers per hour, Miles per hour, Meters per second, and Knots.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Temperature-Converter-by-using-HTML--CSS-and-JaveScript",
    img: "/portfolio_in_React/assets/UnitConverter.avif",
  },
  {
    title: "⛅ Weather App",
    link: "https://weather-app-cyan-one-55.vercel.app/",
    pra: "The Weather App provides weather updates for any global location. It displays temperature, humidity, wind speed, and overall weather conditions.",
    codeLink: "https://github.com/FakhirAhmedKhan/Weather-App",
    img: "/portfolio_in_React/assets/Weather.avif",
  },
  {
    title: "🎞️ Netflix Clone",
    link: "https://netflix-clone-jade-beta.vercel.app/",
    pra: "The Netflix Clone replicates the core features of the popular streaming platform, offering easy navigation, real-time updates, and interactive tools. Built with a clean design and efficient performance.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Netflix-Clone-Using-HTML---CSS",
    img: "/portfolio_in_React/assets/Netflix.avif",
  },
  {
    title: "▶️ YouTube Clone",
    link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
    pra: "This YouTube Clone is a responsive web page that replicates the core features. Built with modern web technologies like HTML5, JavaScript, and CSS, it demonstrates handling video data and user interaction.",
    codeLink: "https://github.com/FakhirAhmedKhan/YouTube-Clone",
    img: "/portfolio_in_React/assets/YouTube.avif",
  },
  {
    title: "🗣️ Text-to-Speech",
    link: "https://text-to-speech-ruby-phi.vercel.app",
    pra: "This app converts written text into natural-sounding audio instantly. Supporting multiple languages and voices, it allows users to listen to any text on the go. Whether improving accessibility or creating audio content.",
    codeLink: "https://github.com/FakhirAhmedKhan/text-to-speech",
    img: "/portfolio_in_React/assets/Text-to-Speech.avif",
  },
  {
    title: "🛒 Amazon Clone",
    link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    pra: "Amazon Clone is a simple web made with JavaScript. It lets users view products, add them to a cart, and see the total. It's a good project to practice basic JavaScript and web skills.",
    codeLink: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    img: "/portfolio_in_React/assets/ammzon.avif",
  },
  {
    title: "🔢 Calculator",
    link: "https://calculator-alpha-one-55.vercel.app/",
    pra: "This Calculator App enables users to perform basic arithmetic operations such as addition, subtraction, and multiplication. It's easy to enter numbers and view results instantly.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Calculator-by-using-htmlc-css-or-js",
    img: "/portfolio_in_React/assets/Calculator.avif",
  },
  {
    title: "📝 Task_Tracker",
    link: "https://to-do-list-neon-six.vercel.app/",
    pra: "ToDo App is a simple and easy-to-use task manager that helps you organize your daily tasks. You can add and delete tasks. Whether it’s for school, work, or personal use, it keeps you focused.",
    codeLink: "https://github.com/FakhirAhmedKhan/ToDOList",
    img: "/portfolio_in_React/assets/TaskTracker.avif",
  },
  {
    title: "🐍 Python Basic Programs",
    link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    pra: "A collection of beginner-level Python programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
    codeLink: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    img: "/portfolio_in_React/assets/python.avif",
  },
  {
    title: "🐍 Basic Python Programs Part 2",
    link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    pra: "The second part of the beginner-level Python series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    img: "/portfolio_in_React/assets/python.avif",
  },
  {
    title: "🐍 Grading System in Python",
    link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    pra: "A simple Python program that calculates student grades based on their marks. It uses if/else statements to assign grades, helping users check their grades.",
    codeLink: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    img: "/portfolio_in_React/assets/python.avif",
  },
  {
    title: "🐍 Game in Python",
    link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    pra: "Word Guessing Game in Python is a fun terminal game where players guess letters to find the hidden word.",
    codeLink: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    img: "/portfolio_in_React/assets/python.avif",
  },
  {
    title: "🐍 Quiz in Python",
    link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    img: "/portfolio_in_React/assets/python.avif",
  },
  {
    title: "⚛️ /First React/",
    link: "https://github.com/FakhirAhmedKhan/First-React-Code/tree/main/First%20React",
    pra: "To set up React, install Node.js with npm. Then run npx create-react-app my-app in the terminal.folder with cd my-app and start.",
    codeLink: "https://github.com/FakhirAhmedKhan/First-React-Code",
    img: "/portfolio_in_React/assets/react.avif",
  },
  {
    title: "🎮 Rock, Paper, Scissors Game",
    link: "https://rock-three-umber.vercel.app/",
    pra: "The classic game allows players to test their luck against the computer. With instant results on choices, it's fun.",
    codeLink: "https://github.com/FakhirAhmedKhan/rock",
    img: "/portfolio_in_React/assets/Rock.avif",
  },
  {
    title: "🔳 QR Code Generator",
    link: "https://qr-generator-lilac-beta.vercel.app/",
    pra: "A simple tool that creates QR codes from data. Users enter data, and the app generates a scannable QR code.",
    codeLink: "https://github.com/FakhirAhmedKhan/QR-Generator",
    img: "/portfolio_in_React/assets/qr.avif",
  },
  {
    title: "⚛️ Calculator-in-React",
    link: "https://calculator-in-react-ten.vercel.app/",
    pra: "Calculator-in-React is a simple app built with React that performs basic math operations. It uses components and state to update results instantly. Great for beginners learning React.",
    codeLink: "https://github.com/FakhirAhmedKhan/Calculator-in-React",
    img: "/portfolio_in_React/assets/Calculator.avif",
  },
  {
    title: "💻Basic JavaScript Program",
    link: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    pra: "A collection of beginner-level JavaScrip programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    img: "/portfolio_in_React/assets/jspic.avif",
  },
  {
    title: "💻 Basic JavaScript Program part 2",
    link: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    pra: "The second part of the beginner-level JavaScript series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    img: "/portfolio_in_React/assets/jspic.avif",
  },
  {
    title: "💻 Quiz in JavaScript",
    link: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    img: "/portfolio_in_React/assets/quiz.avif",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ title, link, pra, codeLink, img }) => (
  <Motion.div
    className="bg-white/5 border border-white/10 rounded-xl p-5 shadow hover:shadow-2xl transition duration-300"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
  >
    <img
      src={img}
      alt={`${title} project screenshot`}
      className="rounded-lg w-full h-40 object-cover mb-3"
      loading="lazy"
    />
    <h3 className="text-lg font-bold text-yellow-400">{title}</h3>
    <p className="text-sm text-gray-300 mt-1">{pra}</p>
    <div className="flex gap-4 mt-3">
      <a
        href={link}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>
      <a
        href={codeLink}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
    </div>
  </Motion.div>
);

export default function Program() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleWorks = useMemo(
    () => WORKS.slice(0, visibleCount),
    [visibleCount]
  );

  return (
    <section className="w-full py-12 min-h-screen bg-gradient-to-b">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <Motion.h2
            className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2"
            variants={fadeInUp}
          >
            My Works
          </Motion.h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleWorks.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>

        {visibleCount < WORKS.length && (
          <div className="flex justify-center mt-10">
            <Motion.button
              onClick={() => setVisibleCount((v) => v + 3)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg shadow transition duration-200"
            >
              Load More
            </Motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
