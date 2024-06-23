import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";

// import "./App.css";
import "./index.css";
import theme from "./utils/theme.js";
import { MenuProvider } from "./context/MenuContext.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <LoginProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
