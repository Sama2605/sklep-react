import React from "react";
import { useShoppingCart } from "context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import useGetProducts from "hooks/api/use-get-products";

export const Cart = () => {
  const { cartItems } = useShoppingCart();
  const { data: products, loading } = useGetProducts();
  return (
    <div>
      <button>Wróć</button>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>
        Total: ${" "}
        {cartItems.reduce((total, cartItem) => {
          const item = products.find((i) => i.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)}
      </div>
    </div>
  );
};
