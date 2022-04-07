import React from "react";

const CartContext = React.createContext({
  cartitem: [],
  totalAmount: 0,
  setCartItem: () => {},
  setTotalAmount: () => {},
});

export default CartContext;
