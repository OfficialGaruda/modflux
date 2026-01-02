import React, { StrictMode } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm";

import "./index.css";
import App from "./App.js";

const html = htm.bind(React.createElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  html`
    <${StrictMode}>
      <${App} />
    </${StrictMode}>
  `
);
