import React, { StrictMode } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm";

import App from "./App.js"; // ← this should be line 5 or 6

const html = htm.bind(React.createElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  html`
    <${StrictMode}>
      <${App} />
    </${StrictMode}>
  `
);
