import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Order from "./pages/order/Order";
import Artists from "./pages/artists/Artists";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import SingleArtist from "./pages/artists/SingleArtist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/artists">
          <Route index element={<Artists />} />
          <Route path="/:id" element={<SingleArtist />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
