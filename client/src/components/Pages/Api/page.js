import Sidebar from "../../Sidebar/Sidebar";
import "./Api.css";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/accContext";
import { useNavigate } from "react-router-dom";
const History = () => {
  const ctx = useContext(userContext);
  const navigate = useNavigate();
  const accAddress = ctx.sharedData.data.accAddress;
  const [bussinessData, setBussinessData] = useState([]);
  const [flagofbussiness, setFlagofbussiness] = useState(false);
  async function checkerBussiness() {
    const response = await fetch(
      `http://localhost:5000/api/bussiness/getOwner/${accAddress}`
    );
    const data = await response.json();
    console.log(data);
    if (data.length != 0) {
      setBussinessData(data);
      setFlagofbussiness(true);
    } else {
      alert("you don't have a bussiness");
      navigate("/Create-account");
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
          <div className="cardofapi">
            <div className="gridItems">
              <div>
                Bussiness Name
                <br />
                <span style={{ color: "white" }}>
                  {flagofbussiness
                    ? bussinessData[0].BussinessName
                    : "⚠️ connect wallet"}{" "}
                </span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                Owner Adress
                <br />
                <span style={{ color: "white" }}>
                  {flagofbussiness
                    ? bussinessData[0].AccountAdress
                    : "⚠️ connect wallet"}
                </span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                API
                <br />
                <span style={{ color: "white" }}>
                  {flagofbussiness ? bussinessData[0]._id : "⚠️ connect wallet"}
                </span>
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
