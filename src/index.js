import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AppContext } from "./context";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext>
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
        <StrictMode>
          <App />
          </StrictMode>
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>
  </AppContext>
);
