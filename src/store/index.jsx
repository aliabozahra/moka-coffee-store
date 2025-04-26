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
))
export const useSupData =create((set)=>(
   {
      sup_data :[],
      setSup_data :(supData)=> set(()=>({sup_data: supData})),
   }
))