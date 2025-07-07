import { useRef, useState } from "react";

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
    <footer className="py-12 px-5 text-center border-t border-white/10 bg-gradient-to-b from-transparent">
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
          Feedback
        </h2>
        <p className="text-gray-300 mb-5">We'd love to hear what you think!</p>
        <form
          className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg mb-5"
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
            rows={4}
            aria-required="true"
            className="w-full p-3 rounded-lg resize-none bg-black/40 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ref={textareaRef}
            disabled={submitted}
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-lg font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted}
            aria-disabled={submitted}
          >
            {submitted ? "Thank you!" : "SUBMIT"}
          </button>
        </form>
        <div className="text-gray-400 text-sm space-y-1">
          <p>© 2025 Fakhir Ahmed Khan. All rights reserved.</p>
          <p>Thank you for visiting my portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
