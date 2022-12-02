import { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorPage from "../components/ErrorPage";
import ProductTile, { Product } from "../components/ProductTile";
import { useOutletContext } from "react-router-dom";

const SDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 25px 25px;
`;

const SInputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;

const SSearchInput = styled.input`
  width: 30%;
`;

const ListOfProducts = () => {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const products = useOutletContext() as any;

  /**
   * Komponent niekontrolowany
   */

  // const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   if (value.length < 2) {
  //     setSearchedProducts(products);
  //   } else {
  //     setSearchedProducts(
  //       products.filter((product) => {
  //         const productString = product.title.replaceAll(" ", "").toLowerCase();
  //         return productString.includes(value);
  //       })
  //     );
  //   }
  // };

  useEffect(() => {
    if (searchInput.length < 2) {
      setSearchedProducts(products);
    } else {
      setSearchedProducts(
        products.filter((product: any) => {
          const productString = product.title.replaceAll(" ", "").toLowerCase();
          return productString.includes(searchInput);
        })
      );
    }
  }, [searchInput, products]);

  return (
    <>
      <SInputContainer>
        <SSearchInput
          type="text"
          placeholder="Szukaj..."
          onChange={(e: any) => setSearchInput(e.target.value)}
          // onChange={onSearchChange}
          value={searchInput}
        />
      </SInputContainer>
      {products.length < 1 || searchedProducts.length < 1 ? (
        <ErrorPage />
      ) : (
        <SDiv>
          {searchedProducts.map((item) => (
            <ProductTile key={item.id} product={item} />
          ))}
        </SDiv>
      )}
    </>
  );
};

export default ListOfProducts;
