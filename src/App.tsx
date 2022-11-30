import MainLayout from "./layout/main";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Route>
        {/* <Route path="/products/:productId" element={<SingleProduct />} /> */}
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
