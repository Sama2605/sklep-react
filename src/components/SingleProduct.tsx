import React from "react";
import ProductTile, { Product } from "../components/ProductTile";
import { useOutletContext, useParams } from "react-router-dom";

// interface IProps {
//   product: Product;
// }

const SingleProduct = () => {
  const products = useOutletContext() as any;
  console.log(products);
  // console.log(useParams());
  // console.log(id);
  const { productId } = useParams();

  const product = products.find((product: any) => product.id == productId);
  console.log(product);
  let { title } = product;
  // console.log(title);
  return (
    <div>
      <div>{title}</div>
      <div>image</div>
    </div>
  );
};
export default SingleProduct;
