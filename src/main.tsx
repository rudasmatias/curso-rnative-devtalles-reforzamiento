import React from "react";
import ReactDOM from "react-dom/client"; //en native no se usa
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
