import tailwindcss from "tailwindcss"; // Correct import: import 'tailwindcss'
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss(), // Correct usage: call it as a function
    autoprefixer,
  ],
};
