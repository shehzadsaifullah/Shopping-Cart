import CartContext from "./cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {
  const a = {
    cartItemname: "",
    cartItemquantity: "",
    cartItemprice: "",
  };
  const [item, setItem] = useState({});
  // const [itemName, setItemName] = useState();
  // const [itemQuantity, setitemQuantity] = useState();
  // const [itemPrice, setItemPrice] = useState();
  const [total, setTotal] = useState();
  console.log();
  const setCartItem = (name, quantity, price) => {
    setItem(...item, {
      cartItemname: name,
      cartItemquantity: quantity,
      cartItemprice: price,
    });
    // setItemName(name);
    // setitemQuantity(quantity);
    // setItemPrice(price);
  };

  const setTotalAmount = () => {
    setTotal(1000);
  };
  const cartContext = {
    cartitems: item,
    totalAmount: 10000,
    setCartItem: setCartItem,
    setTotalAmount: setTotalAmount,
  };

  useEffect(() => {
    setItem(a);
  }, []);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
