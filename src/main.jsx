import { PrimeReactProvider } from "primereact/api";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "primeicons/primeicons.css";
import "primereact/resources/themes/fluent-light/theme.css";

import "./index.css";
import theme from "./utils/theme.js";
import { MenuProvider } from "./context/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ThemeProvider value={theme}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ThemeProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
