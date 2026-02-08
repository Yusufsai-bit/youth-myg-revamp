import { ViteReactSSG } from "vite-react-ssg";
import routes from "./routes";
import "./index.css";

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes },
  // function to have custom setups (optional)
  ({ isClient }) => {
    // Client-side setup is handled by the routes
  }
);
