import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductsLayout from "./ProductsLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsLayout />
  </StrictMode>
);
