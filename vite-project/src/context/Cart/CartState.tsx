import React, { createContext, useState } from "react";

export const CartContext = createContext(null);
const CartState: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState();

  const [price, setPrice] = useState<Number[]>([]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        price,
        setPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartState;
