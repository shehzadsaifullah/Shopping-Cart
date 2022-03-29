import CartContext from "../../store/cart-context";
import { useRef, useState } from "react";

const Card = (props) => {
  const inputQuantityValue = useRef();

  const [itemsState, setItemsState] = useState();
  const [amounState, setAmountState] = useState();

  const addToCartHandler = () => {
    setItemsState(inputQuantityValue.current.value);
    setAmountState("100");
    console.log(props.listitem.id, inputQuantityValue.current.value);
  };
  return (
    <CartContext.Provider
      value={{
        cartitems: itemsState,
        totalAmount: amounState,
      }}
    >
      <div>
        <ul>
          <div>{props.listitem.name}</div>
          <div>{props.listitem.description}</div>
          <div>{props.listitem.price}</div>
        </ul>
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          min="0"
          max="5"
          defaultValue="0"
          ref={inputQuantityValue}
        ></input>
        <button onClick={addToCartHandler}>add to card</button>
      </div>
    </CartContext.Provider>
  );
};
export default Card;
