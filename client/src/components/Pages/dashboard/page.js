import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Requirement } from "trychecker";
// import Sidebar from "../Navbar/page";
import Sidebar from "../../Sidebar/Sidebar";
const Dashbord = () => {
  return (
    <div className="BodyofDashboard">
      <Sidebar />
      dashboard
      <Requirement />
    </div>
  );
};

export default Dashbord;
