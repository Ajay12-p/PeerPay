import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Payment from "../pages/Payments/payments";
function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Path;
