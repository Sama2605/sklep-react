import { useState } from "react";
import styled from "styled-components";

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
  text-align: center;
  width: 100px;
  height: 90px;
  line-height: 90px;
  border: 1px solid black;
`;

const SDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 15px;
`;

const MainLayout = () => {
  const [background, setBackground] = useState("");

  return (
    <SGrid>
      <nav>
        <SNav>
          <li>
            <SNavLink href="#strona główna">Strona główna</SNavLink>
          </li>
          <li>
            <SNavLink href="#produkty">Produkty</SNavLink>
          </li>
        </SNav>
      </nav>

      <SMain>
        <SDivContainer>
          <SDiv></SDiv>
          <SDiv></SDiv>
          <SDiv></SDiv>
          <SDiv></SDiv>
          <SDiv></SDiv>
        </SDivContainer>
      </SMain>

      <SFooter></SFooter>
    </SGrid>
  );
};

export default MainLayout;
