import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/page";
import Dashbord from "../Pages/dashboard/page";
import Join from "../Pages/join/page";
const Rout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashbord" element={<Dashbord />} />
        <Route exact path="/Create-account" element={<Join />} />
        <Route exact path="/Create-account/dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
};

export default Rout;
