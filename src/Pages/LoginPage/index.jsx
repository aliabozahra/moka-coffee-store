import imge from "../../assets/imges/Croods.png";
import Footer from "../../Componts/Footer";

export default function Loginpage() {
  return (
    <div className="w-full">
        <div className="mx-auto px-4 container">
        <div className="w-full min-h-screen flex justify-center items-center flex-col  p-4">

<h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#561C24] text-center"> قم بتسجيل دخول بياناتك </h1>

<div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
  
  <div className="bg-[#561C24] rounded-3xl p-8 w-[260px] md:w-[450px] shadow-lg">
    <form className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-[#C7B7A3] mb-1 font-medium">رقم الجوال</label>
        <input
          type="tel"
          placeholder="01xxxxxxxx"
          className="p-3 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[#C7B7A3] mb-1 font-medium">كلمة المرور</label>
        <input
          type="password"
          placeholder="••••••••"
          className="p-3 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none "
        />
      </div>

      <button
        type="submit"
        className="bg-[#C7B7A3] text-[#561C24] py-3 mt-4 rounded-xl font-bold hover:bg-[#561C24] border hover:text-[#E8D8C4] transition"
        >تسجيل الدخول </button>
    </form>
  </div>

  <div>
    <img src={imge} className="hidden md:flex w-[300px] md:w-[400px]" />
  </div>
</div>

</div>

        </div>

    
    <Footer/>

    </div>
  );
}
