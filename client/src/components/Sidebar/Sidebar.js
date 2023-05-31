import styles from "./Sidebar.module.css";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/accContext";
import Spacebutton from "../../UI/Buttons/spacebutton/Spacebutton";
import Docs from "../Pages/docs/page";
import { ethers } from "ethers";
const Sidebar = () => {
  const ctx = useContext(userContext);
  const setHistoryFlag = ctx.sharedData.setHistoryFlag;
  const setApiFlag = ctx.sharedData.setApiFlag;
  const setDocsFlag = ctx.sharedData.setDocsFlag;
  const historyFlag = ctx.sharedData.HistoryFlag;
  const ApiFlag = ctx.sharedData.ApiFlag;
  const DocsFlag = ctx.sharedData.DocsFlag;

  const accAddress = ctx.sharedData.data.accAddress;

  const walletConnector = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ctx.sharedData.addData(provider, signer, accounts[0]);
  };

  return (
    <div>
      <div className={styles.sidebar}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Link to="/">
            <div className={styles.button}>
              <div> Home</div>
            </div>
          </Link>
          <Link to="/api">
            <div className={styles.button}>
              <div> API</div>
            </div>
          </Link>
          <Link to="/history">
            <div className={styles.button}>
              <div>HISTORY</div>
            </div>
          </Link>
          <Link to="/docs">
            <div className={styles.button}>
              <div> HOW ITWORK </div>
            </div>
          </Link>
        </div>
        {/* <div
          className={styles.button}
          style={{
            marginBottom: "30px",
          }}
          onClick={walletConnector}
        >
          {accAddress
            ? `${accAddress.substr(0, 5)}...${accAddress.substr(37, 42)}`
            : "connect"}
        </div> */}
        <div
          style={{
            marginBottom: "50px",
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
    </div>
  );
};

export default Sidebar;
