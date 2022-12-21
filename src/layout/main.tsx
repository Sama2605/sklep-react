import styled from "styled-components";
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
  height: 100vh;
`;

const SNav = styled.ul`
  grid-area: header;
  display: flex;
  justify-content: end;
  list-style-type: none;
`;

const SNavLink = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 15px 15px;
  color: rgb(0, 0, 0);
`;

const SMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px rgb(0, 0, 0) solid;
`;

const SFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  padding: 10px;
  border-top: 1px rgb(0, 0, 0) solid;
`;

const MainLayout = () => {
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
        <Outlet />
      </SMain>
      <SFooter>Sklep internetowy Gosia 2022</SFooter>
    </SGrid>
  );
};

export default MainLayout;
