import { useShoppingCart } from "context/ShoppingCartContext";
import React, { useState } from "react";
import styled from "styled-components";
import { Product } from "types";

const SProductTile = styled.div`
  border: 1px solid rgb(210, 206, 206);
  width: 190px;
  text-align: center;
`;

const SHeaderProductTitle = styled.h2`
  overflow: hidden;
  margin: 0 auto;
  width: 100px;
  height: 25px;
  font-size: 1em;
  font-weight: 400;
  padding: 10px;
`;

const SImgProductPhoto = styled.img`
  width: 100px;
  height: 100px;
  padding-top: 15px;

  &:hover {
    opacity: 0.8;
  }
`;

const SProductPrice = styled.p`
  border-radius: 5px;
`;

const SProductLink = styled.a`
  text-decoration: none;
  border-radius: 5px;
  width: 10rem;
`;

const SCartButton = styled.button``;

interface IProps {
  product: Product;
}

const ProductTile: React.FC<IProps> = (props) => {
  // const [cart, setCart] = useState<IProps[]>([]);
  // console.log(cart);
  const { id, title, price, image } = props.product;

  // function addToCart(e: React.MouseEvent<HTMLButtonElement>, item: IProps) {
  //   e.preventDefault();
  //   console.log(item);
  //   setCart([...cart, item]);
  //   // setCart([props.product]);
  //   // localStorage.setItem("cart", JSON.stringify(cart));
  // }
  // const addToCart = (e: React.MouseEvent<HTMLButtonElement>, item: IProps) => {
  //   console.log(item);
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <SProductTile>
      <SProductLink
        as="a"
        href={`/products/${id}`}
        // onClick={handleClick}
      >
        <SHeaderProductTitle>{title}</SHeaderProductTitle>
        <SImgProductPhoto src={image} alt="product" />
        <SProductPrice>${price}</SProductPrice>
      </SProductLink>
      <SCartButton onClick={() => increaseCartQuantity(id)}>
        Dodaj do koszyka
      </SCartButton>
      <div>{quantity}</div>
    </SProductTile>
  );
};
export default ProductTile;
