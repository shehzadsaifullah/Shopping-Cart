import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const CartProvider = (props) => {
  const [itemName, setItemName] = useState();
  const [itemQuantity, setitemQuantity] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [total, setTotal] = useState();

  const setCartItemName = (name) => {
    setItemName(name);
  };

  const setCartItemQuantity = (quantity) => {
    setitemQuantity(quantity);
  };

  const setCartItemPrice = (price) => {
    setItemPrice(price);
  };
  const setTotalAmount = () => {
    setTotal(1000);
  };
  const cartContext = {
    cartitemName: itemName,
    cartitemQuantity: itemQuantity,
    cartItemPrice: itemPrice,
    totalAmount: total,
    setCartItemName: setCartItemName,
    setCartItemQuantity: setCartItemQuantity,
    setCartItemPrice: setCartItemPrice,
    setTotalAmount: setTotalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
