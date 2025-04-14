import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex p-4 h-[70px] bg-amber-300 w-full justify-center">
    <div className="gap-2 grid grid-cols-4  w-full p-2">
       <div className="gap-5   justify-center flex bg-amber-900 col-span-2 " >
        <Link to={'/'}>الرئيسية</Link>
        <Link to={'/Product'}>المنتجات</Link>
        <Link to={'/contact'}>توصل معنا </Link>
        <Link to={'/about'}>من نحن</Link>
       </div>
    <div className="bg-emerald-700 ">ddddddd</div>
    <div className="bg-fuchsia-400 ">dddddddd2</div>
    <div></div>
    </div>
    </div>
  )
}
