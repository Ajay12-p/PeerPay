"use client";
import styles from "./page.module.scss";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const a = () => {};
  return (
    <>
      <div className={styles.main}>
        <div>
          <div style={{ marginTop: "30px" }}>
            <h1 className={styles.heading}>Peer-Pay</h1>

            {/* <Spline scene="https://prod.spline.design/DjIcmxwy1aGaTtUO/scene.splinecode"/> */}
          </div>
        </div>

        <div>
          <div style={{ display: "flex" }}>
            <h3
              className={styles.text}
              onClick={() => {
                navigate("/");
              }}
            >
              Homepage
            </h3>
            <h3
              className={styles.text}
              onClick={() => {
                navigate("/dashbord");
              }}
            >
              Dashbord
            </h3>

            <h3
              className={styles.text}
              onClick={() => {
                navigate("/dashbord");
              }}
            >
              Docs
            </h3>
            <h3
              className={styles.text}
              onClick={() => {
                navigate("/dashbord");
              }}
            >
              Support
            </h3>
          </div>
        </div>

        <div className={styles.button}>CONNECT YOUR WALLET...</div>
      </div>
    </>
  );
};

export default Navbar;
