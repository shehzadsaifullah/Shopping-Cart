import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  const name = ctx.cartitems.cartItemname;
  const quantity = ctx.cartitems.cartItemquantity;
  const price = ctx.cartitems.cartItemprice;
  const total = ctx.totalAmount;
  // const itemNumbers = ctx.cartitem.reduce((curNumber, item) => {
  //   return curNumber + item.quantity;
  // }, 0);

  return (
    <div>
      <h3>Price: {name}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Price: {price}</h3>
      <h3>Total: {total}</h3>
    </div>
  );
};
export default Cartlist;
