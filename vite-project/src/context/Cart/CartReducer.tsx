import type { CartItemType, State } from "./CartState";

type Action = {
  type:
    | "addToCart"
    | "addOneToCart"
    | "deleteAllFromCart"
    | "deleteOneFromCart";
  payload: CartItemType | any;
};
const CartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addToCart": {
      const isItemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    amount: item.amount + action.payload.amount,
                    price: item.price + action.payload.price,
                  }
                : item
            ),
          ],
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, amount: action.payload.amount },
        ],
      };
    }

    case "addOneToCart": {
      return {
        ...state,
        cartItems: state.cartItems.reduce((acc, item) => {
          if (item.id === action.payload) {
            return [...acc, { ...item, amount: item.amount + 1 }];
          } else {
            return [...acc, item];
          }
        }, [] as CartItemType[]), // acc type
      };
    }
    case "deleteOneFromCart": {
      return {
        ...state,
        cartItems: state.cartItems.reduce((acc, item) => {
          if (item.id === action.payload) {
            if (item.amount === 1) return acc;
            return [...acc, { ...item, amount: item.amount - 1 }];
          } else {
            return [...acc, item];
          }
        }, [] as CartItemType[]), // acc type
      };
    }
    case "deleteAllFromCart": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
