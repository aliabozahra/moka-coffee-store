import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import ContactPage from "./Pages/Contactpages";
import Aboutpage from "./Pages/AboutPage";
import Loginpage from "./Pages/LoginPage";
import RegisterPage from "./Pages/Registerpage";
import NotFoundPage from "./Pages/Page404";

export default function App() {
  return (
    <div className="App bg-white">
    
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/Product" element={<h1>Product page </h1>}/>
        <Route path="/product/:id" element={<h1>products/:id</h1>} />
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
