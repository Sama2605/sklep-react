import MainLayout from "./layout/main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductView from "./views/product/ProductView";
import ProductsView from "./views/products/ProductsView";
import { Cart } from "./views/cart/Cart";
import { ShoppingCartProvider } from "context/ShoppingCartContext";
import { ShoppingCartContext } from "context/ShoppingCartContext";
function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ProductsView />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/products/:productId" element={<ProductView />} />
        </Route>
      </Routes> */}
      {/* /////// */}
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/products/:productId" element={<ProductView />} />
            <Route path="/" element={<ProductsView />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
