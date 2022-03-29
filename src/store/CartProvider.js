import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const CartProvider = (props) => {
  const addCardItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const [] = useState();

  const cartContext = {
    cartitems: "HELLO",
    totalAmount: 1000,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
