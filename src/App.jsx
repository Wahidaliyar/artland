import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Order from "./pages/order/Order";
import Artists from "./pages/artists/Artists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
