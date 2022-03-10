import type { ReactNode } from "react";
import React, { createContext, useContext, useReducer } from "react";

import { useDisclosure } from "@chakra-ui/react";
import CartReducer from "./CartReducer";
export type CartItemType = {
  name: string;
  amount: number;
  price: number;
  id: number;
};
type Init = {
  cartItems: CartItemType[];
};

const initialState: Init = {
  cartItems: [],
};
export type State = typeof initialState;

export type CartItemContextType = {
  items: CartItemType[];

  addItemToCart: (item: CartItemType) => void;
  addOneToCart: (id: number) => void;
  deleteAllFromCart: (id: number) => void;
  deleteOneFromCart: (id: number) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const CartContext = createContext<CartItemContextType>(
  {} as CartItemContextType
);

export function CounterProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItemToCart = (item: CartItemType) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
  const addOneToCart = (id: number) => {
    dispatch({
      type: "addOneToCart",
      payload: id,
    });
  };
  const deleteAllFromCart = (id: number) => {
    dispatch({
      type: "deleteAllFromCart",
      payload: id,
    });
  };
  const deleteOneFromCart = (id: number) => {
    dispatch({
      type: "deleteOneFromCart",
      payload: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        addOneToCart,
        deleteOneFromCart,
        deleteAllFromCart,
        items: state.cartItems,
        isOpen,
        onClose,
        onOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => {
  return useContext(CartContext);
};

// OLD FUNCTIONS FOR REFERENCE !
// Handle Adding an Item to the cart
// const handleAddToCart = (clickedItem: CartItemType) => {
//   setCartItems((prev) => {
//     // 1. Is the item already in cart ?
//     const isItemInCart = prev.find((item) => item.id === clickedItem.id);
//     if (isItemInCart) {
//       return prev.map((item) =>
//           item.id === clickedItem.id
//               ? { ...item, amount: item.amount + clickedItem.amount }
//               : item
//       );
//     }
//     // 2. First Time the item is added
//     return [...prev, { ...clickedItem, amount: clickedItem.amount }];
//   });
// };
// const handleAddOneToCart = (id: number) => {
//   setCartItems((prev) =>
//     prev.reduce((acc, item) => {
//       if (item.id === id) {
//         return [...acc, { ...item, amount: item.amount + 1 }];
//       } else {
//         return [...acc, item];
//       }
//     }, [] as CartItemType[])
//   );
// };
// // Handle Deleting an item from the cart
// const handleRemoveFromCart = (id: number): void => {
//   setCartItems((prev) =>
//     prev.reduce((acc, item) => {
//       if (item.id === id) {
//         if (item.amount === 1) return acc;
//         return [...acc, { ...item, amount: item.amount - 1 }];
//       } else {
//         return [...acc, item];
//       }
//     }, [] as CartItemType[])
//   );
// };
//
// // Handle deleting all items with a chosen id
// const handleRemoveAllFromCart = (id: number): void => {
//   setCartItems((prev) => prev.filter((item) => item.id !== id));
// };
