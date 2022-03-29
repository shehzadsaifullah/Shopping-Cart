import { useState } from "react";
import CartContext from "../../store/cart-context";
//import CartProvider from "../../store/CartProvider";
import Cartlist from "../Cart/CartList";
import FoodList from "../List/FoodList";

const Shopping = () => {
  const [cart, setCart] = useState();

  return (
    <CartContext.Provider value={{ cartitems: "dumb dumb", totalAmount: 0 }}>
      <div>
        <Cartlist />
        <FoodList cart={cart} setCart={setCart} />
      </div>
    </CartContext.Provider>
  );
};
export default Shopping;
