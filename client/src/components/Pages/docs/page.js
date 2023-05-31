import Sidebar from "../../Sidebar/Sidebar";
import React, { useRef } from "react";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";
import "./docs.css";
const Docs = () => {
  const codeInputRef = useRef(null);

  const copyCode = () => {
    codeInputRef.current.select();
    document.execCommand("copy");
    alert("Code copied to clipboard!");
  };
  return (
    <>
      <div className="mainDiv">
        <div className="sidebar1">
          <Sidebar />
        </div>
        <div className="div2">
          <div className="Heading">How to use...</div>

          <div className="items2">
            <div>
              <textarea
                ref={codeInputRef}
                rows="20"
                style={{
                  fontSize: "20px",
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "monospace",
                }}
                cols="85"
              >
                {`import PeerPay from "peerpaysdk";

function App() {

return <PeerPay 
        price= " price of product " ,
        limit = "limit of product for rent",
        api = " you api ",
        image  = "URL of image  ",
        name  = "Product name ",
        detail  = "Detail of product",
        maxtime  = "max days for giving product",
        backgroundColor = " you can change background color of button",
        color =" you can change the color of text" ,
       />;
       } `}
              </textarea>
            </div>
            <div>
              <Spacebutton name="Copy Code" Function={copyCode} />
            </div>
          </div>
          <div className="items1">
            <img src="./docs2.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Docs;
