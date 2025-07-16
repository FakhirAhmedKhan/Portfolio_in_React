import { motion as Motion } from "framer-motion";

const SKILLS = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Python" },
  { name: "Git" },
];

export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-center py-11 px-10 rounded-2xl">
      <Motion.h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
        About Me
      </Motion.h2>
      <Motion.p className="text-gray-200 mb-4 text-lg">
        Hi! I am a passionate <strong>full-stack</strong> web developer and
        designer dedicated to crafting engaging, user-friendly websites. I'm
        currently diving deeper into <strong>full-stack development</strong>
      </Motion.p>
      <Motion.div className="flex flex-wrap justify-center gap-4 mt-8">
        {SKILLS.map(({ name }) => (
          <SkillBadge key={name} name={name} />
        ))}
      </Motion.div>
    </section>
  );
}

const SkillBadge = ({ name }) => (
  <span className="flex items-center gap-2 bg-gray-900/80 text-white px-4 py-2 rounded-xl font-semibold text-base shadow hover:scale-110 transition-transform">
    <span
      className="inline-block w-[2px] h-[2px] bg-current rounded-full mr-2"
      aria-label={`${name}`}
    />
    {name}
  </span>
);
