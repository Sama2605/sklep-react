import { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { idText } from "typescript";
import ErrorPage from "../components/ErrorPage";
import ProductTile, { Product } from "../components/ProductTile";
import { Outlet } from "react-router-dom";

const SGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 13fr 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
  width: 100%;
  height: 100%;
`;

const SNav = styled.ul`
  grid-area: header;
  display: flex;
  justify-content: end;
  list-style-type: none;
`;

const SMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px rgb(0, 0, 0) solid;
  border-bottom: 1px rgb(0, 0, 0) solid;
`;

const SFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
`;

const SNavLink = styled.a`
  text-decoration: none;
  padding: 15px 15px;
  color: rgb(0, 0, 0);
`;

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

const MainLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   console.log(searchInput);
  //   if (searchInput.length < 2) {
  //     setProducts(products);
  //   } else {
  //     const searchedProducts = products.filter((product) => {
  //       const productString = product.title.replaceAll(" ", "").toLowerCase();
  //       return productString.includes(searchInput);
  //     });
  //     setProducts(searchedProducts);
  //     // setProducts(products.map((product)=>{product == searchProducts ? searchProducts : products}))
  //     // const newArr = [...searchProducts];
  //     // setSearchResults(searchProducts);
  //     // console.log(newArr);
  //   }
  // }, [searchInput]);

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
        products.filter((product) => {
          const productString = product.title.replaceAll(" ", "").toLowerCase();
          return productString.includes(searchInput);
        })
      );
    }
  }, [searchInput, products]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((res) => {
        setProducts(res);
      })
    );
  }, []);

  // const searchedProducts = products.filter((product) => {
  //   if (searchInput.length < 2) {
  //     return ;
  //   } else {
  //     const productString = product.title.replaceAll(" ", "").toLowerCase();
  //     return productString.includes(searchInput);
  //   }
  // });

  return (
    <SGrid>
      <nav>
        <SNav>
          <li>
            <SNavLink href="/">Strona główna</SNavLink>
          </li>
          <li>
            <SNavLink href="products">Produkty</SNavLink>
          </li>
        </SNav>
      </nav>
      <SMain>
        <Outlet context={searchedProducts} />
        <SInputContainer>
          <SSearchInput
            type="text"
            placeholder="Szukaj..."
            // onChange={(e: any) => onSearchInputChange(e)}
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
      </SMain>

      <SFooter></SFooter>
    </SGrid>
  );
};

export default MainLayout;
