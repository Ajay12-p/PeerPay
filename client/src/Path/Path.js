
import {BrowserRouter,Route, Routes} from "react-router-dom"
import HomePage from "../HomePage/page"
import Dashbord from "../dashboard/page";
const Rout =()=>{


    return(<>
   
     <Routes>
     <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/dashbord" element={<Dashbord/>} />
     </Routes>
     

    
        </>)
}

export default Rout;