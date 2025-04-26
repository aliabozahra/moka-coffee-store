import { useEffect, useState } from "react";
import {  usedomain } from "../../store"
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Componts/Header";
import Footer from "../../Componts/Footer";
import hero from "../../assets/imges/hand-1.jpg"
import SupProduct from "../../Componts/supProduct";
import axios from "axios";
export default function ProdcutsTypeMain() {
    const {domain} = usedomain();
    const[supData,setSupData]=useState([]);
    const [nameproduct,setNameProduct] =useState("")
    const navigate =useNavigate();
    const {slug} =useParams()
    useEffect(()=>{
      let url =domain +`/api/main-products`
      axios.get(url,{
        params: {
          filters: {
            prodcut_uid: {
              $eq: slug, 
            },
          },
          populate: {
            sup_products: {
              populate: "*", 
            },
          },
        },
      }).then((res)=>{
      const products = res.data.data;
      {setNameProduct(products[0].name)}
    if (products.length === 0) {
      navigate("/error");
      return;
    }
let datainfo = products[0].sup_products;
setSupData(datainfo);
  }).catch((err) => {
        navigate("/error");
      });
    },[])
  return (

    <div className='w-full'>
         <Header/>
         
                 <div className="w-full h-auto relative">
                                    <img src={hero} className="w-full h-[300px] object-cover"></img>
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                                    <h1 className="text-4xl font-black">{nameproduct&& nameproduct} </h1>
                                    </div>
                 </div>

         
         
                 <div className="w-full h-auto">
                     <div className="mx-auto container px-2  md:px-10 lg:px-12 ">
                         <div className=" flex  flex-col">
                             <div className=" flex gap-2 flex-col mb-8">
                             <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-black">
                                </h1>
                             <p className="text-sm text-neutral-700 font-bold" >نقدم لكم أفضل وأجود المنتجات </p>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                                
                                       {
                                        supData && supData.map((el)=>{
                                          return(
                                            <SupProduct key={el.documentId} name={el.prodcut_name} img={`${domain}${el.prodcut_imge.url}`}  short={el.short_description} weight={el.prodcut_weight} long={el.long_description} price={el.prodcut_price} id={el.documentId} slug={slug} /> 

                                          )
                                        })
                                       }
                             
                             </div>
         
         
                         </div>
         
                     </div>
                 </div>


                 <Footer/>

    </div>
  )
}
