import { create } from "zustand";

export const usedomain = create (()=>(
 {
    domain : "http://localhost:1337",
  }
));

export const useData = create ((set) =>(
 {
    data: [],
    setDataMain: (mainData) => set(() => ({ data: mainData })),
 }
));
export const useSupData =create((set)=>(
   {
      sup_data :[],
      setSup_data :(supData)=> set(()=>({sup_data: supData})),
   }
));
export const useCart =create ((set)=>({

   productInCart : [ ],

   deleteProduct : (documentId)=>(set ((state)=>{
      let copyarr =[...state.productInCart];
      let index = copyarr.findIndex(el=>el.product_identifier == documentId);
      copyarr.splice(index,1);

      return {productInCart :copyarr};
   })),

    deCremantQty : (documentId)=>(set((state)=>{
      let copyarr =[...state.productInCart];
      let index = copyarr.findIndex(el=>el.product_identifier == documentId);
      if( copyarr[index].qty>1){
         copyarr[index].qty--;
      }else{
         copyarr.splice(index,1);
      }
      return {productInCart :copyarr};

    })),
    inCremantQty : (documentId)=>(set((state)=>{
      let copyarr =[...state.productInCart];
      let index = copyarr.findIndex(el=>el.product_identifier == documentId);
      
         copyarr[index].qty++;
     
      return {productInCart :copyarr};

    })),
    addToCart : (product)=>(set ((state)=>{
      let coptarr =[...state.productInCart];
      let obj = coptarr.find(el => el.product_identifier == product.product_identifier);
      if(obj){
         state.inCremantQty(product.product_identifier)
      }else{
         coptarr.push(product);
      }
      return {productInCart : coptarr};

    }))
   


}))