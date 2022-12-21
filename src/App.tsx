import MainLayout from "./layout/main";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import ProductView from "./views/product/ProductView";
import ProductsView from "./views/products/ProductsView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ProductsView />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/products/:productId" element={<ProductView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
