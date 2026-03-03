import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import Privacy from "./pages/Privacy";

createRoot(document.getElementById("root")!).render(<App />);
