import { motion } from "framer-motion";

export default function About() {
  const skillClass =
    "bg-[linear-gradient(135deg,#2c3e50,#34495e)] text-[var(--primary-color)] px-5 py-2 rounded-[12px] font-semibold text-base cursor-default shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110";

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container about-section max-w-[var(--max-width)] text-center py-12 px-5">
        {/* Animate the heading */}
        <motion.h2
          id="about-heading"
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Animate the paragraph */}
        <motion.p
          className="font-sans mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello! I'm <strong>Fakhir Ahmed Khan</strong>, a passionate web
          developer and designer dedicated to crafting engaging, user-friendly
          websites.
        </motion.p>

        <motion.p
          className="font-sans mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm currently diving deeper into{" "}
          <strong>full-stack development</strong> and continuously sharpening my
          programming and design skills through hands-on projects and learning.
        </motion.p>

        <motion.h2
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Skills I'm Learning
        </motion.h2>

        {/* Animate the skill tags */}
        <motion.div
          className="skillsName flex flex-wrap justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {["HTML", "CSS", "JavaScript", "React", "Python", "Git"].map(
            (skill) => (
              <span key={skill} className={skillClass}>
                {skill}
              </span>
            )
          )}
        </motion.div>
      </div>
      <hr />
    </section>
  );
}
