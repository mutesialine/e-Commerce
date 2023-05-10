import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/home/Home";
import ProductDetails from "./component/pages/home/Product/ProductDetails";
const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default App;
