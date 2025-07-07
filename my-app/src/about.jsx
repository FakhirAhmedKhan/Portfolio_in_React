import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML", color: "#e44d26" },
  { name: "CSS", color: "#264de4" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "React", color: "#61dafb" },
  { name: "Python", color: "#3776ab" },
  { name: "Git", color: "#f34f29" },
];

export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-center py-16 px-6 bg-white/5 rounded-2xl shadow-lg border border-white/10">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-200 mb-4 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi! I'm <strong>Fakhir Ahmed Khan</strong>, a passionate web developer
        and designer dedicated to crafting engaging, user-friendly websites. I'm
        currently diving deeper into <strong>full-stack development</strong> and
        sharpening my programming and design skills through hands-on projects.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {SKILLS.map(({ name, color }) => (
          <span
            key={name}
            className="flex items-center gap-2 bg-gray-900/80 text-white px-5 py-2 rounded-xl font-semibold text-base shadow hover:scale-110 transition-transform"
          >
            <span
              style={{
                display: "inline-block",
                width: 18,
                height: 18,
                borderRadius: 4,
                background: color,
              }}
              aria-label={name + " icon"}
            ></span>
            {name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
