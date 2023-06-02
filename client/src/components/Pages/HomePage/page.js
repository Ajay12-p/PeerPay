import Navbar from "../Navbar/page";
import "./Home.css";
import { Box, Card, useEditable } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/page";
import PeerPay from "peerpaysdk";
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
      `https://peerpay-qm1b.onrender.com/api/bussiness/getOwner/${accAddress}`
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
          <div className="buttondemo">
            peerPay button Demo
            <div>
              <PeerPay
                price="100"
                limit="6"
                api="64787223455078ede090390c"
                image="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?w=996&t=st=1685560203~exp=1685560803~hmac=30c7d57288d70d533eecd8ed770da7f2978b1643284141b7eee679e51b480f13"
                name="Mobile Phone"
                detail="Detail of product"
                maxtime="180"
                backgroundColor="#fff"
                color="#000"
                owner="0x645D85678C2d4C56c17F3579a278C2bE2D73119c"
              />
            </div>
          </div>

          <div className="body1">
            <div className="a">PeerPay</div>

            <p
              style={{
                marginLeft: "30px",
                marginRight: "50px",
                maxWidth: "600px",
              }}
            >
              {/* <div className="small-headline">about -- us</div> */}
              <span className="small-headline">
                "Peer Pay: Unleash the Flow of Superfluid Payments in the Web2
                Era!"
              </span>
              <br />
              <br />
              <br />
              <span className="text">
                Peer Pay is a groundbreaking payment gateway designed
                specifically for Web2 users, revolutionizing the way
                transactions are conducted online. With Peer Pay, you can
                seamlessly integrate the power of Superfluid Payments into your
                applications, unlocking a new level of efficiency and
                flexibility in financial transactions.
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
