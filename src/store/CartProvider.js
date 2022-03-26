import CartContext from "./CartContext";
import { useReducer } from "react";

const CartProvider = (props) => {
  const addCardItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    additem: addCardItemHandler,
    removeitem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
