import './App.css'
import NotFound from './pages/404/NotFound'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  );
}

