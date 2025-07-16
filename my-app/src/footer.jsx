import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (textareaRef.current) textareaRef.current.value = "";
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <Motion.footer className="py-12 px-5 text-center border-t border-white/10 bg-gradient-to-b ">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
          Feedback
        </h2>
        <p className="text-gray-300 mb-5">We'd love to hear what you think!</p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg mb-5"
        >
          <textarea
            ref={textareaRef}
            id="feedback"
            name="feedback"
            placeholder="Your feedback..."
            rows={4}
            required
            disabled={submitted}
            className="w-full p-3 rounded-lg bg-black/40 text-white border border-yellow-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={submitted}
            className="mt-4 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitted ? "Thank you!" : "SUBMIT"}
          </Motion.button>
        </form>

        <div className="text-sm text-gray-400 space-y-1">
          <p>© 2025 Fakhir Ahmed Khan. All rights reserved.</p>
          <p>Thank you for visiting my portfolio.</p>
        </div>
      </div>
    </Motion.footer>
  );
}
