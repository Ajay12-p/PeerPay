"use client";
import styles from "./page.module.scss";
import Spline from "@splinetool/react-spline";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/accContext";
import { useContext } from "react";
import { ethers } from "ethers";
const Navbar = () => {
  const ctx = useContext(userContext);
  const accAddress = ctx.sharedData.data.accAddress;

  const navigate = useNavigate();
  const walletConnector = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ctx.sharedData.addData(provider, signer, accounts[0]);
  };
  const a = () => {};
  return (
    <>
      <div className={styles.main}>
        <div>
          <div style={{ marginTop: "30px" }}>
            <h1 className={styles.heading}>PEERPAY</h1>

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
                navigate("/UserHistory");
              }}
            >
              Buyer History
            </h3>

            <h3
              className={styles.text}
              onClick={() => {
                navigate("/docs");
              }}
            >
              Docs
            </h3>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginRight: "20px",
          }}
        >
          <Spacebutton
            name={
              accAddress
                ? `${accAddress.substr(0, 5)}...${accAddress.substr(37, 42)}`
                : "connect"
            }
            Function={walletConnector}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
