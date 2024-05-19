import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext.jsx";
import { FilterContextProvider } from "./contexts/FilterContext.jsx";
import { CartContextProvider } from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartContextProvider>
      <AppContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AppContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
