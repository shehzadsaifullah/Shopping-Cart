import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";
const Shopping = () => {
  return (
    <CartProvider>
      <Cartlist />
      <FoodList />
    </CartProvider>
  );
};
export default Shopping;
