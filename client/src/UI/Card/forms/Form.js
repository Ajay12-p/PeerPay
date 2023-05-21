import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div
      className="Mainbody"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <input id="signup_toggle" type="checkbox" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Create API</div>
            <input type="text" className="input" placeholder="Username" />
            <input type="text" className="input" placeholder="Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
