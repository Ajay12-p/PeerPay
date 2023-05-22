import React, { useState } from "react";
import "./Payment.css";
import Connect from "../../../UI/Buttons/Submit/Submit";
import Pay from "../../../UI/Buttons/spacebutton/Spacebutton";
import Product from "../../Media/Phone.jpg";
import { ethers } from "ethers";
const Payment = () => {
  const today = new Date().toISOString().split("T")[0];
  const nextmonth = new Date();
  const nextmin = new Date(
    nextmonth.getFullYear(),
    nextmonth.getMonth() + 1,
    nextmonth.getDate()
  )
    .toISOString()
    .split("T")[0];
  const [qunatity, setQunatity] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [total, setTotal] = useState(100);
  const [Coin, setCoin] = useState("USDC");
  const [isconnected, setIsconnected] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [FlowRate, setFlowRate] = useState(0);
  const [timeRange, setTimeRange] = useState(6);
  const [details, setDetails] = useState(
    "Create the image file: You can use an image editing tool like Adobe Photoshop, GIMP, or an online image editor to create the image. Set the canvas size to the desired dimensions and add the text in a way that looks visually appealing"
  );
  const [Price, setPrice] = useState(100);
  const [userDetail, setUserDetail] = useState({
    provider: null,
    adddress: "",
    signer: null,
  });
  ///////////////// for connecting wallet/////////////
  const walletConnector = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setUserDetail(() => {
      return { provider, signer, adddress: accounts[0] };
    });
    setIsconnected(true);
  };

  ///////////////// for connecting wallet/////////////

  return (
    <div className="mainPayment ">
      <div className="outerFrame">
        <div className="innerFrame">
          <div className="item1 flexItem">
            <h2>Order Sumery</h2>
            <div className="imgofpay">
              <img src={Product} alt="" />
              <div className="infoOFitem">
                <div className="productname">Mircromax Ultra Pro</div>

                <div className="detailofproduct">Details :- {details}</div>
              </div>
            </div>
            <div className="lowerimg">
              <div className="Price">Price = {Price} </div>
              <div className="qunatity ">
                <p>Quantity</p>
                <button
                  className=""
                  onClick={() => {
                    setQunatity(qunatity + 1);
                    setTotal((qunatity + 1) * Price);
                  }}
                >
                  +
                </button>
                <h3 className="numquan">{qunatity}</h3>
                <button
                  className=""
                  onClick={() => {
                    if (qunatity == 1) return;
                    setQunatity(qunatity - 1);
                    setTotal((qunatity - 1) * Price);
                  }}
                >
                  -
                </button>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    justifyContent: "flex-end",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Total Price = {total}
                </div>
              </div>
              <div for="minDate" className="inputDate">
                Starting Date <input type="date" min={today} />
                Ending Date <input type="date" min={nextmin} />
              </div>
              <div className="inputPay">
                {" "}
                Notice you have to do atleast one month as a subscription
              </div>
            </div>
          </div>
          <div className="item2 flexItem">
            <h2>Payment Section</h2>
            <div className="PaymentPart">
              <div className="inputPay">
                Your Address ={" "}
                {`${userDetail.adddress.substring(
                  0,
                  7
                )}.........................${userDetail.adddress.substring(
                  38,
                  42
                )}`}
              </div>
              <div className="inputPay">
                Owner Address =
                {`${userDetail.adddress.substring(
                  0,
                  7
                )}.........................${userDetail.adddress.substring(
                  38,
                  42
                )}`}
              </div>
              <div className="inputPay">
                Your Email
                <input type="email" />
              </div>
              <div className="inputCoin">
                <div> Coin</div>
                <div className="selectofinput">
                  <select
                    onClick={(e) => {
                      setCoin(e.target.value);
                      console.log(e.target.value);
                    }}
                    name="Coin"
                    id="Coin"
                  >
                    <option value="USDC"> USDC</option>
                    <option value="FDAIx"> FDAIx</option>
                  </select>
                </div>
              </div>
              <div className="inputPay"> Flow Rate = {FlowRate}</div>
              <div className="inputPay">
                {" "}
                Rent Duration = {timeRange} Days
                {/* {(startDate.getTime() - endDate.getTime) / (1000 * 3600 * 24)} */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  width: "100%",
                  gap: "10px",
                }}
              >
                {isconnected ? (
                  <Connect
                    Name={`Pay ${total}$ ${Coin}`}
                    Nextname={`Flow Rate ${FlowRate}`}
                    Function={walletConnector}
                  />
                ) : (
                  <Connect
                    Name="Connect Wallet❓"
                    Nextname={"One Step Close"}
                    Function={walletConnector}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
