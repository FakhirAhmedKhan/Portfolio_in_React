import { motion } from "framer-motion";

const SKILLS = [
  {
    name: "HTML",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>HTML</title>
        <rect width="20" height="20" rx="4" fill="#e44d26" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>CSS</title>
        <rect width="20" height="20" rx="4" fill="#264de4" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>JavaScript</title>
        <rect width="20" height="20" rx="4" fill="#f0db4f" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>React</title>
        <circle cx="10" cy="10" r="10" fill="#61dafb" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>Python</title>
        <rect width="20" height="20" rx="4" fill="#3776ab" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg aria-hidden="true" width="20" height="20" fill="currentColor">
        <title>Git</title>
        <rect width="20" height="20" rx="4" fill="#f34f29" />
      </svg>
    ),
  },
];

const skillClass =
  "bg-[linear-gradient(135deg,#2c3e50,#34495e)] text-[var(--primary-color)] px-5 py-2 rounded-[12px] font-semibold text-base cursor-default shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110 flex items-center gap-2";

const headingMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

const paragraphMotion = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, delay },
});

export default function About() {
  return (
    <div className="container about-section max-w-[var(--max-width)] text-center py-12 px-5">
      {/* Animate the heading */}
      <motion.h2
        id="about-heading"
        className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
        {...headingMotion}
      >
        About Me
      </motion.h2>
      {/* Animate the paragraph */}
      <motion.p className="font-sans mb-4" {...paragraphMotion(0.2)}>
        Hello! I'm <strong>Fakhir Ahmed Khan</strong>, a passionate web
        developer and designer dedicated to crafting engaging, user-friendly
        websites.
      </motion.p>
      <motion.p className="font-sans mb-6" {...paragraphMotion(0.4)}>
        I'm currently diving deeper into <strong>full-stack development</strong>{" "}
        and continuously sharpening my programming and design skills through
        hands-on projects and learning.
      </motion.p>
      <motion.h2
        className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
        {...headingMotion}
      >
        Skills I'm Learning
      </motion.h2>
      {/* Animate the skill tags with icons */}
      <motion.div
        className="skillsName flex flex-wrap justify-center gap-4 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {SKILLS.map(({ name, icon }) => (
          <span key={name} className={skillClass}>
            {icon}
            {name}
          </span>
        ))}
      </motion.div>
      <hr className="my-10 border-white/10" />
    </div>
  );
}
