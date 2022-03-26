import { useRef } from "react";

const Card = (props) => {
  const inputQuantityValue = useRef();
  const addToCartHandler = () => {
    console.log(props.listitem.id, inputQuantityValue.current.value);
  };
  return (
    <div>
      <div>
        <ul>
          <div>{props.listitem.name}</div>
          <div>{props.listitem.description}</div>
          <div>{props.listitem.price}</div>
        </ul>
      </div>
      <div>
        <label>Quantity</label>
        <input type="number" min="1" max="5" ref={inputQuantityValue}></input>
        <button onClick={addToCartHandler}>add to card</button>
      </div>
    </div>
  );
};
export default Card;
