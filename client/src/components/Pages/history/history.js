import Sidebar from "../../Sidebar/Sidebar";
import "./history.css";
import Nothing from "./Nothing";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/accContext";
const History = () => {
  const ctx = useContext(userContext);
  const [flag, setFlag] = useState(false); //flag for checking if the user has a bussiness or not
  const accAddress = ctx.sharedData.data.accAddress;
  async function checkerBussiness() {
    const response = await fetch(
      `http://localhost:5000/api/bussiness/getOwner/${accAddress}`
    );
    const data = await response.json();
    console.log(data);
    if (data.lenght != 0) {
      setFlag(true);
    }
  }
  return (
    <>
      <div className="mainDiv">
        <Sidebar />

        <div className="Div2">
          <div className="titleofHistory"> History</div>
          <div className="card1">
            <div className="  gridItems">
              <img src="./imagg.jpg" className="imagg" />
            </div>
            <div className="gridItems">
              <div>
                Name
                <br />
                <span style={{ color: "white" }}>mathue</span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                price
                <br />
                <span style={{ color: "white" }}>30€</span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                active
                <br />
                <span style={{ color: "white" }}>yes</span>
              </div>
            </div>
            <div className="gridItems">
              <div className="button2">cancle</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
