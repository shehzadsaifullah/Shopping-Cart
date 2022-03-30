import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const ctx = useContext(CartContext);

  // const totalItems = ctx.cartitems.reduce((curNumber, item) => {
  //   return curNumber + item.quantity;
  // }, 0);
  const totalItems = ctx.cartitemQuantity;
  //console.log(ctx.totalAmount);
  const name = ctx.cartitemName;
  const quantity = ctx.cartitemQuantity;
  const price = ctx.cartItemPrice;
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
