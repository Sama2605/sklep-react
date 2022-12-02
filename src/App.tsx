import MainLayout from "./layout/main";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import ListOfProducts from "./components/ListOfProducts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
