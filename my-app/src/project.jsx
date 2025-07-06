import { useState, useEffect, useCallback, useMemo } from "react";

const SOCIALS = [
  {
    href: "https://github.com/FakhirAhmedKhan",
    img: "./assets/giticon.png",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/fakhirahmedkhan",
    img: "./assets/linkdenIcon.png",
    alt: "LinkedIn",
  },
];

const WORKS = [
  {
    title: "📝 Circum Finder",
    link: "https://pi-program.vercel.app/",
    pra: "The Circumference Finder is a straightforward tool that calculates the circumference of a circle based on user input. By entering the radius or diameter.",
    codeLink: "https://github.com/FakhirAhmedKhan/PI-Program",
    img: "./assets/Circum Finder.jpeg",
  },
  {
    title: "🧾 Unit Converter",
    link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
    pra: "Temperature: Convert between Celsius (°C) and Fahrenheit (°F). Speed: Switch between Kilometers per hour, Miles per hour, Meters per second, and Knots.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Temperature-Converter-by-using-HTML--CSS-and-JaveScript",
    img: "./assets/Unit Converter.jpeg",
  },
  {
    title: "⛅ Weather App",
    link: "https://weather-app-cyan-one-55.vercel.app/",
    pra: "The Weather App provides weather updates for any global location. It displays temperature, humidity, wind speed, and overall weather conditions.",
    codeLink: "https://github.com/FakhirAhmedKhan/Weather-App",
    img: "./assets/Weather App.jpeg",
  },
  {
    title: "🎞️ Netflix Clone",
    link: "https://netflix-clone-jade-beta.vercel.app/",
    pra: "The Netflix Clone replicates the core features of the popular streaming platform, offering easy navigation, real-time updates, and interactive tools. Built with a clean design and efficient performance.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Netflix-Clone-Using-HTML---CSS",
    img: "./assets/Netflix Clone.jpeg",
  },
  {
    title: "▶️ YouTube Clone",
    link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
    pra: "This YouTube Clone is a responsive web page that replicates the core features. Built with modern web technologies like HTML5, JavaScript, and CSS, it demonstrates handling video data and user interaction.",
    codeLink: "https://github.com/FakhirAhmedKhan/YouTube-Clone",
    img: "./assets/YouTube Clone.jpeg",
  },
  {
    title: "🗣️ Text-to-Speech",
    link: "https://text-to-speech-ruby-phi.vercel.app",
    pra: "This app converts written text into natural-sounding audio instantly. Supporting multiple languages and voices, it allows users to listen to any text on the go. Whether improving accessibility or creating audio content.",
    codeLink: "https://github.com/FakhirAhmedKhan/text-to-speech",
    img: "./assets/Text-to-Speech.jpeg",
  },
  {
    title: "🛒 Amazon Clone",
    link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    pra: "Amazon Clone is a simple web made with JavaScript. It lets users view products, add them to a cart, and see the total. It's a good project to practice basic JavaScript and web skills.",
    codeLink: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
    img: "./assets/ammzon.jpeg",
  },
  {
    title: "🔢 Calculator",
    link: "https://calculator-alpha-one-55.vercel.app/",
    pra: "This Calculator App enables users to perform basic arithmetic operations such as addition, subtraction, and multiplication. It's easy to enter numbers and view results instantly.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/Calculator-by-using-htmlc-css-or-js",
    img: "./assets/Calculator.jpeg",
  },
  {
    title: "📝 Task_Tracker",
    link: "https://to-do-list-neon-six.vercel.app/",
    pra: "ToDo App is a simple and easy-to-use task manager that helps you organize your daily tasks. You can add and delete tasks. Whether it’s for school, work, or personal use, it keeps you focused.",
    codeLink: "https://github.com/FakhirAhmedKhan/ToDOList",
    img: "./assets/Task Teacker.jpeg",
  },
  {
    title: "🐍 Python Basic Programs",
    link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    pra: "A collection of beginner-level Python programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
    codeLink: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
    img: "./assets/python.jfif",
  },
  {
    title: "🐍 Basic Python Programs Part 2",
    link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    pra: "The second part of the beginner-level Python series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
    img: "./assets/python.jfif",
  },
  {
    title: "🐍 Grading System in Python",
    link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    pra: "A simple Python program that calculates student grades based on their marks. It uses if/else statements to assign grades, helping users check their grades.",
    codeLink: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
    img: "./assets/python.jfif",
  },
  {
    title: "🐍 Game in Python",
    link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    pra: "Word Guessing Game in Python is a fun terminal game where players guess letters to find the hidden word.",
    codeLink: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
    img: "./assets/python.jfif",
  },
  {
    title: "🐍 Quiz in Python",
    link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink:
      "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
    img: "./assets/python.jfif",
  },
  {
    title: "⚛️ /First React/",
    link: "https://github.com/FakhirAhmedKhan/First-React-Code/tree/main/First%20React",
    pra: "To set up React, install Node.js with npm. Then run npx create-react-app my-app in the terminal.folder with cd my-app and start.",
    codeLink: "https://github.com/FakhirAhmedKhan/First-React-Code",
    img: "./assets/react.png",
  },
  {
    title: "🎮 Rock, Paper, Scissors Game",
    link: "https://rock-three-umber.vercel.app/",
    pra: "The classic game allows players to test their luck against the computer. With instant results on choices, it's fun.",
    codeLink: "https://github.com/FakhirAhmedKhan/rock",
    img: "./assets/Rock.jpeg",
  },
  {
    title: "🔳 QR Code Generator",
    link: "https://qr-generator-lilac-beta.vercel.app/",
    pra: "A simple tool that creates QR codes from data. Users enter data, and the app generates a scannable QR code.",
    codeLink: "https://github.com/FakhirAhmedKhan/QR-Generator",
    img: "./assets/qr.jpeg",
  },
  {
    title: "⚛️ Calculator-in-React",
    link: "https://calculator-in-react-ten.vercel.app/",
    pra: "Calculator-in-React is a simple app built with React that performs basic math operations. It uses components and state to update results instantly. Great for beginners learning React.",
    codeLink: "https://github.com/FakhirAhmedKhan/Calculator-in-React",
    img: "./assets/Calculator.jpeg",
  },
  {
    title: "💻Basic JavaScript Program",
    link: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    pra: "A collection of beginner-level JavaScrip programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
    img: "./assets/jspic.jpeg",
  },
  {
    title: "💻 Basic JavaScript Program part 2",
    link: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    pra: "The second part of the beginner-level JavaScript series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
    codeLink: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
    img: "./assets/jspic.jpeg",
  },
  {
    title: "💻 Quiz in JavaScript",
    link: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    codeLink: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
    img: "./assets/jspic.jpeg",
  },
];

function ProjectCard({ item, index, isVisible, hovered, setHovered }) {
  return (
    <div
      className={`bg-[var(--card-bg)] rounded-[var(--radius)] p-4 sm:p-6 lg:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-500 backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] hover:bg-[var(--card-hover-bg)] hover:translate-y-[-8px] hover:scale-[1.03] hover:shadow-[0_16px_32px_rgba(255,215,0,0.3)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100 + 300}ms` }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      tabIndex={0}
      aria-label={item.title}
    >
      <h3 className="text-center text-[var(--primary-color)] font-serif mb-3 font-semibold text-[clamp(1.2rem,3vw,1.8rem)]">
        {item.title}
      </h3>
      <div className="relative overflow-hidden rounded-[10px] mb-3">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            hovered === index ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3">
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-[var(--primary-color)]"
        >
          🔗 View Work
        </a>
        <a
          href={item.codeLink}
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-[var(--primary-color)]"
        >
          💻 Source Code
        </a>
      </div>
      <p className="text-gray-300 text-sm">{item.pra}</p>
    </div>
  );
}

export default function Program() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // intersection observer animation
  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const loadMore = useCallback(() => setVisibleCount((prev) => prev + 6), []);

  // Memoize visible works for performance
  const visibleWorks = useMemo(
    () => WORKS.slice(0, visibleCount),
    [visibleCount]
  );

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* header section */}
        <article
          className={`text-center py-6 sm:py-8 px-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="works-heading"
            className="font-serif text-[clamp(1.8rem,5vw,3rem)] text-[var(--primary-color)] mb-4 sm:mb-6 font-semibold"
          >
            My Works
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my portfolio, showcasing works that reflect my skills.
          </p>
        </article>

        {/* social icons */}
        <div
          className={`flex justify-center gap-6 sm:gap-8 my-6 sm:my-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SOCIALS.map(({ href, img, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <img
                src={img}
                alt={alt}
                className="w-8 sm:w-10 lg:w-12 group-hover:scale-125 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        {/* projects grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 py-4 sm:py-6 lg:py-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleWorks.map((item, index) => (
            <ProjectCard
              key={item.title}
              item={item}
              index={index}
              isVisible={isVisible}
              hovered={hoveredCard}
              setHovered={setHoveredCard}
            />
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < WORKS.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
