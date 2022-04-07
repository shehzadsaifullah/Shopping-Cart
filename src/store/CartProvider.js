import CartContext from "./cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {
  const defaultObjectforContext = {
    cartItemname: "",
    cartItemquantity: "",
    cartItemprice: "",
  };
  const [item, setItem] = useState({});
  const [total, setTotal] = useState();

  const setCartItem = (name, quantity, price) => {
    setItem([
      ...item,
      { cartItemname: name, cartItemquantity: quantity, cartItemprice: price },
    ]);
  };

  const setTotalAmount = () => {
    setTotal(1000);
  };
  const cartContext = {
    cartitem: item,
    totalAmount: total,
    setCartItem: setCartItem,
    setTotalAmount: setTotalAmount,
  };
  // console.log(item);
  useEffect(() => {
    setItem(item);
  }, [item]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
