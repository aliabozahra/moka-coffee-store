import 'swiper/css';
import imge1 from "../../assets/imges/hand-1.jpg"

export default function Herosection() {
  return (
    <div className="w-full z-0  p-2 container mx-auto px-4  flex justify-center items-center ">
      <div
        className="w-full rounded-2xl"
      >
        <div>
        <div class="relative w-full h-[90vh] ">
          <img src={imge1} className="w-full h-full object-cover" >
          </img>
          <div class="absolute inset-0 bg-black/50 grid-cols-3 flex flex-col justify-center p-9">
          <p class=  " text-white text-[20px] col-span-1 font-bold  " >مش كل موكا موكا</p>
              <h1 class="  animate__animated animate__backInRight text-[#E8D8C4] text-[50px] col-span-1 font-[1000] ">موكا كوفي<br></br> بن بجد ...</h1>
              <h1 class="text-white text-1xl col-span-1 font-bold p-2 ">   اطلب الان واستمتع بافضل جودة وافضل سعر  </h1>
              <button className='btn mt-6 bg-[#E8D8C4]  text-[#561C24] hover:text-[#E8D8C4] hover:bg-[#561C24] h-[50px] w-[140px] transition-all p-2 rounded-2xl'>اطلب الان</button>
        </div>
          </div>
          </div>  
        
        
      </div>
    </div>
  )
}
