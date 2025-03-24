import { createRoot } from "react-dom/client";
import "./App/styles/global.css";
import App from "./App/App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
