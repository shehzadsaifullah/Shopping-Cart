import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cartlist = () => {
  const crtctx = useContext(CartContext);

  const totalItems = crtctx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  console.log(totalItems);

  return (
    <div>
      <h1>cart here: {totalItems}</h1>
    </div>
  );
};
export default Cartlist;
