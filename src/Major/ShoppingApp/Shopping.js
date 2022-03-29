import { useState } from "react";
import CartContext from "../../store/cart-context";
//import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";

const Shopping = () => {
  return (
    <div>
      <Cartlist />
      <FoodList />
    </div>
  );
};
export default Shopping;
