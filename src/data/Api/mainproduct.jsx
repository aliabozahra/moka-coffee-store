import axios from "axios"

export const getMainProduct = async (domain)=>{
    try{
    let url =domain +'/api/main-products';
    const res =await axios.get(url,{
        params :{
            populate :"*",
        }
        
    })
    return res.data.data;
}catch (err){
    console.log(err)
}
}