import React from "react";

const CartContext = React.createContext({
  cartitems: "",
  totalAmount: 10,
  setCartItems: () => {},
  setTotalAmount: () => {},
});

export default CartContext;
