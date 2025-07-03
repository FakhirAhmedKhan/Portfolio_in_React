export default function Footer() {
  return (
    //
    <footer className="py-10 px-5 text-center text-[#ddd] ">
      <div className="container mx-auto max-w-lg">
        <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--primary-color)] mb-3 font-semibold">
          Feedback
        </h2>
        <p className="font-sans text-base mb-5 text-[#ccc]">
          We'd love to hear what you think!
        </p>
        <form id="feedbackForm" className="max-w-[500px] mx-auto mb-5">
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
            className="w-full h-[80px] p-3 rounded-md resize-none bg-[#2c2c2c] text-white text-base border border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          ></textarea>
          <button
            type="submit"
            id="subBtn"
            className="btn mt-2.5 px-5 py-2.5 bg-[var(--primary-color)] text-[#222] rounded-md font-bold cursor-pointer border-0 transition-colors duration-300 hover:bg-[#ffc400]"
          >
            SUBMIT
          </button>
        </form>
        <p className="font-sans text-base mb-2 text-[#ccc]">
          © 2025 Fakhir Ahmed Khan. All rights reserved.
        </p>
        <p className="font-sans text-base text-[#ccc]">
          Thank you for visiting my portfolio
        </p>
      </div>
    </footer>
  );
}
