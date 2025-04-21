import Footer from "../../Componts/Footer";
import Header from "../../Componts/Header";
import hero from "../../assets/imges/hand-1.jpg"
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";





export default function ContactPage() {
  return (
    <div className="w-full">
        <Header/>
        <div className="w-full h-auto relative">
            <img src={hero} className="w-full h-[300px] object-cover"></img>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
            <h1 className="text-4xl font-black">تواصل معنا</h1>
            </div>

        </div>
        
        <div className="w-full h-auto ">
            <div className="mx-auto container px-4">
                <div className=" h-auto p-5 md:p-12  lg:p-15">
                <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white h-full rounded-4xl gap-3 p-6 shadow-2xl">


                    <div className=" h-full col-span-1 p-1 md:p-5 lg:p-5 py-2  md:py-6 lg:py-8 flex flex-col ">
                    <IoMdMail className="text-4xl md:text-8xl lg:text-8xl text-black " />
                    <h1 className=" text-sm md:text-3xl  lg:text-3xl font-[800] text-black">تواصل معنا في اي وقت </h1>
                    <p className=" text-sm mt-3 text-neutral-700">على مدار 24 ساعة في الخدمة تواصل معنا وفي اقرب وقت سيتم الرد عليك كل ماهو عليك فقط املاء البيانات او تواصل عبر البيانات في الاسفل </p>
                    <div className="flex flex-col gap-5 mt-3">
                        <div className=" flex items-center gap-3">
                        <FaFacebookMessenger 
                        className="text-black"/>
                        <p className="text-neutral-800">Moka coffee</p>
                        </div>
                        <div className=" flex items-center gap-3">
                        <FaPhoneFlip className="text-black"/>
                        <p className="text-neutral-800">01069103463</p>
                        </div>
                        <div className=" flex items-center gap-3">
                        <FaMapMarkerAlt className="text-black"/>
                        <p className="text-neutral-800">الجلاتمة-منطقة الصحارى</p>
                        </div>

                    </div>

                    </div>



                    <div className="w-full h-full col-span-1 ">

                        <form className="bg-white p-4 md:p-5 lg:p-8 rounded-lg  w-full ">
                            
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                     <div>
                     <label className="block text-[#3c2a1e] mb-1">الاسم</label>
                   <input  type="text" placeholder="محمد هشام" className="w-full bg-[#E8D8C4] text-[#3c2a1e] placeholder:text-[#5e534a] px-4 py-3 rounded-2xl border-none focus:outline-none"/>
                </div>
                  <div>
            <label className="block text-[#3c2a1e] mb-1">رقم الهاتف</label>
            <input  type="email" placeholder="01069103463" className="w-full bg-[#E8D8C4] text-[#3c2a1e] placeholder:text-[#5e534a] px-4 py-3 rounded-2xl border-none focus:outline-none"/>
          </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#3c2a1e] mb-1">الموضوع</label>
                            <input type="text"  placeholder=" أدخل الموضوع الخاص بك" className="w-full  bg-[#E8D8C4] text-[#3c2a1e] placeholder:text-[#5e534a] px-4 py-3 rounded-2xl border-none focus:outline-none "/>

                        </div>
                        <div className="mb-6">
                            <label className="block text-[#3c2a1e] mb-1"></label>
                            <textarea rows={3} type="text"  placeholder=" أدخل الرسالة التي تود ارسالها  " className="w-full  bg-[#E8D8C4] text-[#3c2a1e] placeholder:text-[#5e534a] px-4 py-3 rounded-2xl border-none focus:outline-none "/>

                        </div>
                        <button className="bg-[#561C24] hover:bg-[#E8D8C4] text-[#E8D8C4] hover:text-[#561C24] font-semibold px-8 py-3 rounded-full transition-all duration-300">ارسل الرسالة</button>
     
                        </form>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}
