import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addCardItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    additem: addCardItemHandler,
    removeitem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
