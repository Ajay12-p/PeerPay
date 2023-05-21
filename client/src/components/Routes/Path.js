import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/page";
import Dashbord from "../Pages/dashboard/page";
import Join from "../Pages/join/page";
import Sidebar from "../Sidebar/Sidebar";
import Payments from "../Pages/Payment/Payment";
const Rout = () => {
  return (
    <>
      <Routes>
        <Sidebar>
          <Route exact path="/" element={<Payments />} />
          <Route exact path="/dashbord" element={<Dashbord />} />
          <Route exact path="/Create-account" element={<Join />} />
          <Route exact path="/Payment" element={<Payments />} />
          <Route exact path="/Create-account/dashbord" element={<Dashbord />} />
        </Sidebar>
      </Routes>
    </>
  );
};

export default Rout;
