export default function NotFoundPage() {
    return (
      <div className="min-h-screen bg-[#C7B7A3] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-8xl font-bold text-[#561C24] mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#561C24] mb-4">
          عذرًا، الصفحة غير موجودة
        </h2>
        <p className="text-[#561C24]/80 max-w-md mb-8 text-lg">
          لا تقلق، كل شيء على ما يرام! ربما الصفحة التي تبحث عنها تم نقلها أو لم تعد موجودة.
        </p>
        <a
          href="/"
          className="bg-[#561C24] text-[#E8D8C4] px-6 py-3 rounded-xl font-semibold hover:bg-[#C7B7A3] hover:text-[#561C24] border  transition duration-300"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    );
  }
  