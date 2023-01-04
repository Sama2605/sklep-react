import useGetProducts from "hooks/api/use-get-products";
import styled from "styled-components";

const SProductTile = styled.div`
  display: flex;
  border: 1px solid rgb(210, 206, 206);
  width: 50%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const SHeaderProductTitle = styled.h2`
  overflow: hidden;
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
  margin-right: 15px;
`;

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { data: products } = useGetProducts();
  const item = products.find((i) => i.id === id);
  //   console.log(item);
  return (
    <>
      <SProductTile>
        <SHeaderProductTitle>{item?.title}</SHeaderProductTitle>
        <SImgProductPhoto src={item?.image} alt="product" />
        <SProductPrice>
          ${item?.price} {""}
          {quantity > 1 && <span>x{quantity}</span>}
        </SProductPrice>
      </SProductTile>
    </>
  );
}
