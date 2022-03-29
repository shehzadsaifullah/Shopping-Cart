import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState();
  const addCardItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const setCartItems = (val) => {
    setItem(val);
  };

  const setTotalAmount = () => {
    setTotal(1000);
  };
  const cartContext = {
    cartitems: item,
    totalAmount: total,
    setCartItems: setCartItems,
    setTotalAmount: setTotalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
