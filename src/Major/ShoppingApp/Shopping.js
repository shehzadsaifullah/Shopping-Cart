import { useState } from "react";
import CartContext from "../../store/cart-context";
import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";

const Shopping = () => {
  const [cart, setCart] = useState();

  return (
    <CartProvider>
      <Cartlist />
      <FoodList />
    </CartProvider>
  );
};
export default Shopping;
