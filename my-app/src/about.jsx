export default function About() {
  const skillClass =
    "bg-[linear-gradient(135deg,#2c3e50,#34495e)] text-[var(--primary-color)] px-5 py-2 rounded-[12px] font-semibold text-base cursor-default shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-[var(--transition)]";

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container about-section max-w-[var(--max-width)] text-center py-8 px-5">
        <h2
          id="about-heading"
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
        >
          About Me
        </h2>
        <p className="font-sans mb-4">
          Hello! I'm <strong>Fakhir Ahmed Khan</strong>, a passionate web
          developer and designer dedicated to crafting engaging, user-friendly
          websites.
        </p>
        <p className="font-sans mb-6">
          I'm currently diving deeper into
          <strong> full-stack development</strong> and continuously sharpening
          my programming and design skills through hands-on projects and
          learning.
        </p>

        <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold">
          Skills I'm Learning
        </h2>

        <div className="skillsName flex flex-wrap justify-center gap-4 mt-4">
          {["HTML", "CSS", "JavaScript", "React", "Python", "Git"].map(
            (skill) => (
              <span key={skill} className={skillClass}>
                {skill}
              </span>
            )
          )}
        </div>
      </div>
      <hr />
    </section>
  );
}
