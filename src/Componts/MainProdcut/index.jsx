import { useNavigate } from 'react-router-dom'


export default function MainProdcut({name,img,text,slug,id}) {
  const navigate =useNavigate();
  const handelclick=()=>{
    navigate(`/Products/${slug}`)
    
  }

  return (
    <div onClick={handelclick} className='w-full bg-indigo-600 h-[450px] relative rounded-3xl group shadow-2xl '>
        <img src={img} className='w-full h-full object-cover rounded-3xl ' />
        <div className='absolute w-full h-full bg-black/50  inset-0 rounded-3xl flex flex-col gap-10 p-6 py-12 cursor-pointer group-hover:bg-white/10 transition-all duration-300'>
        <h1 className='text-3xl font-black text-white group-hover:text-black'>{name}</h1>
        <p className='text-white group-hover:text-black group-hover:font-bold'>{text}</p>
        <div className='w-full flex justify-center items-center absolute bottom-10 right-0 '>

        <button onClick={handelclick} className=" bg-[#C7B7A3] text-[#561C24] py-2 px-10 mt-2 rounded-3xl font-bold group-hover:bg-[#561C24] border group-hover:text-[#E8D8C4] transition duration-300"
        >لرؤية المنتجات</button>
        </div>

        </div>



    </div>
  )
}
