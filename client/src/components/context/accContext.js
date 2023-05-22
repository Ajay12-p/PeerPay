import {  createContext } from "react";
import { useState } from "react";
 export const userContext = createContext({})
const Wrapper =(props)=>{

   const [data ,setData]= useState({
       Provider :null,
       signer :null ,
       accAddress : null
     

   });

   function addData (provider, signer, accAddress){
    setData((a)=>{
        return{
            provider,
            signer,
            accAddress
        }
    })
    }

   const  sharedData ={
       data ,
       addData
        
    }
   

return (
    <userContext.Provider value={{sharedData}}>
     
     {props.children}

    </userContext.Provider>
)

}
export default Wrapper; 