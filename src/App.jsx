import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
