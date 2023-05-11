import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  var name = "";
  function handleAddress(e) {}
  return (
    <div className="body">
      <div className="container">
        <input id="register_toggle" type="checkbox" />
        <div className="slider">
          <form className="form">
            <span className="title">Login</span>
            <div className="form_control">
              <input
                required
                className="input"
                onChange={(e) => {
                  name = e.target.value;
                }}
                type="text"
              />
              <label className="label">Public Address</label>
            </div>

            <button
              onClick={() => {
                if (name.length == 42) {
                  localStorage.setItem("user", name);
                  navigate("/");
                } else {
                  alert("Address is not valid");
                }
              }}
            >
              Save
            </button>
            <span className="bottom_text">
              We need your public address so that we can give you all the
              information of your acccount . we use Metamask to do all the
              transaction. so don't worry about your assets.
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
