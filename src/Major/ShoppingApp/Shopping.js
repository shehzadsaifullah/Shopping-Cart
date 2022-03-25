import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";
const Shopping = () => {
  return (
    <div>
      <CartProvider>
        <Cartlist />
        <FoodList />
      </CartProvider>
    </div>
  );
};
export default Shopping;
