import styled from "styled-components";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { Product } from "types";
import useGetProducts from "../../hooks/api/use-get-products";

const SSingleProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid rgb(210, 206, 206);
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.3);
  max-width: 60rem;
  border-radius: 5px;
`;

const SProductTitle = styled.h1`
  max-width: 50rem;
`;

const SImgProductPhoto = styled.img`
  align-self: center;
  height: 30rem;
  max-width: 50rem;
`;

const SProductDescription = styled.p`
  text-align: center;
  align-self: center;
  max-width: 50rem;
`;

const SProductPrice = styled.p`
  padding-bottom: 20px;
  color: rgb(97, 132, 177);
`;

const ProductView = () => {
  const {data: products, loading} = useGetProducts();

  const { productId } = useParams();

  const product = products.find((product: any) => product.id == productId);
  const title = product?.title;
  const image = product?.image;
  const description = product?.description;
  const price = product?.price;

  return (
    <SSingleProduct>
      <SProductTitle>{title}</SProductTitle>
      <SImgProductPhoto src={image} alt="product"></SImgProductPhoto>
      <SProductDescription>{description}</SProductDescription>
      <SProductPrice>${price}</SProductPrice>
    </SSingleProduct>
  );
};
export default ProductView;
