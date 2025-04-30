import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/imges/mokacoffe.Logo.png'
import { VscAccount } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Header() {
  const navigate =useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handelProfile=()=>{
    let userInfo = JSON.parse(sessionStorage.getItem("userdata"))
    if(userInfo){
      navigate("/profile")
    }else{
      Swal.fire({
        text:"يجب عليك تسجيل الدخول اولا لعرض بيانات حسابك",
        icon:"error",
        timer:1600,
      })
    }
  }
  const handelCart =()=>{
    let userInfo = JSON.parse(sessionStorage.getItem("userdata"))
    if(userInfo){
      navigate("/ProductInCart")
    }else{
      Swal.fire({
        text:"يجب عليك تسجيل الدخول اولا لعرض منتجاتك",
        icon:"error",
        timer:1600,
      })
    }

  }


  return (
    


    <div className={`flex mb-[40px] sticky top-0 z-50  p-4 h-[80px] w-full justify-center items-center ${isScrolled ? "bg-[#E8D8C4] shadow-md transition-all  rounded-3xl" : "bg-transparent"}`}
>
    <div className=" grid grid-cols-6 lg:grid-cols-5 justify-center items-center w-full p-2 relative ">


       <div  className="gap-7 p-1 pl-2 justify-around col-span-2  hidden lg:flex" >
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all rounded-xl px-2"  to={'/'}>الرئيسية</Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all"  to={'/Products'}>المنتجات</Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all" to={'/contact'}>تواصل معنا </Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all" to={'/about'}>من نحن</Link>
       </div>


       {/* offcanvas */}
       <div className="drawer z-50  flex lg:hidden col-span-1">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" cursor-pointer text-3xl drawer-button text-[#561C24] hover:text-[#E8D8C4] transition-all"><HiMenuAlt3 htmlFor="my-drawer" className=" drawer-button" /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-8  items-center gap-5 ">
      {/* Sidebar content here */}
      <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all"  to={'/'}>الرئيسية</Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all"  to={'/Products'}>المنتجات</Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all" to={'/contact'}>تواصل معنا </Link>
        <Link className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all" to={'/about'}>من نحن</Link>
    </ul>
  </div>
</div>


       {/*  */}
    <div className=" justify-center flex items-center col-span-2 lg:col-span-1  ">
      <img src={logo} className= " mt-6 w-[60px] md:w-[80px] lg:w-[80px]  h-[60px]  md:h-[80px] lg:h-[80px] rounded-full"></img>
    </div>


    <div className=" justify-center mt-4 gap-3 flex  col-span-3 lg:col-span-1  lg:absolute left-9 top-9 lg:gap-8 lg:p-0">
      <div onClick={handelProfile} className="flex flex-row gap-1 justify-center cursor-pointer">
      <VscAccount className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all" />
      <p className="sm:text-xl md:text-2xl lg:text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all">حسابك</p>
      </div>
    
    <div onClick={handelCart} className="flex flex-row gap-1 justify-center cursor-pointer">
      <div>
      <FaCartShopping className="text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all relative" />
      <span className="bg-red-800 rounded-4xl px-1 absolute top-5 md:top-7 lg:-top-5 lg:left-14">4</span>


      </div>
    <p className="sm:text-xl md:text-2xl lg:text-2xl text-[#561C24] hover:text-[#E8D8C4] transition-all">طلباتك</p>
    </div>
    </div>

    </div>
    </div>

  )
}
