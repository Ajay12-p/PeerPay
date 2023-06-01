import Sidebar from "../../Sidebar/Sidebar";
import "./history.css";
import Nothing from "./Nothing";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/accContext";

const History = () => {
  const ctx = useContext(userContext);
  const [sellerData, setSellerData] = useState([]);
  const [flag, setFlag] = useState(false); //flag for checking if the user has a bussiness or not
  const accAddress = ctx.sharedData.data.accAddress;
  useEffect(() => {
    if (accAddress) {
      checkerBussiness();
    }
  }, [accAddress]);

  async function checkerBussiness() {
    const response = await fetch(
      `http://localhost:5000/Payment/bussinesspayment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Seller: accAddress,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    setSellerData(data);

    if (data.length != 0) {
      setFlag(true);
    }
  }
  return (
    <>
      <div className="mainDiv">
        <Sidebar />

        <div className="Div2">
          <div className="titleofHistory"> History</div>
          {flag ? (
            sellerData.map((item) => {
              const flow = Number(item.flowrate) / 1000000000000000000;
              return (
                <div className="card1">
                  <div className="  gridItems">
                    <img src={item.image} className="imagg" />
                  </div>
                  <div className="gridItems">
                    <div>
                      Name
                      <br />
                      <span style={{ color: "white" }}>{item.Product}</span>
                    </div>
                  </div>
                  <div className="gridItems">
                    <div>
                      price
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
                  {/* <div className="gridItems">
                    <div className="button2">cancle</div>
                  </div> */}
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
