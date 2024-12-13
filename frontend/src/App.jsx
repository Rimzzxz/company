import { Row } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from "./components/Category.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Order from "./components/Order.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
