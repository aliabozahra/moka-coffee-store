import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import ContactPage from "./Pages/Contactpages";
import Aboutpage from "./Pages/AboutPage";
import Loginpage from "./Pages/LoginPage";
import RegisterPage from "./Pages/Registerpage";
import NotFoundPage from "./Pages/Page404";
import ProductsPage from "./Pages/ProdcutsPage";
import ProdcutsTypeMain from "./Pages/prodcutsTypeMain";
import ProductOnePage from "./Pages/productOnePage";

export default function App() {
  return (
    <div className="App bg-white">
    
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/Products" element={<ProductsPage/>}/>
        <Route path="/Products/:slug" element={<ProdcutsTypeMain/>} />
        <Route path="/Products/:slug/:productId" element={<ProductOnePage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/profile" element={<h1>profile page </h1>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/*" element={<NotFoundPage/>}/> 
      </Routes>
    </div>
  );
}
