import React from "react";

const CartContext = React.createContext({
  cartitem: [],
  totalAmount: 0,
  setCartItem: () => {},
  setTotalAmount: () => {},
  removeCartItem: () => {},
  addCartItem: () => {},
});

export default CartContext;
