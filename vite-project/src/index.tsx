import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
