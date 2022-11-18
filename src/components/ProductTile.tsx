import React from "react";
import styled from "styled-components";

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
  padding: 15px;
`;

const SProductPrice = styled.p`
  border-radius: 5px;
`;

const SProductLink = styled.a`
  text-decoration: none;
  /* border: 1px solid rgb(210, 206, 206); */
  border-radius: 5px;
  width: 10rem;
  background-color: #fff;
`;

// interface item {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   description: string;
// }

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface IProps {
  product: Product;
}

// const ProductTile: React.FC<item> = (item) => {
//   const { id, title, price, image, description } = item;
const ProductTile: React.FC<IProps> = (props) => {
  const { id, title, price, image, description } = props.product;
  return (
    <SProductTile>
      <SProductLink as="a" href="#">
        <SHeaderProductTitle>{title}</SHeaderProductTitle>
        <SImgProductPhoto src={image} alt="" />
        <p>${price}</p>
      </SProductLink>
    </SProductTile>
  );
};
export default ProductTile;
