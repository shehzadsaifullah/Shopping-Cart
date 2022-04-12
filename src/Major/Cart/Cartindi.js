import classes from "./Cartindi.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Cartindi = (props) => {
  const ctx = useContext(CartContext);
  const addButtonHandler = () => {
    props.addbutton();
  };
  //access add and delete items from cart through new function in contextprovider
  return (
    <ul className={classes.unorderedlist}>
      <div>
        <div>{props.item.cartItemname}</div>
        <div>{props.item.cartItemquantity}</div>
        <div>{props.item.cartItemprice}</div>
        <button onClick={addButtonHandler}>add button</button>
      </div>
    </ul>
  );
};
export default Cartindi;
