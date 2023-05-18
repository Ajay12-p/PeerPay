import Navbar from "../Navbar/page";
import styles from "./page.module.css";
import { Box, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/page";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";

const HomePage = () => {
  const navigate = useNavigate();

  const PrintName = () => {
    navigate("/Create-account");
  };
  return (
    <>
      {" "}
      <div className={styles.navhome}>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="Mainbody"
      >
        <div className={styles.body}>
          <div
            onClick={() => {
              navigate("/Create-account");
            }}
            className={styles.text1}
          >
            create your bussinuss account ...
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "10vh",
              paddingTop: "10vh",
              background: "transparent",
              zIndex: "-1",
            }}
          >
            <Spacebutton name="LET'S GO...." Function={PrintName} />
          </div>

          <div className={styles.body1}>
            <div className={styles.a}>PeerPay</div>

            <p style={{ marginLeft: "20vh" }}>
              {/* <div className="small-headline">about -- us</div> */}
              <span className="small-headline">What is does ...</span>
              <br />
              <span className={styles.text}>
                it is a decetnrlized platform which helps comopany to create a
                safe account so that thay
              </span>
              <br />
              <span className={styles.text}>
                can make transection between them using superfluid very
                easily...
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
