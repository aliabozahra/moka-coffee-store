import instapay from "../../assets/imges/instapay.png"
import vodafon from "../../assets/imges/vodafon.png.webp"
import logo from "../../assets/imges/mokacoffe.Logo.png"
import { FaMoneyBillWave } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";





export default function Footer() {
  return (
    <div className="w-full">
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">المنتجات</h6>

<Link to="/" className="link link-hover">بن عادي</Link>
<Link to="/" className="link link-hover">بن فلافير</Link>
<Link to="/" className="link link-hover">تمور</Link>
<Link to="/" className="link link-hover">سحلب</Link>

  </nav>


  <nav>
  <h6 className="footer-title">الصفحات</h6>

    <Link to="/" className="link link-hover"> الرئيسية</Link>
    <Link to="/about" className="link link-hover">من نحن</Link>
<Link to="/contact" className="link link-hover">تواصل معنا</Link>
<Link to="/Product" className="link link-hover">المنتجات</Link>
  </nav>

  <nav>
    <h6 className="footer-title">رقم التواصل : </h6>
    <a className="link link-hover items-center flex gap-2">
       <CiPhone className="text-2xl" />
       01069103463</a>
    <h6 className="footer-title">السوشيال ميديا   : </h6>
    <div className="link link-hover items-center flex gap-3"> 
       <a href="https://www.facebook.com" >
  <FaFacebook className="text-2xl" />
</a>

<a href="https://wa.me/01069103463" >
  <FaWhatsapp className="text-3xl" />
</a>

    </div>


    <h6 className="footer-title"> العنوان  : </h6>
    <a className="link link-hover"> الجلاتمة-منطقة الصحارى</a>
   
  </nav>


  <nav>
    <div>
        <img src={logo} className="w-[60px] h-[60px] rounded-full" />
        <h1 className="text-2xl font-bold"> Moka coffee</h1>
    </div>
    <h6 className="footer-title ">طرق الدفع </h6>
    <div className="grid grid-flow-col gap-4 items-center">
      <a>
        <img
        src={instapay}
         
          className="fill-current w-[80px] h-[80px]">
          
        </img>
      </a>
      <a>
        <FaMoneyBillWave 
          
          className="fill-current w-[40px] h-[40px] text-[#85BB65]">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </FaMoneyBillWave>
      </a>
      <a>
      <img
        src={vodafon}
         
          className="fill-current w-[80px] h-[80px]">
          
        </img>
      </a>
    </div>
  </nav>
  
</footer>
        
    </div>
  )
}
