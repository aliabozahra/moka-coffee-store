import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function SupProduct({name ,img,short,weight,long, price ,id,slug}) {
  const navigate =useNavigate();
  const handelclick =()=>{
    navigate (`/Products/${slug}/${id}`)
  }
  return (
    <div onClick={handelclick} className='w-full flex justify-center cursor-pointer' >
        <div className="card bg-white  w-full shadow-sm">
  <figure className='h-full w-full'>
    <img
    className='w-full h-48 object-cover'
      src={img}
       />
  </figure>
  <div className="card-body ">
    <div className='flex justify-between px-3'>
    <h2 className="text-xl font-bold  text-black">{name}</h2>
    <div className="text-end">
              <div className="text-sm text-neutral-800">السعر</div>
              <div className="text-[#A94438] font-extrabold text-lg">{price} ج.م</div>
            </div>  
              </div>

    <p className=' text-neutral-800'>{short}</p>
    
    <div className="flex justify-between items-center mt-4">
            <div className="badge bg-amber-500 text-white font-bold px-4 p-2 text-sm rounded">{weight} </div>
            <button className="btn bg-[#6D2932] text-white hover:bg-[#561C24] rounded-3xl px-7 lg:px-5">
              اشتري
            </button>
          </div>
  </div>
</div>
    </div>
  )
}
