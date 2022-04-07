import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const name = ctx.cartitem.cartItemname;
  const quantity = ctx.cartitem.cartItemquantity;
  const price = ctx.cartitem.cartItemprice;
  const total = ctx.totalAmount;

  // const newListArray = [name, quantity, price];

  const [cartListitems, setCartListitems] = useState([]);

  console.log(cartListitems);
  useEffect(() => {
    setCartListitems((oldcart) => {
      return [ctx.cartitem, ...oldcart];
    });
  }, [ctx.cartitem]);

  /* <h3>Name: {name}</h3>
<h3>Quantity: {ctx.cartitem.cartItemquantity}</h3>
<h3>Price: {ctx.cartitem.cartItemprice}</h3>
<h3>Total: {total}</h3>*/

  return (
    <div>
      <ul>
        {cartListitems.map((item) => (
          <li key={item.price}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Cartlist;
