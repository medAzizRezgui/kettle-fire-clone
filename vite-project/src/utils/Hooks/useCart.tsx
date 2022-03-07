import { useContext } from "react";
import { CartContext } from "../../context/Cart/CartState";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
