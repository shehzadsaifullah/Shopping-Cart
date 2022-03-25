const Card = (props) => {
  return (
    <div>
      <div>
        <ul>
          <div>{props.listitem.name}</div>
          <div>{props.listitem.description}</div>
          <div>{props.listitem.price}</div>
        </ul>
      </div>
      <div>quantity</div>
      <div>
        <button>add to card</button>
      </div>
    </div>
  );
};
export default Card;
