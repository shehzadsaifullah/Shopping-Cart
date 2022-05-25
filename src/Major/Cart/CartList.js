import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Cartindi from "./Cartindi";
import React from "react";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const name = ctx.cartitem.cartItemname;
  const quantity = ctx.cartitem.cartItemquantity;
  const price = ctx.cartitem.cartItemprice;
  const total = ctx.totalAmount;

  // const newListArray = [name, quantity, price];

  const [cartListitems, setCartListitems] = useState([]);

  useEffect(() => {
    setCartListitems((oldcart) => {
      return [ctx.cartitem, ...oldcart];
    });
  }, [ctx.cartitem]);

  // const additemHandler = (id) => {
  //   setCartListitems((oldcart) => {
  //     return oldcart.filter((item) => item.id !== id);
  //   });
  // };
  const additemHandler = (id) => {
    cartListitems.map((item) => {
      if (item.cartItemId === id) {
        setCartListitems((oldcart) => {});
      }
    });
  };

  return (
    <div>
      <div>
        {cartListitems.map((item) => (
          <Cartindi item={item} addButton={() => additemHandler(item.id)} />
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default Cartlist;
