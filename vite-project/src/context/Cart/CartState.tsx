import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
export type CartItem = {
  name: string;
  amount: number;
  price: number;
  id: number;
};

export type CartItemContextType = {
  cartItems: CartItem[];
  handleAddToCart: (item: CartItem) => void;
  handleRemoveFromCart: (id: number) => void;
  handleRemoveAllFromCart: (id: number) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export type Action = {
  type: "add" | "delete";
  payload?: any;
};

export type Dispatch = (action: Action) => void;

const defaultValue = { cartItem: [] as CartItem[] };
export type State = typeof defaultValue;
const CartContext = createContext<CartItemContextType>(
  {} as CartItemContextType
);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAddToCart = (clickedItem: CartItem) => {
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
  const handleRemoveFromCart = (id: number): void => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItem[])
    );
  };
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
export const useCounter = () => {
  return useContext(CartContext);
};
