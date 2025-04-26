import { useRef, useState } from "react";
import imge from "../../assets/imges/Croods.png";
import Footer from "../../Componts/Footer";
import { usedomain } from "../../store";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



export default function RegisterPage() {

  const{domain}=usedomain();
  const nameInput =useRef();
  const phoneInput =useRef();
  const passwordInput =useRef();
  const confirmPasswordInput = useRef();
  const [checkName,setCheckName] =useState("");
  const [checkPhone,setcheckPhone] =useState("");
  const [checkPassword,setCheckPassword] =useState("");
  const [checkconfirmPass,setCheckconfirmPass] =useState("");

  const navigate =useNavigate();


  const handelRegister =async()=>{
    event.preventDefault();

  const name = nameInput.current.value;
  const password = passwordInput.current.value;
  const confirmPassword = confirmPasswordInput.current.value;
  const phone = phoneInput.current.value;
  let vaild =true;


  const phoneRegex = /^01[0-9]{9}$/;
  if(!phoneRegex.test(phone)){
    setcheckPhone("يجب ان يتكون رقم هاتف من 11 رقم ");
    vaild=false;
  }else{
    setcheckPhone("");

  }

  const nameregex = /^.{8,}$/ ;
  if(!nameregex.test(name)){
    setCheckName("يجب ان يتكون الأسم من أكثر من 8 حروف");
    vaild=false;
  }else{
    setCheckName("");

  }
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if(!passwordRegex.test(password)){
    setCheckPassword("يجب ان يحتوى الباسورد  على الاقل على حرف كابيتل مع رقم ويكون مكون من 8 احرف ");
    vaild=false;
  }else{
    setCheckPassword("");

  }
  
  if(password!=confirmPassword){
    setCheckconfirmPass("يجب ان يكون الباسورد متطابق");
    vaild=false;
  }else{
    setCheckconfirmPass("");
  }


  if(!vaild) return;


    let endPoint ='/api/users-clients';
    let url = domain +endPoint;
    
    let data ={
      user_name :nameInput.current.value,
      phone_Number: phoneInput.current.value,
      user_password:passwordInput.current.value,
    }
    try {
      await  axios.post(url ,{data:data});
      Swal.fire({
        title:"تم إنشاء حساب لك بنجاح",
        icon:"success",
        timer:1200,
      }).then(()=>{
        navigate("/login")
      })

    }catch(err) {
      if (err.response?.status === 400) {
        Swal.fire({
          title: "هذا الرقم تم تسجيله مسبقًا، جرّب رقمًا آخر",
          icon: "error",
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "لم يتم تسجيل الحساب، حاول مرة أخرى",
          icon: "error",
          timer: 1500,
        });
    }}

  
  }


  
  return (
    <div className="w-full">
      <div className="mx-auto px-4 container">
        <div className="w-full min-h-screen flex justify-center items-center flex-col p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#561C24] text-center"> قم بإنشاء حساب جديد </h1>

          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
          <div className="bg-[#561C24] rounded-3xl p-6 w-[260px] md:w-[450px] shadow-lg">
  <form onSubmit={handelRegister} className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">الاسم الثنائي</label>
      <input
      ref={nameInput}
        type="text"
        placeholder="مثال: محمد أحمد"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
      {
        checkName&&(<span className="text-red-500 text-sm mt-1">{checkName}</span>)
      }
    </div>

   

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">رقم الجوال</label>
      <input
      ref={phoneInput}
        type="tel"
        placeholder="01xxxxxxxx"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
      {
        checkPhone &&( <span className="text-red-500 text-sm mt-1">{checkPhone}</span> )
      }
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">كلمة المرور</label>
      <input
       ref={passwordInput}
        type="password"
        placeholder="••••••••"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
      {
        checkPassword&&(<span className="text-red-500 text-sm mt-1">{checkPassword}</span>)
      }
    </div>

    <div className="flex flex-col">
      <label className="text-[#C7B7A3] mb-1 font-medium">تأكيد كلمة المرور</label>
      <input
     
      ref={confirmPasswordInput}
        type="password"
        placeholder="••••••••"
        className="p-2 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none"
      />
      {
        checkconfirmPass&&(<span className="text-red-500 text-sm mt-1">{checkconfirmPass}</span>)
      }
    </div>

    <button
      type="submit"
      className="bg-[#C7B7A3] text-[#561C24] py-2 mt-2 rounded-xl font-bold hover:bg-[#561C24] border hover:text-[#E8D8C4] transition"
    >
      إنشاء الحساب
    </button>
  </form>
</div>


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
