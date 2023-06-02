"use strict";
import React, { useState, useEffect } from "react";
import "./Payment.css";
import Connect from "../../../UI/Buttons/Submit/Submit";
import { useLocation } from "react-router-dom";
import { createNewFlow, getFlowRate, balance } from "../../Superfluid/index";
import { Framework } from "@superfluid-finance/sdk-core";

import { ethers } from "ethers";

const Payment = () => {
  const daixadd = "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f";
  const usdcxadd = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";
  const [userEmail, setUserEmail] = useState("");
  const [Usdcvalue, setUsdcvalue] = useState("");
  const [Daivalue, setDaivalue] = useState("");

  //////// this helps us to set minumum date to today and maximum date to next month////////
  const today = new Date().toISOString().split("T")[0];
  const nextmonth = new Date();
  const nextmin = new Date(
    nextmonth.getFullYear(),
    nextmonth.getMonth() + 1,
    nextmonth.getDate()
  )
    .toISOString()
    .split("T")[0];
  //////// this helps us to set minumum date to today and maximum date to next month////////
  const [qunatity, setQunatity] = useState(1);
  const location = useLocation();
  const [total, setTotal] = useState(100);
  const [Coin, setCoin] = useState("USDC");
  const [isconnected, setIsconnected] = useState(false);
  const [FlowRate, setFlowRate] = useState(0);
  const [timeRange, setTimeRange] = useState(30);
  const [actualflowrate, setActualFlowRate] = useState(0);
  const [startDate, setSartDate] = useState(today);
  const [endDate, setEndDate] = useState(nextmin);
  const [Price, setPrice] = useState(100);
  const [bussiness_flag, setBussiness_flag] = useState(false);
  const [userDetail, setUserDetail] = useState({
    provider: null,
    adddress: "",
    signer: null,
  });
  const queryParams = new URLSearchParams(location.search);
  const queryString = queryParams.get("data");
  const jsonData = JSON.parse(decodeURIComponent(queryString));
  const [ApiData, setApiData] = useState();

  async function CheckBussinessData() {
    if (isconnected == false) return;
    await fetch(" http://localhost:5000/api/Bussiness/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api: jsonData.api,
      }),
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setApiData(res);
        setBussiness_flag(true);
      });
  }

  useEffect(() => {
    walletConnector();

    setFlowRate(getFlowRate(timeRange, total));

    setActualFlowRate(Math.floor(getFlowRate(timeRange, total) / 1000000000));
  }, [total]);

  const handleDate = (e) => {
    const startDate = new Date(e.target.value);
    const endDate = new Date(e.target.value);
    endDate.setDate(endDate.getDate() + timeRange);
    setTimeRange(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );
    setFlowRate(getFlowRate(timeRange, total));
  };

  if (bussiness_flag == false) {
    CheckBussinessData();
  }
  /// this help us to set max date as per the limit we get from the json file//////
  const maxDate = new Date(
    nextmonth.getFullYear(),
    nextmonth.getMonth() + parseInt(jsonData.limit),
    nextmonth.getDate()
  );
  ///////////////////////////// for sending mail to user //////////////////////
  const sendMail = (coinis) => {
    const data = {
      image: jsonData.image,
      subject: "Payment Done",
      text: `Your Payment of ${total} ${Coin} has been done`,
      Buyer: userDetail.adddress,
      seller: jsonData.owner,
      flowrate: FlowRate,
      start: startDate,
      end: endDate,
      coin: coinis,
      Product: jsonData.name,
      Amount: total,
      email: userEmail,
    };
    fetch("https://peerpay-qm1b.onrender.com/Payment/Pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  ///////////////// for connecting wallet/////////////
  const walletConnector = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    balance(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setUserDetail(() => {
      return { provider, signer, adddress: accounts[0] };
    });

    setIsconnected(true);
  };

  ///////////////// for connecting wallet/////////////

  ///  for balancy ///////////
  const balance = async (user) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    // const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    const usdcx = await sf.loadSuperToken(usdcxadd);
    const daix = await sf.loadSuperToken(daixadd);

    const usdctoken = await usdcx.balanceOf({
      account: user,
      providerOrSigner: provider,
    });
    setUsdcvalue(Number(usdctoken / 1e18).toFixed(2));
    const daitoken = await daix.balanceOf({
      account: user,
      providerOrSigner: provider,
    });
    setDaivalue(Number(daitoken / 1e18).toFixed(2));

    // alert(usdctoken, daitoken, matictoken);
  };

  return (
    <div className="mainPayment ">
      <div className="outerFrame">
        <div className="innerFrame">
          <div className="item1 flexItem">
            <h2>Order Sumery</h2>
            <div className="imgofpay">
              <img src={jsonData.image} alt="" />
              <div className="infoOFitem">
                <div className="productname"> {jsonData.name} </div>

                <div className="detailofproduct">
                  Details :- {jsonData.detail}
                </div>
              </div>
            </div>
            <div className="lowerimg">
              <div className="Price">Price = {jsonData.price} </div>
              <div className="qunatity ">
                <p>Quantity</p>
                <button
                  className=""
                  onClick={() => {
                    if (qunatity == jsonData.limit) {
                      alert("you can't buy more than " + jsonData.limit + " ");
                      return;
                    }
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
                Starting Date
                <input
                  type="date"
                  min={today}
                  onChange={(e) => {
                    handleDate(e);
                  }}
                />
                Ending Date
                <input
                  type="date"
                  min={nextmin}
                  max={maxDate}
                  onChange={(e) => {
                    handleDate(e);
                  }}
                />
              </div>
              <div
                style={{
                  color: "red",
                  padding: "10px",
                }}
              >
                *Notice you have to do atleast one month of subscription
              </div>
            </div>
          </div>
          <div className="item2 flexItem">
            <h2>Payment Section</h2>
            <div className="PaymentPart">
              <div>
                {bussiness_flag ? (
                  <div>Bussiness name :- {ApiData[0].BussinessName}</div>
                ) : (
                  "Not Registerd as a bussiness"
                )}
              </div>
              <div className="inputPay">
                Your Address ={" "}
                {isconnected ? (
                  `${userDetail.adddress.substring(
                    0,
                    7
                  )}.........................${userDetail.adddress.substring(
                    38,
                    42
                  )}`
                ) : (
                  <>
                    <div
                      style={{
                        color: "re",
                      }}
                    >
                      You are not Connected
                    </div>
                  </>
                )}
              </div>
              <div className="inputPay">
                Owner Address ={" "}
                {bussiness_flag ? (
                  `${ApiData[0].AccountAdress.substring(
                    0,
                    7
                  )}.........................${ApiData[0].AccountAdress.substring(
                    38,
                    42
                  )}`
                ) : (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    Owner address is not provided{" "}
                  </div>
                )}
              </div>
              <div className="inputPay">
                Your Email
                <input
                  type="email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
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
                    <option value="fUSDCx">{`USDC ${Usdcvalue}`}</option>
                    <option value="fDAIx"> {`FDAIx  ${Daivalue}`} </option>
                  </select>
                </div>
              </div>
              <div>
                {" "}
                ⚠️ Select the coin which have minimum balancy of price of
                product
              </div>
              <div className="inputPay">
                {" "}
                Flow Rate = {actualflowrate} Gwei/s 💸
              </div>
              <div className="inputPay">
                Rent Duration = {timeRange} Days
                {/* {(startDate.getTime() - endDate.getTime) / (1000 * 3600 * 24)} */}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "red",
                  marginTop: "10px",
                }}
              >
                ⚠️Use Polygon Mumbai to performe transaction
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
                    Nextname={`Flow Rate ${Math.floor(
                      FlowRate / 1000000000
                    )}Gwei/s`}
                    Function={async () => {
                      let coinis = "";
                      if (Coin === "fUSDCx") {
                        coinis = usdcxadd;
                      } else {
                        coinis = daixadd;
                      }
                      const data = await createNewFlow(
                        jsonData.owner,
                        FlowRate,
                        Coin
                      );
                      if (data) {
                        sendMail(coinis);
                        alert("Payment Done");
                      }
                    }}
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
