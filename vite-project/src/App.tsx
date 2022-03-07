import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import React from "react";
import CartPage from "./Pages/CartPage";
import CartState from "./context/Cart/CartState";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CartState>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path={"/cart"} element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartState>
    </ChakraProvider>
  );
};

export default App;
