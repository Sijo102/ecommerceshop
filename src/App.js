import { HashRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/product";
import Cart from "./components/cart";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
