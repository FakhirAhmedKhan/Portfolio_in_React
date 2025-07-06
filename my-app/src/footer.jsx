import { motion } from "framer-motion";
import { useRef, useState } from "react";

const headingMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.7 },
};
const paragraphMotion = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.7, delay },
});
const formMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, delay: 0.4 },
};
const copyrightMotion = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.7, delay: 0.6 },
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (textareaRef.current) textareaRef.current.value = "";
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <footer className="py-12 px-5 text-center text-[#ddd] border-t border-white/10">
      <div className="container mx-auto max-w-lg">
        <motion.h2
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
          {...headingMotion}
        >
          Feedback
        </motion.h2>
        <motion.p
          className="font-sans text-base mb-5 text-[#ccc]"
          {...paragraphMotion(0.2)}
        >
          We'd love to hear what you think!
        </motion.p>
        <motion.form
          className="max-w-[500px] mx-auto mb-5"
          {...formMotion}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label htmlFor="feedback" className="sr-only">
            Your feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Your feedback..."
            required
            rows={5}
            aria-required="true"
            className="w-full p-3 rounded-md resize-none bg-[#2c2c2c] text-white text-base border border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            ref={textareaRef}
            disabled={submitted}
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-3 bg-[var(--primary-color)] text-[#222] rounded-md font-bold cursor-pointer border-0 transition-colors duration-300 hover:bg-[#ffc400] disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted}
            aria-disabled={submitted}
          >
            {submitted ? "Thank you!" : "SUBMIT"}
          </button>
        </motion.form>
        <motion.div className="space-y-1" {...copyrightMotion}>
          <p className="font-sans text-base mb-1 text-[#ccc]">
            © 2025 Fakhir Ahmed Khan. All rights reserved.
          </p>
          <p className="font-sans text-base text-[#ccc]">
            Thank you for visiting my portfolio.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
