import CartContext from "../../store/CartContext";
//import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";
const Shopping = () => {
  return (
    <CartContext.Provider
      value={{
        cartitems: "hi there",
        totalAmount: 0,
        additem: (item) => {},
        removeitem: (id) => {},
      }}
    >
      <Cartlist />
      <FoodList />
    </CartContext.Provider>
  );
};
export default Shopping;
