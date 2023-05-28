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


    //this is for sidebar 
    const [HistoryFlag,setHistoryFlag] = useState(false);
    const [ApiFlag, setApiFlag]  = useState(false);
    const [DocsFlag,setDocsFlag]  = useState(false);
   const  sharedData ={
       data ,
       addData,
       HistoryFlag,
       ApiFlag,
       DocsFlag,
       setHistoryFlag,
       setApiFlag,
       setDocsFlag
    }


return (
    <userContext.Provider value={{sharedData}}>
     
     {props.children}

    </userContext.Provider>
)

}
export default Wrapper; 