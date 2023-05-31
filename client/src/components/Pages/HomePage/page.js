import Navbar from "../Navbar/page";
import "./Home.css";
import { Box, Card, useEditable } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/page";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";
import { userContext } from "../../context/accContext";
import { useContext, useEffect, useState } from "react";
const HomePage = () => {
  const navigate = useNavigate();
  const ctx = useContext(userContext);
  const accAddress = ctx.sharedData.data.accAddress;
  const [flagofbussiness, setFlagofbussiness] = useState(false);
  async function checkerBussiness() {
    const response = await fetch(
      `http://localhost:5000/api/bussiness/getOwner/${accAddress}`
    );
    const data = await response.json();
    console.log(data);
    if (data.lenght != 0) {
      setFlagofbussiness(true);
    }
  }

  useEffect(() => {
    if (accAddress) {
      checkerBussiness();
    }
  }, [accAddress]);
  const PrintName = () => {
    if (flagofbussiness) {
      navigate("/api");
      return;
    } else {
      navigate("/Create-account");
    }
  };
  return (
    <>
      {" "}
      <div className="navhome">
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="Mainbody"
      >
        <div className="body">
          <div
            onClick={() => {
              navigate("/Create-account");
            }}
            className="text-home1"
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

          <div className="body1">
            <div className="a">PeerPay</div>

            <p style={{ marginLeft: "20vh" }}>
              {/* <div className="small-headline">about -- us</div> */}
              <span className="small-headline">What is does ...</span>
              <br />
              <span className="text">
                it is a decetnrlized platform which helps comopany to create a
                safe account so that thay
              </span>
              <br />
              <span className="text">
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
