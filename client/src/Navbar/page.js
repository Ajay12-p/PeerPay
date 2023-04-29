'use client';
import  styles from "./page.module.scss"
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    const a =() =>{
        navigate("./dashbord")
    }
     return (
        <>
            <div  className={styles.main}>
            <div >
                <div style={{ marginTop:"30px"}} >
                     <h1 className={styles.heading}>
                     Limit-Less
                     </h1>
           
{/* <Spline scene="https://prod.spline.design/DjIcmxwy1aGaTtUO/scene.splinecode"/> */}
                </div>
                </div>
            
            
           

             <div >
              
                 <div style={{display:"flex"  }}>
               
               
                <h3  className={styles.text} onClick={()=>{
                    a();
                }} >
                    Dashbord
                </h3>
               
                <h3  className={styles.text} onClick={()=>{
                    a();
                }} >
                   Docs
                </h3>
                <h3  className={styles.text} onClick={()=>{
                    a();
                }} >
                 Support
                </h3>
              

                <h3  className={styles.text}>
                    Homepage
                </h3>
                   
                </div>
            </div>
           
         
            <div className={styles.button}>
        CONNECT YOUR WALLET...
               
            </div>
            
           
            
            </div>
        </>
    )
}

export default Navbar;