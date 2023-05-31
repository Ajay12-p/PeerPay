import Sidebar from "../../Sidebar/Sidebar";
import "./history.css";

const History = () => {
  return (
    <>
      <div className="mainDiv">
        <Sidebar />

        <div className="Div2">
          <div className="card1">
            <div className="items">
              <div className="  gridItems">
                <img src="./imagg.jpg" className="imagg" />
              </div>
            </div>
            <div className="gridItems">
              <div>
                Name
                <br />
                <span style={{ color: "white" }}>mathue</span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                price
                <br />
                <span style={{ color: "white" }}>30€</span>
              </div>
            </div>
            <div className="gridItems">
              <div>
                active
                <br />
                <span style={{ color: "white" }}>yes</span>
              </div>
            </div>
            <div className="gridItems">
              <div className="button2">cancle</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
