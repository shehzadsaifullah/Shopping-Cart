const CartContext = React.createContext({
  cartitems: [],
  totalAmount: 0,
  additem: (item) => {},
  removeitem: (id) => {},
});

export default CartContext;
