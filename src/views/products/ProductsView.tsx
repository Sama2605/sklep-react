import { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorPage from "components/ErrorPage";
import ProductTile from "views/products/components/ProductTile";
import { Product } from "types";
import useGetProducts from "../../hooks/api/use-get-products";

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

const ProductsView = () => {
  const {data: products, loading} = useGetProducts();
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState("");

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

  if (loading) {
    return <span>Loading...</span>
  }

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

export default ProductsView;
