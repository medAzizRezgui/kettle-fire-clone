import { Action, State } from "./CartState";

const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      const itemAdded = state.cartItem.find((e) => e.id === action.payload.id);
      if (itemAdded) {
        state.cartItem.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...state,
              cartItem: [
                ...state.cartItem,
                (item.amount += action.payload.amount),
              ],
            };
          }
        });
      }
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

// const [state, dispatch] = useReducer(cartReducer, defaultValue);
// const addItem = (cartItem: CartItem) => {
//   dispatch({
//     type: "add",
//     payload: cartItem,
//   });
// };
// const delItem = (id: number) => {
//   dispatch({
//     type: "delete",
//     payload: id,
//   });
// };

export default cartReducer;
