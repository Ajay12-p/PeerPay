import React, { useState } from "react";
import "./Payment.css";
import Product from "../../Media/Phone.jpg";
const Payment = () => {
  const [qunatity, setQunatity] = useState(1);
  const [startDate, setStartDate] = useState("today");
  const [total, setTotal] = useState(100);
  const [endDate, setEndDate] = useState(" parso");
  const [timeRange, setTimeRange] = useState(6);
  const [useraddress, setUserAddress] = useState(
    "0x1234567890123456789012345678901234567890"
  );
  const [details, setDetails] = useState(
    "Create the image file: You can use an image editing tool like Adobe Photoshop, GIMP, or an online image editor to create the image. Set the canvas size to the desired dimensions and add the text in a way that looks visually appealing"
  );
  const [Price, setPrice] = useState(100);
  return (
    <div className="mainPayment ">
      <div class="overlay">
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
        <div className="bg-2">
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
          <div className="">powered by Superfluid</div>
        </div>
      </div>
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

              <div className="inputDate">
                Starting Date <input type="date" /> Ending Date{" "}
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="item2 flexItem">
            <h2>Payment</h2>
            <div className="PaymentPart">
              <div className="inputPay">
                Your Address ={" "}
                {`${useraddress.substring(0, 4)}...${useraddress.substring(
                  38,
                  42
                )}`}
              </div>

              <div className="inputPay">
                Your Email
                <input type="email" />
              </div>

              <div className="inputPay">
                Coin
                <select name="Coin" id="Coin">
                  <option className="selectofinput"> USDC</option>
                  <option className="selectofinput"> FDAIx</option>
                </select>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
