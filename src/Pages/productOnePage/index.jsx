import React, { useEffect, useState } from 'react'
import Header from '../../Componts/Header'
import Footer from '../../Componts/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { usedomain } from '../../store';
import axios from 'axios';
import hero from "../../assets/imges/hand-1.jpg"

export default function ProductOnePage() {
    const navigate =useNavigate();
    const [ProductIfo,setProductIfo] =useState();
    const params =useParams();
    const id =params.productId;
    const{domain} =usedomain();
    useEffect(()=>{
        let url =`${domain}/api/sup-products/${id}`
        axios.get(url,{
            params :{
                populate :"*",
            }

        }).then((res)=>{
            setProductIfo(res.data.data)
        }).catch((err)=>{
            navigate("/erorr")
            
        })
    },[])
  return (
    <div className='w-full h-auto bb-info'>
         <Header/>

         <div className="w-full h-auto relative">
                                            <img src={hero} className="w-full h-[300px] object-cover"></img>
                                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                                            <h1 className="text-4xl font-black">{ProductIfo&& ProductIfo.prodcut_name} </h1>
                                            </div>
                         </div>

                 { 
                         ProductIfo&&
                          (
                            <div className='w-full'>
                            <div className='mx-auto container px-4 mt-6 '>

                           <div className="bg-white p-1 md:p-10 lg:p-20 w-full">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={`${domain}${ProductIfo.prodcut_imge.url}`}
            
            className="rounded-lg object-cover w-full h-auto max-h-[500px]"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#6D2932] mb-6">{ProductIfo.prodcut_name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-10 mb-8">
              <div className="flex items-center  gap-2">
                <span className="text-3xl font-bold text-[#6D2932]">{ProductIfo.prodcut_price}ج.م </span>
                <span className="text-base line-through text-gray-400">{ProductIfo.prodcut_price +(ProductIfo.prodcut_price *.10)}ج.م </span>
              </div>

              <div className="bg-[#E8D8C4] px-4 py-2 rounded-lg text-[#6D2932] text-sm font-semibold">
              {ProductIfo.prodcut_weight}
              </div>
            </div>

            <div className="text-gray-600 space-y-4 mb-8">
              <p>
              {ProductIfo.short_description}
              </p>
              <p>
              {ProductIfo.long_description}

              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="flex-1 py-4 rounded-lg border-2 border-[#C7B7A3] text-[#6D2932] font-semibold hover:bg-[#E8D8C4] transition">
                اشتري الآن
              </button>
              <button className="flex-1 py-4 rounded-lg bg-[#6D2932] text-white font-semibold hover:bg-[#5a212a] transition">
                أضف إلى العربة 
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
                            </div>
                         </div>

                          )
                  }

                         



       
        <Footer/>
    </div>
  )
}
