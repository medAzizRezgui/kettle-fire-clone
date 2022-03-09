import { useReducer, useContext, createContext } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  name: string;
  amount: number;
  price: number;
  id: number;
};

export type CartItemContextType = {
  cartItems: CartItem[];
  addItem: (todo: CartItem) => void;
  delItem: (id: number) => void;
};
export type Action = {
  type: "add" | "delete";
  payload?: any;
};

export type Dispatch = (action: Action) => void;

const defaultValue = { cartItem: [] as CartItem[] };
export type State = typeof defaultValue;
const CartContext = createContext<CartItemContextType | null>(null);

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "delete":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, defaultValue);
  const addItem = (cartItem: CartItem) => {
    dispatch({
      type: "add",
      payload: cartItem,
    });
  };
  const delItem = (id: number) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };
  return (
    <CartContext.Provider
      value={{ addItem, cartItems: state.cartItem, delItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCounter = () => {
  const context = useContext(CartContext);
  if (!context) throw Error("useCounter must be used inside a CounterProvider");
  return context;
};
