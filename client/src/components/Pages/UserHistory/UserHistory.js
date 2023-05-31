import Sidebar from "../../Sidebar/Sidebar";
import "./History.css";
import Nothing from "./Nothing";
import { DeleteFlow } from "../../Superfluid/index";
import Navbar from "../Navbar/page";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/accContext";
const History = () => {
  const [history, setHistory] = useState([]); //flag for checking if the user has a bussiness or not
  const ctx = useContext(userContext);
  const [flag, setFlag] = useState(true); //flag for checking if the user has a bussiness or not
  const accAddress = ctx.sharedData.data.accAddress;
  async function checkerBussiness() {
    const response = await fetch(`http://localhost:5000/Payment/userinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: accAddress,
      }),
    });
    const data = await response.json();
    console.log(data);
    setHistory(data);
    if (data.lenght != 0) {
      setFlag(true);
    }
  }
  const DeleteComplete = async (id) => {
    const response = await fetch(`http://localhost:5000/Payment/inactive`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  };
  useEffect(() => {
    if (accAddress) {
      checkerBussiness();
    }
  }, [accAddress]);
  return (
    <>
      <Navbar />
      <div className="mainDiv">
        <div className="Div2">
          <div className="titleofHistory"> History</div>
          {flag ? (
            history.map((item) => {
              const flow = Number(item.flowrate) / 1000000000000000000;
              return (
                <div className="card1">
                  <div className="  gridItems">
                    <img src="./imagg.jpg" className="imagg" />
                  </div>
                  <div className="gridItems">
                    <div>
                      item.Product
                      <br />
                      <span style={{ color: "white" }}> {item.Product}</span>
                    </div>
                  </div>
                  <div className="gridItems">
                    <div>
                      flow Rate per second
                      <br />
                      <span style={{ color: "white" }}>{flow}</span>
                    </div>
                  </div>
                  <div className="gridItems">
                    <div>
                      active
                      <br />
                      <span style={{ color: "white" }}>
                        {item.Active ? "yes" : "no"}
                      </span>
                    </div>
                  </div>
                  <div className="gridItems">
                    <div
                      className="button2"
                      onClick={async () => {
                        // DeleteFlow(item.seller, item.coin);
                        DeleteComplete(item._id);
                      }}
                    >
                      {item.Active ? "stop flow" : "flow stopped"}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Nothing />
          )}
        </div>
      </div>
    </>
  );
};
export default History;
