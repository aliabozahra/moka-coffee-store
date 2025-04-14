import { Route, Routes } from "react-router-dom";
import Header from "./Componts/Header";

export default function App() {
  return (
    <div className="App bg-info">
      <Header/>
      <Routes>
        <Route path="/" element={<h1>Homa page </h1>}/>
        <Route path="/Product" element={<h1>Product page </h1>}/>
        <Route path="/product/:id" element={<h1>products/:id</h1>} />
        <Route path="/cart" element={<h1>cart page </h1>} />
        <Route path="/login" element={<h1>login page </h1>} />
        <Route path="/register" element={<h1>register page </h1>} />
        <Route path="/profile" element={<h1>profile page </h1>} />
        <Route path="/contact" element={<h1>contact page </h1>} />
        <Route path="/about" element={<h1>about page </h1>} />
        <Route path="/*" element={<h1>404</h1>}/> 
      </Routes>
    </div>
  );
}
