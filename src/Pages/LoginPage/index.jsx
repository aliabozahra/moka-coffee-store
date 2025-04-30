import { useEffect, useRef } from "react";
import imge from "../../assets/imges/Croods.png";
import Footer from "../../Componts/Footer";
import { usedomain } from "../../store";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
    const{domain}=usedomain();
    const phoneInput =useRef();
    const passwordInput =useRef();
    const navigate =useNavigate()
    const handelLogin = ()=>{
        event.preventDefault();
        let endPoint = `/api/users-clients`;
        let url = domain + endPoint;
        axios.get(url , {
            params:{
                filters:{ 
                  $and:[
                    {
                      phone_Number:{
                        $eq: phoneInput.current.value
                      }
                    },
                    {
                        user_password:{
                        $eq: passwordInput.current.value
                      }
                    }
                  ]
                }
              }
        }).then((res)=>{
            if(res.data.data.length == 1){
                let userInfo = res.data.data[0];
                console.log(userInfo)
                let userData ={
                    userId : userInfo.documentId,
                    userName : userInfo.user_name,
                    userPhone :userInfo.phone_Number,
                    userData_login :userInfo.createdAt.split("T")[0],
                }
                sessionStorage.setItem("userdata",JSON.stringify( userData))
            Swal.fire({
                text :"لقد تم تسجيل دخولك بنجاح",
                icon:"success",
                timer:1200,

            }).then(()=>{
                navigate('/');
            })
            }
            else{
                Swal.fire({
                    text:"لم يتم تسجيل دخولك كلمة المرور او الرقم خطا",
                    icon:"error",
                    timer:1200
                })
            }
            
        })

    }
useEffect(()=>{
    let userInfo = JSON.parse(sessionStorage.getItem("userdata"))
    if(userInfo){
        navigate('/');
    }
},[])

  return (
    <div className="w-full">
        <div className="mx-auto px-4 container">
        <div className="w-full min-h-screen flex justify-center items-center flex-col  p-4">

<h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#561C24] text-center"> قم بتسجيل دخول بياناتك </h1>

<div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-center">
  
    <div className="bg-[#561C24] rounded-3xl p-8 w-[260px] md:w-[450px] shadow-lg">
     <form onSubmit={handelLogin} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-[#C7B7A3] mb-1 font-medium">رقم الجوال</label>
        <input
        ref={phoneInput}
          type="tel"
          placeholder="01xxxxxxxx"
          className="p-3 rounded-xl border border-[#C7B7A3]/30 bg-[#C7B7A3] text-[#561C24] placeholder:text-[#561C24]/70 focus:outline-none "
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[#C7B7A3] mb-1 font-medium">كلمة المرور</label>
        <input
        ref={passwordInput}
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
