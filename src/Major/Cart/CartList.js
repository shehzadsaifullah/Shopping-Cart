import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const name = ctx.cartitem.cartItemname;
  const quantity = ctx.cartitem.cartItemquantity;
  const price = ctx.cartitem.cartItemprice;
  const total = ctx.totalAmount;

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Price: {price}</h3>
      <h3>Total: {total}</h3>
    </div>
  );
};
export default Cartlist;
