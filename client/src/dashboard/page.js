
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
 import { Box, Card } from "@chakra-ui/react";
import { useRef } from "react";
import Nav from "../Nav/page";
const Dashbord = () => {


const [flag,setFlag] = useState(false)
  const bussinuss_Name = useRef("");
  const Account_No = useRef("");
  console.log(bussinuss_Name);
  console.log(Account_No)
    return (
        <>
         <Box  background=" linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))"
        
        //  circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%
         height="50vh">

          <Nav/>
            <div className={styles.main}>
          

                <div className={styles.compName}>
                    <div className={styles.a}>


                        <div className={styles.companeyName}>
                            companey Name
                        </div>
                        <div 
                          onClick={()=>{
                             
                              setFlag(true)
                              
                            }}
                        className={styles.join}>
                            create account

                        </div>
                    </div>
                    <div className={styles.data}>
                        part1
                    </div>
                    <div className={styles.data}>
                        part2
                    </div>



                </div>
      {
        flag?
     
         ( <div  className={styles.modalContainer}>
            
           <div  className={styles.model}>
               
          
               <div style={{marginTop:"5px"}}>
           
           
                  <h3>bussinuss Name</h3>
                <input className={styles.input} ref={bussinuss_Name}/>
                </div>
                <div style={{marginTop:"5px"}}>
                <h3>Account Name </h3>
                <input className={styles.input} ref={Account_No}/>
                </div>
               

               <button onClick={()=>{
                setFlag(false)
               }}
               className={styles.button}>
               Submit
           </button>
           </div>
          
          </div>
      ): <></>}

 


            </div>
            </Box>
         
            <div className={styles.aligncard}>
     

                <Card mt="10vh"
                border={5}

                mb={5}
                borderColor="balck"
                height="50vh"

                // background =" radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"
                border-borderRadius= {8}
                sx={{
                    background:
                      'linear-gradient( #fff 0 0) padding-box, linear-gradient(to right top, #555555, #404040, #2c2c2c, #1a1a1a, #000000) border-box',
                    border: '3px solid transparent',
            
                  }}
                //   background-image: linear-gradient(to right top, #555555, #404040, #2c2c2c, #1a1a1a, #000000);

                  boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      borderRadius="26px"
                
                >

               
                <div className={styles.card}>
                    <div className={styles.body}>
                        <div className={styles.bodytext}>
                            companey Name
                        </div>
                        <div className={styles.bodytext}>
                            Active
                        </div>
                    </div>

                </div>
                </Card>
            </div>
            


        </>
    )
}

export default Dashbord;
