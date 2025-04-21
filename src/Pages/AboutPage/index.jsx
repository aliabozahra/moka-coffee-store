import Footer from "../../Componts/Footer";
import Header from "../../Componts/Header";
import hero from"../../assets/imges/hand-1.jpg"
import logo from "../../assets/imges/mokacoffe.Logo.png"
import moka from"../../assets/imges/mohamed.jpg"
import { GiCoffeeBeans } from "react-icons/gi";
import { FaPills } from "react-icons/fa6";
import { BsCupHotFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdCategory, MdOutlineSupportAgent } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import pak1 from "../../assets/imges/pak1.png"
import { TbPackage, TbWorldCheck } from "react-icons/tb";
import { PiMotorcycle } from "react-icons/pi";







export default function Aboutpage() {
  return (
    <div className="w-full">
        <Header/>


       <div className="w-full h-auto relative">
                   <img src={hero} className="w-full h-[300px] object-cover"></img>
                   <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                   <h1 className="text-4xl font-black">من نحن</h1>
                   </div>
               </div>

        <div className="w-full">
            <div className="mx-auto container px-4">
                <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-1 md:p-4 lg:p-5" >
                    <div className=" col-span-1  flex flex-col p-10 gap-4">
                        <p className="text-sm text-neutral-700 "> ديما بتسأل على طول  </p>
                        <p className="text-2xl font-black text-black ">مين موكا كوفي </p>
                        <p className="text-[17px] text-neutral-700 ">موكا كوفي هو براند مصري نشأ عام 2024 في الجلاتمة كان هدفنا هو أنتاج منتج ذات جودة عالية وبسعر منافس جدا فكان اختيارانا هو البن الاصلي ذات الجودة العالية وافضل سعر لعملائنا ومن هنا تميزنا عن غيرنا  </p>
                        <p className="text-2xl text-black  font-bold "> منتاجتنا هي     </p>
                        <div className="flex flex-col gap-5 p-2 ">
                                                <div className=" flex items-center gap-3">
                                                <GiCoffeeBeans 
                                                className="text-black font-bold"/>
                                                <p className="text-neutral-800 font-bold">بن إصلي</p>
                                                </div>
                                                <div className=" flex items-center gap-3">
                                                <FaPills className="text-black font-bold"/>
                                                <p className="text-neutral-800 font-bold">تمور</p>
                                                </div>
                                                <div className=" flex items-center gap-3">
                                                <BsCupHotFill className="text-black font-bold"/>
                                                <p className="text-neutral-800 font-bold">مشروب سحلب  </p>
                                                </div>
                        
                                            </div>
                      
                    </div>


                    <div className="flex justify-center items-center p-5 ">
                        <img src={logo}  className=" rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] " />
                    </div>

                </div>
            </div>
        </div>


        <div className="w-full h-auto bg-[#561C24]">
            <div className=" mx-auto container px-4 h-full ">
                <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-1 py-3 md:p-3 lg:p-4 items-center justify-center  " >
               < div className="col-span-1 h-full p-1 md:p-5 lg:p-6 flex flex-col gap-12 ">
               <h1 className=" text-2xl font-black text-[#C7B7A3] ">لماذا تختارنا <br/>لشراء البن ومنتجاتنا الاخرى؟</h1>
               <div className="w-full grid grid-cols-2 gap-2">
              
                <div className="col-span-1 bg-[#C7B7A3] p-3 flex flex-col items-center rounded-2xl">
                <VscWorkspaceTrusted  className=" font-bold text-2xl md:text-2xl lg:text-3xl text-black"/>
                <h1 className="text-sm  md:text-xl lg:text-xl font-bold text-black">ثقة عملائنا</h1>
                <p  className="text-[15px]  text-neutral-800">قبل اي عملية بيع الهدف هو الثقة القوية والعلاقة بيننا وبين عملائنا الكرام</p>

                </div>
                <div className="col-span-1 bg-[#C7B7A3] p-3 flex flex-col items-center rounded-2xl">
                <MdCategory className=" font-bold text-2xl md:text-2xl lg:text-3xl text-black"/>
                <h1 className="text-sm  md:text-xl lg:text-xl font-bold text-black"> تنوع المنتجات</h1>
                <p  className="text-[15px]  text-neutral-800"> تنوع المنتجات هو احد ما يميز موكا كوفي فالدينا انواع البن المختلفة من حبشي وبرازيلي والخ... </p>

                </div>
                <div className="col-span-1 bg-[#C7B7A3] p-3 flex flex-col items-center rounded-2xl">
                <FaStar  className=" font-bold text-2xl md:text-2xl lg:text-3xl text-black"/>
                <h1 className="text-sm  md:text-xl lg:text-xl font-bold text-black"> نكهة منميزة</h1>
                <p  className="text-[15px]  text-neutral-800">كل من جرب موكا كوفي فااول ما يشعر بيه من منتجنا هو النكهة المتميزة التي لا تنسى من اول بوق يتذوقه </p>

                </div>
                <div className="col-span-1 bg-[#C7B7A3] p-3 flex flex-col items-center rounded-2xl">
                <FaTruck  className=" font-bold text-2xl md:text-2xl lg:text-3xl text-black"/>
                <h1 className="text-sm  md:text-xl lg:text-xl font-bold text-black">شحن مجاني </h1>
                <p  className="text-[15px]  text-neutral-800"> شحن محاني لاي منطقة داخب منشأة القناطر وقريب بإذن الله سيكون الشحن محاني لخارج منشأه القناطر</p>

                </div>
                

               </div>
               
               
               </div>


                    <div className="col-span-1 h-full p-2 flex justify-center items-center ">
                        <img src={moka} className="w-[400px] h-[400px] object-cover rounded-xl" />
                    </div>
                    
                </div>
            </div>


        </div>

<div className="w-full h-auto bg-[#C7B7A3] ">
<div className="bg-[#C7B7A3] text-[#561C24] py-12 px-4 lg:px-24 mt-20 mb-20 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex-1 text-center lg:text-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            أرقام وإحصائيات موكا كوفي  <br /> من خلال مبيعاتنا وعملائنا
          </h2>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <button className="bg-[#561C24] text-[#C7B7A3] font-semibold px-6 py-3 rounded-full hover:bg-[#C7B7A3] hover:text-[#561C24] hover:border-2 transition-all">
            رؤية المنتجات
          </button>
        </div>
      </div>

      <div className="border-t border-[#561C24]/40 my-6"></div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center gap-6">
        <div>
          <p className="text-3xl font-bold">2K+</p>
          <p className="text-sm">عملية شراء كاملة </p>
        </div>
        <div>
          <p className="text-3xl font-bold">350+</p>
          <p className="text-sm ]">عملاء اساسيين</p>
        </div>
        <div>
          <p className="text-3xl font-bold">4.7⭐</p>
          <p className="text-sm">التقييم من العملاء الجدد</p>
        </div>
      </div>
    </div>
</div>



     <div className=" w-full h-auto bg-[#f4f3f4] p-4">
        <div className="container mx-auto px-4">
            <div className="w-full flex justify-center items-center p-6">
                <h1 className=" text-4xl text-[#561C24] font-[1000]">اراء العملاء </h1>

            </div>


            <div className="w-full h-auto gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
                 
            <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-4">
      <img src={pak1} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-bold text-lg text-gray-500">علي ابوزهرة</h3>
        <p className="text-gray-500 text-sm">مهندس برمجة</p>
      </div>
    </div>
 
                </div>

  <div className="border-b border-yellow-200 my-2"></div>

  <p className="text-gray-600 text-sm leading-relaxed">
    أفضل قهوة في الطعم وجودة عالية جدا جدا والكافيين فيها مظبطوط والقهوة طرش طرش ده غير السعر مقارنه بالسوق هي السعر الافضل بالنسبة للجودة 
  </p>
            </div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
                 
            <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-4">
      <img src={pak1} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-bold text-lg text-gray-500">علي ابوزهرة</h3>
        <p className="text-gray-500 text-sm">مهندس برمجة</p>
      </div>
    </div>
 
                </div>

  <div className="border-b border-yellow-200 my-2"></div>

  <p className="text-gray-600 text-sm leading-relaxed">
    أفضل قهوة في الطعم وجودة عالية جدا جدا والكافيين فيها مظبطوط والقهوة طرش طرش ده غير السعر مقارنه بالسوق هي السعر الافضل بالنسبة للجودة 
  </p>
            </div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
                 
            <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-4">
      <img src={pak1} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-bold text-lg text-gray-500">علي ابوزهرة</h3>
        <p className="text-gray-500 text-sm">مهندس برمجة</p>
      </div>
    </div>
 
                </div>

  <div className="border-b border-yellow-200 my-2"></div>

  <p className="text-gray-600 text-sm leading-relaxed">
    أفضل قهوة في الطعم وجودة عالية جدا جدا والكافيين فيها مظبطوط والقهوة طرش طرش ده غير السعر مقارنه بالسوق هي السعر الافضل بالنسبة للجودة 
  </p>
            </div>

            </div>
            

            

        </div>
     </div>

     <div className="w-full p-4 h-auto mt-15 mb-15 ">
             <div className="container mx-auto px-4">
                 <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-1 md:p-6 lg:p-15">
                     <div className="col-span-1 flex gap-2 items-center p-5">
                     <PiMotorcycle className="text-8xl  lg:text-6xl text-neutral-700" />
                     <div className="flex flex-col ">
                         <h1 className=" font-bold text-black">الشحن مجاني </h1>
                         <p className="text-sm/4 md:text-sm lg:text-sm text-neutral-800">داخل الجلاتمة والمناشي في منشأة القناطر</p>
     
                     </div>
                     </div>
                     <div className="col-span-1 flex gap-2 items-center">
                     <TbPackage  className="text-8xl  lg:text-6xl text-neutral-700" />
                     <div className="flex flex-col ">
                         <h1 className=" font-bold text-black">تغليف ممتاز  </h1>
                         <p className="text-sm/4 md:text-sm lg:text-sm text-neutral-800">  تغليف يليق بعملائنا وطبقا لسلامة الصحة</p>
     
                     </div>
                     </div>
                     <div className="col-span-1 flex gap-2 items-center">
                     <TbWorldCheck                 className="text-8xl  lg:text-6xl text-neutral-700" />
                     <div className="flex flex-col ">
                         <h1 className=" font-bold text-black">جودة عالمية  </h1>
                         <p className="text-sm/4 md:text-sm lg:text-sm text-neutral-800">داخل الجلاتمة والمناشي في منشأة القناطر</p>
     
                     </div>
                     </div>
                     <div className="col-span-1 flex gap-2 items-center">
                     <MdOutlineSupportAgent  className="text-8xl  lg:text-6xl text-neutral-700" />
                     <div className="flex flex-col ">
                         <h1 className=" font-bold text-black"> دعم مستمر </h1>
                         <p className="text-sm/4 md:text-sm lg:text-sm text-neutral-800">تواصل معنا في اي وقت تجدنا على الفور </p>
     
                     </div>
                     </div>
                     
     
                 </div>
             </div>
          </div>
       


        <Footer/>
        
    </div>
  )
}
