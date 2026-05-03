import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FiltersContextProvider } from "./store/FiltersContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </StrictMode>,
);
