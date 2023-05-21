import React from "react";
import "./Congrats.css";
import SpaceButton from "../../Buttons/spacebutton/Spacebutton";
import ConfettiExplosion from "react-confetti-explosion";
const Congrats = ({ name, Func }) => {
  return (
    <div className="">
      <div className="text1"> Congratulations </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ConfettiExplosion
          force={0.8}
          duration={11000}
          particleCount={300}
          width={1600}
        />
      </div>
      <div className="text2">
        You're in! Thanks for choosing us. Get ready for a seamless and
        rewarding experience.
      </div>

      <div className="btnofcong">
        <SpaceButton name={name} Function={Func} />
      </div>
    </div>
  );
};

export default Congrats;
