import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Cartindi from "./Cartindi";
import React from "react";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const [cartListitems, setCartListitems] = useState([]);

  useEffect(() => {
    setCartListitems((oldcart) => {
      return [ctx.cartitem, ...oldcart];
    });
  }, [ctx.cartitem]);

  console.log(ctx.totalAmount);

  const additemHandler = (id) => {
    cartListitems.map((item) => {
      if (item.cartItemId === id) {
        //setCartListitems((oldcart) => {});
        const x = item.cartItemquantity + 1;
        console.log(x);
        ctx.setCartItem(
          item.cartItemId,
          item.cartItemname,
          x,
          item.cartItemprice
        );
      }
    });
  };

  return (
    <div>
      <div>{ctx.totalAmount}</div>
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
