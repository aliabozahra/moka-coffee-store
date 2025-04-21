import { Link } from "react-router-dom";
import Header from "../../Componts/Header";
import Herosection from "../../Componts/HeroSection";
import secendimge from '../../assets/imges/E10D3H35.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiMotorcycle } from "react-icons/pi";
import { TbWorldCheck } from "react-icons/tb";
import { TbPackage } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import pak1 from "../../assets/imges/pak1.png"
import pak2 from "../../assets/imges/pak2.png"
import pak3 from "../../assets/imges/bak3.png"
import pak4 from "../../assets/imges/bak4.png"
import pak5 from "../../assets/imges/pak5.png"
import prodcut from "../../assets/imges/coffee slide.jpg"
import Footer from "../../Componts/Footer";


export default function HomePage() {
    const { ref, inView } = useInView({ triggerOnce: true,threshold: 0.1, });
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.2 });

    

  return (
    <div className="w-full">
      <Header />
      <Herosection />


      <div className="container mx-auto px-4">
        
         <div className="flex flex-col mt-9 gap-4 p-1 md:p-10 lg:p-12 ">

         <div ref={ref} className={`w-full mb-8 flex justify-between transition-all ${inView ? 'animate__animated animate__fadeInUpBig' : 'opacity-0'} `}>
            <h1 className=" sm:text-2xl md:text-3xl  lg:text-3xl text-[#561C24] font-bold">انواع المنتجات  </h1>
            <button className='btn bg-[#E8D8C4] font-bold  text-[#561C24] hover:text-[#E8D8C4] hover:bg-[#561C24] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>


        </div>


         <div ref={ref}  className={`w-full transition-all gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-8
      ${inView ? 'animate__animated animate__fadeInUpBig' : 'opacity-0'}`}
    >

            <div className="h-[400px] w-full relative p-4 gap-5 shadow rounded-2xl col-span-1">
              <div className="w-full h-[310px] flex items-center justify-center overflow-hidden rounded-xl bg-white"> 
              <img src={pak5} className="h-full w-full object-contain"  /> 
              </div>  
                <h1 className="text-2xl md:text-3xl lg:text-3xl absolute bottom-20 md:bottom-20 lg:bottom-20 text-[#561C24] font-bold">قهوة بن </h1>
                <h1 className=" absolute bottom-5 text-[#561C24] "> ذات مذاق خاص قهوة فرديدة من نوعها  </h1>

            </div>
            <div className="h-[400px] w-full relative p-4 gap-5 shadow rounded-2xl col-span-1">
              <div className="w-full h-[310px] flex items-center justify-center overflow-hidden rounded-xl bg-white"> 
              <img src={pak5} className="h-full w-full object-contain"  /> 
              </div>  
                <h1 className="text-2xl md:text-3xl lg:text-3xl absolute bottom-20 md:bottom-20 lg:bottom-20 text-[#561C24] font-bold">قهوة بن </h1>
                <h1 className=" absolute bottom-5 text-[#561C24] "> ذات مذاق خاص قهوة فرديدة من نوعها  </h1>

            </div>
            <div className="h-[400px] w-full relative p-4 gap-5 shadow rounded-2xl col-span-1">
              <div className="w-full h-[310px] flex items-center justify-center overflow-hidden rounded-xl bg-white"> 
              <img src={pak5} className="h-full w-full object-contain"  /> 
              </div>  
                <h1 className="text-2xl md:text-3xl lg:text-3xl absolute bottom-20 md:bottom-20 lg:bottom-20 text-[#561C24] font-bold">قهوة بن </h1>
                <h1 className=" absolute bottom-5 text-[#561C24] "> ذات مذاق خاص قهوة فرديدة من نوعها  </h1>

            </div>

        </div>

       </div>
        
  



      <div className="w-full mb-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-9 gap-6 h-auto md:h-[600px] lg:h-[600px] ">
        <div ref={ref1} className={` transition-all col-span-1 relative h-[250px] md:h-full lg:h-full rounded-3xl w-full  ${inView1 ? 'animate__animated animate__fadeInRight' : 'opacity-0'} `}>
            <img src={secendimge}  className="h-full rounded-3xl"/>
            <div className="absolute inset-0 bg-black/50 rounded-3xl flex gap-4 p-4 md:p-10 lg:p-12 flex-col">
            <h2 className=" sm:text-xl md:text-2xl lg:text-2xl">عروض بجودة عالية </h2>
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl mb-5">واحصل على جميع <br /> 
            <span className="mt-2 md:mt-4 lg:mt-4 inline-block">انواع القهوة والنكهات بأسعار مميزة</span>
          </h1>
         <button className='btn bg-[#E8D8C4]  text-[#561C24] hover:text-[#E8D8C4] hover:bg-[#561C24] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>اطلب الان</button>

            </div>
        </div>

        <div className="col-span-1 grid gap-4 grid-rows-2 h-full">
        <div ref={ref2}   className={` transition-all col-span-1 grid grid-row-2 md:grid-cols-2 lg:grid-cols-2 bg-[#E8D8C4] h-full rounded-3xl ${inView2 ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
            <div   className={` col-span-1 flex flex-col gap-4 p-7   `}>
                <p className="text-xl text-[#561C24]">15%خصم</p>
                <h1 className="text-[16px] sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#561C24]">اي قهوة فلافير من موكا كوفي  </h1>
               <div>
                 <Link className="text-xl flex flex-row items-center gap-1 m-0 text-[#561C24] ">اضغط هنا 
                <IoIosArrowRoundBack className="m-0 text-2xl font-bold" />
                </Link>
               </div>
            </div>
            <div className="col-span-1 p-7 ">
                <img src={pak1} className="w-[500px] md:w[200px] lg:w-[200px]" />
            </div>
        
          </div>
        <div ref={ref3}  className={ ` transition-allcol-span-1 grid grid-row-2 md:grid-cols-2 lg:grid-cols-2 bg-[#E8D8C4] h-full rounded-3xl  ${inView3 ? 'animate__animated animate__fadeInUp' : 'opacity-0'}  `}>
            <div  className={` col-span-1 flex flex-col gap-4 p-7 `} >
                <p className="text-xl text-[#561C24]">15%خصم</p>
                <h1 className="text-[16px] sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#561C24]">اي قهوة فلافير من موكا كوفي  </h1>
               <div>
                 <Link className="text-xl flex flex-row items-center gap-1 m-0 text-[#561C24] ">اضغط هنا 
                <IoIosArrowRoundBack className="m-0 text-2xl font-bold" />
                </Link>
               </div>
            </div>
            <div className="col-span-1 p-7 ">
                <img src={pak2} className="w-[500px] md:w[200px] lg:w-[200px]" />
            </div>
        
          </div>
        

         
        </div>
      </div>


    <div className="w-full p-8 sm:px-15 md:px-25 lg:px-30 flex flex-col">
        <div className="w-full mb-8 flex justify-between">
            <h1 className="sm:text-2xl md:text-3xl  lg:text-3xl text-[#561C24] font-bold">أحدث الأصناف اليوم</h1>
            <button className='btn bg-[#E8D8C4] font-bold  text-[#561C24] hover:text-[#E8D8C4] hover:bg-[#561C24] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>


        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4   ">

            {/*  */}
            <div className="card bg-base-100 col-span-1 rounded-3xl shadow-sm overflow-hidden">
            <figure className="sm:w-[800px] md:w-full lg:w-full h-[300px]">
             <img className="w-full h-full object-cover object-center" src={prodcut} />
        </figure>
  <div className="card-body bg-[#E8D8C4]">
    <h2 className="card-title text-[#561C24]">بن برازيلي</h2>
    <p className="text-[#561C24]">بن برازيلي باعلى جودة  وافضل طعم متاحة في السوق وافضل سعر في السوق  كمان </p>
    <div className="card-actions justify-end">
    <button className='btn bg-[#561C24] font-bold  text-[#E8D8C4] hover:text-[#561C24] hover:bg-[#E8D8C4] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>
    </div>
  </div>
            </div>
            <div className="card bg-base-100 col-span-1 rounded-3xl shadow-sm overflow-hidden">
            <figure className="sm:w-[800px] md:w-full lg:w-full h-[300px]">
             <img className="w-full h-full object-cover object-center" src={prodcut} />
        </figure>
  <div className="card-body bg-[#E8D8C4]">
    <h2 className="card-title text-[#561C24]">بن برازيلي</h2>
    <p className="text-[#561C24]">بن برازيلي باعلى جودة  وافضل طعم متاحة في السوق وافضل سعر في السوق  كمان </p>
    <div className="card-actions justify-end">
    <button className='btn bg-[#561C24] font-bold  text-[#E8D8C4] hover:text-[#561C24] hover:bg-[#E8D8C4] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>
    </div>
  </div>
            </div>
            <div className="card bg-base-100 col-span-1 rounded-3xl shadow-sm overflow-hidden">
            <figure className="sm:w-[800px] md:w-full lg:w-full h-[300px]">
             <img className="w-full h-full object-cover object-center" src={prodcut} />
        </figure>
  <div className="card-body bg-[#E8D8C4]">
    <h2 className="card-title text-[#561C24]">بن برازيلي</h2>
    <p className="text-[#561C24]">بن برازيلي باعلى جودة  وافضل طعم متاحة في السوق وافضل سعر في السوق  كمان </p>
    <div className="card-actions justify-end">
    <button className='btn bg-[#561C24] font-bold  text-[#E8D8C4] hover:text-[#561C24] hover:bg-[#E8D8C4] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>
    </div>
  </div>
            </div>
            <div className="card bg-base-100 col-span-1 rounded-3xl shadow-sm overflow-hidden">
            <figure className="sm:w-[800px] md:w-full lg:w-full h-[300px]">
             <img className="w-full h-full object-cover object-center" src={prodcut} />
        </figure>
  <div className="card-body bg-[#E8D8C4]">
    <h2 className="card-title text-[#561C24]">بن برازيلي</h2>
    <p className="text-[#561C24]">بن برازيلي باعلى جودة  وافضل طعم متاحة في السوق وافضل سعر في السوق  كمان </p>
    <div className="card-actions justify-end">
    <button className='btn bg-[#561C24] font-bold  text-[#E8D8C4] hover:text-[#561C24] hover:bg-[#E8D8C4] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>كل المنتجات </button>
    </div>
  </div>
            </div>
           

           
            {/*  */}


        </div>

    </div>

     </div>  

     <div className="w-full h-auto bg-[#561C24]">
    <div className="container mx-auto px-4 h-full">
        <div className=" h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5 md:p-15 lg:p-30 ">

              <div ref={ref5} className={`col-span-1 w-auto items-center p-8 flex flex-col md:flex-row lg:flex-row gap-9  h-full bg-[#E8D8C4] rounded-4xl ${inView5 ? 'animate__animated animate__fadeInRightBig' : 'opacity-0'}`}>
                <img src={pak3}  className=" w-[170px] md:w-[100px] lg:w-[170px]" />
                <div className="flex flex-col gap-4">
                <p className="text-xl  text-[#561C24]">دوبل</p>
                <h1 className="text-2xl md:text-sm lg:text-2xl md:font-[700] lg:font-bold font-bold  text-[#561C24]"> اشتري باكدج واحصل على الثانية بخصم 10%</h1>
                <div>
                 <Link className="text-2xl md:text-sm lg:text-2xl flex flex-row items-center gap-1 m-0 text-[#561C24] ">اضغط هنا 
                <IoIosArrowRoundBack className="m-0 text-2xl font-bold" />
                </Link>
               </div>
               </div>
              </div>
              <div ref={ref4} className={`col-span-1 w-auto items-center p-8 flex flex-col md:flex-row lg:flex-row gap-9  h-full bg-[#E8D8C4] rounded-4xl ${inView4 ? 'animate__animated animate__fadeInLeftBig' : 'opacity-0'}`}>
                <img src={pak4}  className=" w-[170px] md:w-[100px] lg:w-[170px]" />
                <div className="flex flex-col gap-4">
                <p className="text-xl  text-[#561C24]">دوبل</p>
                <h1 className="text-2xl md:text-sm lg:text-2xl md:font-[700] lg:font-bold font-bold  text-[#561C24]"> اشتري باكدج واحصل على الثانية بخصم 10%</h1>
                <div>
                 <Link className="text-2xl md:text-sm lg:text-2xl flex flex-row items-center gap-1 m-0 text-[#561C24] ">اضغط هنا 
                <IoIosArrowRoundBack className="m-0 text-2xl font-bold" />
                </Link>
               </div>
               </div>
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



     <div className="w-full p-4 h-auto">
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

  );
}
