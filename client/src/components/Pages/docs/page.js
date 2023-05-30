import Sidebar from "../../Sidebar/Sidebar";
import "./docs.css"
const Docs =()=>{

    return(
        <>
        <div className="mainDiv">
            <div className="sidebar1">

          <Sidebar/>
            </div>
          <div className="div2">
           <div className="Heading">
            How to use...

           </div>
           <div className="items1">
            <img src="./docs1.png"/>
           </div>
           <div className="items1">
            <img src="./docs2.png"/>
           </div>
          </div>

        </div>
        </>
    )

}
export default Docs;