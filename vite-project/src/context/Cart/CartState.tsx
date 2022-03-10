import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
export type CartItemType = {
  name: string;
  amount: number;
  price: number;
  id: number;
};

export type CartItemContextType = {
  cartItems: CartItemType[];
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
  handleRemoveAllFromCart: (id: number) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const CartContext = createContext<CartItemContextType>(
  {} as CartItemContextType
);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle Adding an Item to the cart
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. Is the item already in cart ?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + clickedItem.amount }
            : item
        );
      }
      // 2. First Time the item is added
      return [...prev, { ...clickedItem, amount: clickedItem.amount }];
    });
  };

  // Handle Deleting an item from the cart
  const handleRemoveFromCart = (id: number): void => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  // Handle deleting all items with a chosen id
  const handleRemoveAllFromCart = (id: number): void => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
        handleRemoveAllFromCart,
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
