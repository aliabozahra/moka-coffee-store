import { useNavigate } from "react-router-dom"
import { useCart, usedomain } from "../../store";
import Swal from "sweetalert2";
import axios from "axios";

export default function SupProduct({name ,img,short,weight, price,prodcut ,id,slug}) {
  const {addToCart} =useCart();
  const navigate =useNavigate();
  const{domain}=usedomain();
  const handelclick =()=>{
    navigate (`/Products/${slug}/${id}`)
  }


  const handelAddToCart =(e)=>{
    let endPoint ='/api/cart-items';
    let url = domain +endPoint;
    let data = {
      product_identifier:prodcut.documentId ,
      product_name :prodcut.prodcut_name,
      product_price :prodcut.prodcut_price,
      qty : 1,
      product_img :img,
      product_weight : prodcut.prodcut_weight,
    }
    axios.post(url,{data :data}).then((res)=>{
      let data =res.data.data;
      let obj ={
        product_identifier:data.product_identifier ,
      product_name :data.product_name,
      product_price :data.product_price,
      qty : data.qty,
      product_img :data.product_img,
      product_weight : data.prodcut_weight,
      }
      addToCart(obj) 
      Swal.fire({
          text :"تم اضافة المنتج إلى عربة التسوق بنجاح",
          icon:"success",
          timer : 1600 ,
        })
    })
    e.stopPropagation();
   
  }

  
  return (
    <div onClick={handelclick} className='w-full flex justify-center cursor-pointer' >
        <div className="card bg-white  w-full shadow-sm">
  <figure className='h-full w-full'>
    <img
    className='w-full h-48 object-cover'
      src={img}
       />
  </figure>
  <div className="card-body ">
    <div className='flex justify-between px-3'>
    <h2 className="text-xl font-bold  text-black">{name}</h2>
    <div className="text-end">
              <div className="text-sm text-neutral-800">السعر</div>
              <div className="text-[#A94438] font-extrabold text-lg">{price} ج.م</div>
            </div>  
              </div>

    <p className=' text-neutral-800'>{short}</p>
    
    <div className="flex justify-between items-center mt-4">
            <div className="badge bg-amber-500 text-white font-bold px-4 p-2 text-sm rounded">{weight} </div>
            <button onClick={handelAddToCart} className="btn bg-[#6D2932] text-white hover:bg-[#561C24] rounded-3xl px-7 lg:px-5">
              اضف للعربة
            </button>
          </div>
  </div>
</div>
    </div>
  )
  }
