import styles from "./page.module.scss";

// import Sidebar from "../Navbar/page";
import Sidebar from "../../Sidebar/Sidebar";

const Dashbord = () => {
  return (
    <div className="BodyofDashboard">
      <div className={styles.div1}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashbord;
