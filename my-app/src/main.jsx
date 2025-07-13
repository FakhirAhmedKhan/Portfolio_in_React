import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./app";
import "@google/model-viewer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
