import Navbar from "../Navbar/page";
import styles from "./page.module.css";
import { Box, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/page";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className={styles.navhome}>
        <Navbar />
      </div> */}
      <Nav />

      <div className={styles.body}>
        <div className={styles.fixedbg}>
          <div
            onClick={() => {
              navigate("/Create-account");
            }}
            className={styles.text1}
          >
            create your bussinuss account ...
          </div>
        </div>

        <div className={styles.body1}>
          <div className={styles.a}>limitless</div>

          <p style={{ marginLeft: "20vh" }}>
            about -- us
            <span className={styles.text}>
              What is does ... it is a decetnrlized platform
            </span>
            <br />
            <span className={styles.text}>
              which helps comopany to create a safe account so that thay
            </span>
            <br />
            <span className={styles.text}>
              can make transection between them using superfluid very easily...
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
