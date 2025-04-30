import React, { useEffect, useState } from 'react'
import Header from '../../Componts/Header'
import Footer from '../../Componts/Footer'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import imge from "../../assets/imges/Croods.png";
import { FaUserCircle } from 'react-icons/fa';


export default function ProfilePage() {
    const [userInfo ,setUserInfo]=useState({});
    const navigate =useNavigate();
    useEffect (()=>{
        const userInfo =JSON.parse(sessionStorage.getItem("userdata"))
        if(!userInfo){
            Swal.fire({
                    text:"يجب عليك تسجيل الدخول اولا لعرض بيانات حسابك",
                    icon:"error",
                    timer:1600,
                  })
                  navigate("/")
        }else{
            setUserInfo(userInfo)
        }
    },[])
    const handelLogout =()=>{
        sessionStorage.clear();
        Swal.fire({
                text:"تم تسجيل خروج من حسابك بنجاح",
                icon:"success",
                timer:1600,
              }).then(()=>{
                navigate("/login")
              })
    }
  return (
    <div className='w-full'>
        <Header/>

         <div className="w-full">
                <div className="mx-auto px-4 container">
                <div className="w-full h-auto flex flex-col ">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#561C24] text-center">   بياناتك في أمان  </h1>
        
        <div className="flex flex-col-reverse lg:flex-row gap-1  p-1 md:p-2 md:px-2 ">
        <div className="rounded-3xl  p-2 md:p-6 lg:p-8 w-full lg:w-[800px] ">
      <div className=" flex flex-col items-center py-5 md:px-4 text-white rounded-3xl lg:h-[520px]">

        <div className="mb-2 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black">مرحباً، {userInfo.userName}  👋</h1>
          <p className="text-base mt-2 text-gray-700">سعداء بعودتك مجدداً</p>
        </div>

        <div className="bg-white text-[#6D2932] rounded-2xl shadow-lg p-2 md:p-8 w-full flex flex-col items-center">
          
          <div className="flex flex-col items-center mb-6">
            <div className="bg-[#6D2932] rounded-full p-4 text-white mb-2">
              <FaUserCircle size={80} />
            </div>
            <h2 className="text-2xl font-bold">{userInfo.userName}  </h2>
          </div>

          <div className="w-full text-md text-gray-700 space-y-4">
            <div className="flex items-center">
              <span className="font-black text-[#6D2932] ml-2">الاسم :</span>
              <span className="text-black  font-bold">{userInfo.userName}  </span>
            </div>
            <div className="flex items-center">
              <span className="font-black text-[#6D2932] ml-2">رقم الهاتف :</span>
              <span className="text-black font-bold">{userInfo.userPhone} </span>
            </div>
            <div className="flex items-center">
              <span className="font-black text-[#6D2932] ml-2">تاريخ التسجيل :</span>
              <span className="text-black font-bold">{userInfo.userData_login}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8 w-full p-1">
            <button onClick={handelLogout} className="flex-1 bg-[#6D2932] hover:bg-[#5b1f28] text-white py-3 rounded-xl text-lg font-semibold transition">
              تسجيل الخروج
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#6D2932] py-3 rounded-xl text-lg font-semibold transition">
              عرض منتجاتي
            </button>
          </div>

        </div>
      </div>
    </div>
          
            
        
          <div>
            <img src={imge} className="hidden lg:flex w-[300px] md:w-[400px]" />
          </div>

        </div>
        
        </div>
        
                </div>
        
            
          
        
            </div>



        <Footer/>
    </div>
  )
}
