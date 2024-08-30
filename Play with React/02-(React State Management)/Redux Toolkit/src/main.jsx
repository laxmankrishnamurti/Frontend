import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ProductSlice } from "./store/Products/ProductStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={ProductSlice}>
      <App />
    </Provider>
  </StrictMode>
);
