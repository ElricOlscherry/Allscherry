import './App.css'
import Home from './pages/home/Home'
import NotFound from './pages/404/NotFound'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  );
}

