import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useContext } from "react";
// import Sidebar from "../Navbar/page";
import Sidebar from "../../Sidebar/Sidebar";
import Docs from "../docs/page";
import ApiPage from "../Api/page";
import { userContext } from "../../context/accContext";
import {dashRoute} from "../../dahsRoute/page"
const Dashbord = () => {

 const ctx = useContext(userContext);
 const historyFlag = ctx.sharedData.HistoryFlag;
 const ApiFlag = ctx.sharedData.ApiFlag;
 const DocsFlag  = ctx.sharedData.DocsFlag;

  return (
    <div className="BodyofDashboard">
      <div className={styles.div1}>

      <Sidebar /> 

    
        
    </div>
    </div>
  );
};

export default Dashbord;
