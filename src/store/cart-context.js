import React from "react";

const CartContext = React.createContext({
  cartitem: {
    cartItemname: "111",
    cartItemquantity: "",
    cartItemprice: "",
  },
  totalAmount: 10,
  setCartItem: () => {},
  setTotalAmount: () => {},
});

export default CartContext;
