import Sidebar from "../../Sidebar/Sidebar";
import "./Api.css";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/accContext";

const History = () => {
  const ctx = useContext(userContext);
  const accAddress = ctx.sharedData.data.accAddress;
  const [bussinessData, setBussinessData] = useState([
    {
      BussinessName: "⚠️Connect Wallet",
      AccountAdress: "⚠️Connect Wallet",
      _id: "⚠️Connect Wallet",
    },
  ]);
  const [flagofbussiness, setFlagofbussiness] = useState(false);
  async function checkerBussiness() {
    const response = await fetch(
      `http://localhost:5000/api/bussiness/getOwner/${accAddress}`
    );
    const data = await response.json();
    console.log(data);
    if (data.lenght != 0) {
      setBussinessData(data);
      setFlagofbussiness(true);
    }
  }
  const copyCode = () => {
    navigator.clipboard.writeText(bussinessData[0]._id);
    alert("Code copied to clipboard!");
  };
  useEffect(() => {
    if (accAddress) {
      checkerBussiness();
    }
  }, [accAddress]);
  return (
    <>
      <div className="mainDiv">
        <Sidebar />

        <div className="Div2">
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "white",
              fontFamily: "cursive",
            }}
          >
            your Api
          </div>
          <div className="card1">
            <div className="gridItems">
              <div>
                Bussiness Name
                <br />
                <span style={{ color: "white" }}>
                  {bussinessData[0].BussinessName}
                </span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                Owner Adress
                <br />
                <span style={{ color: "white" }}>
                  {bussinessData[0].AccountAdress}
                </span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                API
                <br />
                <span style={{ color: "white" }}>{bussinessData[0]._id}</span>
              </div>
            </div>
            <div className="gridItems">
              <div className="button2" onClick={copyCode}>
                Copy API
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
