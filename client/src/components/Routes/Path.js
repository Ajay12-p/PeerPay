import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/page";
import Dashbord from "../Pages/dashboard/page";
import Join from "../Pages/join/page";
import Sidebar from "../Sidebar/Sidebar";
const Rout = () => {
  return (
    <>
      <Routes>
        <Sidebar>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashbord" element={<Dashbord />} />
          <Route exact path="/Create-account" element={<Join />} />
          <Route exact path="/Create-account/dashbord" element={<Dashbord />} />
        </Sidebar>
      </Routes>
    </>
  );
};

export default Rout;
