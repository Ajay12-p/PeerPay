import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/page";
import "./Forms.css";
import LoginImg from "../../Media/bussigness.png";
import Submit from "../../../UI/Buttons/Submit/Submit";
import Congrats from "../../../UI/Card/CongratulationCard/Congrats";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import Form from "../../../UI/Card/forms/Form";
const Join = () => {
  const [flagofcong, setFlagofcong] = useState(true);
  const [data, setData] = useState({
    AccountAdress: "",
    BussinessName: "",
  });

  const [flags, setFlags] = useState(false);
  const navigate = useNavigate();

  const HandelCong = () => {
    navigate("/dashboard");
  };
  const HandelSubmit = async () => {
    console.log(data.AccountAdress.length);
    if (data.AccountAdress.length != 42) {
      alert("Please Enter a valid Account Address");
      return;
    }
    if (data.BussinessName.length < 3) {
      alert("Please Enter a valid Bussiness Name");
      return;
    }

    const response = await axios.post(
      "http://localhost:5000/api/Bussiness/register",
      data
    );

    console.log(response);
    if (response.status == 200) {
      setFlagofcong(false);
      console.log("heleof");
      setFlags(true);
    } else {
      alert("Please Enter a valid Account Address");
    }
  };
  return (
    <div className="Mainbody">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {flagofcong ? (
          <div
            style={{
              maxWidth: "1500px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <img className="imageofform" src={LoginImg} alt="" />

            <div className="Formbody">
              <form className="form">
                <div className="form_front">
                  <div className="form_details">Create API</div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, AccountAdress: e.target.value });
                    }}
                    className="input"
                    placeholder="Account Address"
                  />
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => {
                      setData({ ...data, BussinessName: e.target.value });
                    }}
                    placeholder="Bussiness Name"
                  />
                  <Submit
                    Name="Submit 😀"
                    Nextname="Lets Go 🚀"
                    Function={HandelSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="Congrats">
            <Congrats name="Dashboard" Func={HandelCong} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
