import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cartlist = () => {
  const crtctx = useContext(CartContext);

  // const totalItems = crtctx.cartitems.reduce((curNumber, item) => {
  //   return curNumber + item.quantity;
  // }, 0);
  const totalItems = crtctx.cartitems;
  console.log(crtctx.cartitems);

  return (
    <div>
      <h1>cart here: {totalItems}</h1>
    </div>
  );
};
export default Cartlist;
