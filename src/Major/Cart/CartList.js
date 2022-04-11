import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Cartindi from "./Cartindi";

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
  console.log(cartListitems);
  /* <h3>Name: {name}</h3>
<h3>Quantity: {ctx.cartitem.cartItemquantity}</h3>
<h3>Price: {ctx.cartitem.cartItemprice}</h3>
<h3>Total: {total}</h3>

 <ul>
        {cartListitems.map((item) => (
          <li key={item.price}>{item.name}</li>
        ))}
      </ul>*/

  return (
    <div>
      <div>
        {cartListitems.map((item) => (
          <Cartindi item={item} />
        ))}
      </div>
      <div>
        <h3>Name: {name}</h3>
        <h3>Quantity: {quantity}</h3>
        <h3>Price: {price}</h3>
        <h3>Total: {total}</h3>
      </div>
    </div>
  );
};
export default Cartlist;
