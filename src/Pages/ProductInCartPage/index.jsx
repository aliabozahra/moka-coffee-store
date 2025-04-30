import React, { useEffect, useState } from 'react'
import Header from '../../Componts/Header'
import Footer from '../../Componts/Footer'
import { useCart, usedomain } from '../../store'
import axios from 'axios';

export default function ProductInCartPage() {
    const {productInCart,deCremantQty,inCremantQty,deleteProduct,addToCart}=useCart();
    const [total, setTotal] = useState(0);
      const{domain}=usedomain();
    
    useEffect(()=>{
        let endPoint ='/api/cart-items';
    let url = domain +endPoint;
    axios.get(url , {
        params :{
            populate :"*",
        }

    }).then((res)=>{
        let data =res.data.data;
        data.forEach((el) => {
            let obj = {
              product_identifier: el.product_identifier,
              product_name: el.product_name,
              product_price: el.product_price,
              qty: el.qty,
              product_img: el.product_img,
              product_weight: el.product_weight,
            };
            addToCart(obj);
          });
       
        
        
    })


        let newTotal = productInCart.reduce((acc,el)=>acc+ el.qty * el.product_price,0)
        setTotal(newTotal);

    },[])

    
  return (
    <div className='w-full '>
        <Header/>
        
        <div className='w-full'>
            <div className='container mx-auto px-2 '>




            <div className="flex flex-col gap-6 w-full px-4 p-6">
  {productInCart && productInCart.map((el) => {
    return (
        
      <div key={el.product_identifier} className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row items-center md:items-start gap-6">

        <div className="w-[100px] h-[60px] rounded-2xl mb-4 ">
          <img 
            src={el.product_img}
            alt="صورة المنتج"
            className="w-[150px] h-[100px] rounded-2xl  object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4 text-[#561C24]">
          
          <h2 className="text-xl font-bold">اسم المنتج: {el.product_name}</h2>
          
          <div className="flex items-center gap-4">
            <span className="text-lg font-black">الكمية:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={()=>{deCremantQty(el.product_identifier)}} className="bg-[#6D2932] text-white px-4 py-1 hover:bg-[#5b1f28]">-</button>
              <span className=" font-black px-4 py-1">{el.qty}</span>
              <button onClick={()=>{inCremantQty(el.product_identifier)}}  className="bg-[#6D2932] text-white px-4 py-1 hover:bg-[#5b1f28]">+</button>
            </div>
          </div>

          <div>
            <span className="text-lg font-black">السعر:</span>
            <span className="mr-2 font-semibold">{el.product_price *el.qty} ج.م</span>
          </div>

          <div>
            <span className="text-lg font-black">الوزن للعبوة الواحدة :</span>
            <span className="mr-2 font-semibold">{el.product_weight}</span>
          </div>

          <div className="flex gap-4 mt-4">
            <button onClick={()=>{deleteProduct(el.product_identifier)}} className="flex-1 bg-red-100 text-red-600 border border-red-400 py-2 rounded-lg hover:bg-red-200">
              🗑️ حذف
            </button>
            <button  className="flex-1 bg-[#6D2932] text-white py-2 rounded-lg hover:bg-[#5b1f28]">
              اطلب الآن
            </button>
          </div>
        </div>

      </div>
    );
  })}
            </div>



            <div className='w-full p-4'>
            <div className='flex flex-col justify-center items-center gap-4'>

                <div >
                <span className=" text-xl md:text-2xl font-black text-black">سعر جميع الطلبات :</span>
                <span className="mr-2 text-2xl font-black text-[#6D2932]">{total} ج.م</span>
                </div>
                <button  className="w-[180px] flex-1 bg-[#6D2932] text-white py-2 rounded-lg hover:bg-[#5b1f28]">
              اطلب جميع المنتجات الآن
            </button>

          </div>

            </div>







            </div>
            </div>

        <Footer/>

    </div>
  )
}
