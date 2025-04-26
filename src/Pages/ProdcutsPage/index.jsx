import { useEffect, useState } from "react";
import Footer from "../../Componts/Footer";
import Header from "../../Componts/Header";
import MainProdcut from "../../Componts/MainProdcut";
import hero from"../../assets/imges/hand-1.jpg"
import { useData, usedomain } from "../../store";
import { getMainProduct } from "../../data/Api/mainproduct";

export default function ProductsPage() {
    const{domain}=usedomain() 
    const {data,setDataMain}= useData();
        
        useEffect(()=>{
            const getData = async () => {
                const data = await getMainProduct(domain);
                let datainfo = data.map((el)=>(
                    {
                        id:el.documentId,
                       name : el.name, 
                       text :el.description,
                       image :domain+el.mainprodcut_imge.url,
                       slug:el.prodcut_uid,
                   }
                ))
                setDataMain(datainfo)
              };
              getData()
        },[])
     
    
  return (
    <div className="w-full" >
        <Header/>


        <div className="w-full h-auto relative">
                           <img src={hero} className="w-full h-[300px] object-cover"></img>
                           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                           <h1 className="text-4xl font-black">المنتجات </h1>
                           </div>
        </div>


        <div className="w-full h-auto">
            <div className="mx-auto container px-2  md:px-10 lg:px-12 ">
                <div className="p-8 flex  flex-col">
                    <div className=" flex gap-2 flex-col mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-black">منتجات موكا كوفي </h1>
                    <p className="text-sm text-neutral-700 font-bold" >نقدم لكم أفضل وأجود المنتجات </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
                        {
                            data.map((el)=>{
                                return (
                                    <MainProdcut key={el.id} name={el.name} img={el.image} slug={el.slug} text={el.text} id={el.id} />
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
