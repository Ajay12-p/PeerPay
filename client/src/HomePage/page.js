
import Navbar from "../Navbar/page";
import styles from "./page.module.css"
import { Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const  HomePage =()=>{
    const navigate = useNavigate();
    return (
        <>
         <div className ={styles.body}>
           

            <div  className={styles.fixedbg}>
              
           <Navbar/>
              
               
           <div  onClick={()=>{
            navigate("/Create-account");
        }} className={styles.text1} style={{placeItems:"center",justifyContent:"center" ,marginLeft:"55vh",marginTop:"17vh"}}>
create your bussinuss account ...

</div>


            </div>
           
            <div  className={styles.body1}>
        <div className={styles.a}>
           limitless
        </div>

         <p  style={{marginLeft : "20vh"}}>
  
            about  --  us 
             <span className={styles.text}>

           
           What  is does ... 
           it is  a decetnrlized platform   
           </span>
           <br/>
           <span className={styles.text}>

        
         
           which helps comopany to create a safe account so that thay 
        
           </span>
            
           <br/>
           <span className={styles.text}>
          can make transection between them using superfluid 
          very easily...
           </span>
           
           </p>
         
     </div>
     
         </div>
         <div className="background">
        wtoi
     </div>
       
        </>
    )
}

export default HomePage;