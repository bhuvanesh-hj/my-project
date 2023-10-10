import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ControlContextProvider from "./store/ControlContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ControlContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ControlContextProvider>
);
