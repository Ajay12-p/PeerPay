import React from "react";
import "./Payment.css";
import Product from "../../Media/Phone.jpg";
const Payment = () => {
  return (
    //waht we  want
    // 1. start date end date  3. time range
    <div className="mainPayment">
      <div className="outerFrame">
        <div className="innerFrame">
          <div className="leftgrid">
            <div className="PrductCard">
              <h2>Order Sumery</h2>
              <div className="imgofpay">
                <img src={Product} alt="" />
                <div>
                  <div className="inputPay">Your Product</div>
                  <div className="inputPay">Owner</div>
                  <div className="inputPay">Price</div>
                  <div className="inputPay">image</div>
                  <div className="inputPay">Quantity</div>
                  <div className="inputPay">Price</div>
                </div>
              </div>

              <div className="inputPay">Total Price</div>
              <div className="inputPay">Starting Date</div>
              <div className="inputPay">Ending Date</div>
            </div>
          </div>
          <div className="rightgrid">
            <div className="PaymentCard">
              <h2>Payment</h2>
              <img src="" alt="" />
              <div className="inputPay">Your Address = address</div>

              <div className="inputPay">Your Email</div>

              <div className="inputPay">Coin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
