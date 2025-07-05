import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-5 text-center text-[#ddd]  border-t border-white/10">
      <div className="container mx-auto max-w-lg">
        {/* Animate the heading */}
        <motion.h2
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Feedback
        </motion.h2>

        {/* Animate the description */}
        <motion.p
          className="font-sans text-base mb-5 text-[#ccc]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We'd love to hear what you think!
        </motion.p>

        {/* Animate the form */}
        <motion.form
          id="feedbackForm"
          className="max-w-[500px] mx-auto mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4 }}
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
          ></textarea>
          <button
            type="submit"
            id="subBtn"
            className="mt-3 px-6 py-3 bg-[var(--primary-color)] text-[#222] rounded-md font-bold cursor-pointer border-0 transition-colors duration-300 hover:bg-[#ffc400]"
          >
            SUBMIT
          </button>
        </motion.form>

        {/* Animate the copyright */}
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
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
