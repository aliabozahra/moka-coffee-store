import imge from "../../assets/imges/Croods.png";
import Footer from "../../Componts/Footer";

export default function RegisterPage() {
  return (
    <div className="w-full">
      <div className="mx-auto px-4 container">
        <div className="w-full min-h-screen flex justify-center items-center flex-col p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#561C24] text-center"> قم بإنشاء حساب جديد </h1>

          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
          <div className="bg-[#561C24] rounded-3xl p-6 w-[260px] md:w-[450px] shadow-lg">
  <form className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">الاسم الثنائي</label>
      <input
        type="text"
        placeholder="مثال: محمد أحمد"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">الاسم الرباعي</label>
      <input
        type="text"
        placeholder="مثال: محمد أحمد علي حسن"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">رقم الجوال</label>
      <input
        type="tel"
        placeholder="01xxxxxxxx"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">كلمة المرور</label>
      <input
        type="password"
        placeholder="••••••••"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">تأكيد كلمة المرور</label>
      <input
        type="password"
        placeholder="••••••••"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
    </div>

    <button
      type="submit"
      className="bg-[#C7B7A3] text-[#561C24] py-2 mt-2 rounded-xl font-bold hover:bg-[#561C24] border hover:text-[#E8D8C4] transition"
    >
      إنشاء الحساب
    </button>
  </form>
</div>


            {/* Image */}
            <div>
              <img src={imge} className="hidden md:flex w-[300px] md:w-[400px]" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
