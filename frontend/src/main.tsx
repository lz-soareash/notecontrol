import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/themes.css";

import { carregarTema } from "./utils/theme/theme";

carregarTema();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <AuthProvider>

      <App />

    </AuthProvider>

  </React.StrictMode>
);