import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/Pages/HomePage/page";
import Dashbord from "./components/Pages/dashboard/page";
import Join from "./components/Pages/join/page";
import Payment from "./components/Pages/Payment/Payment";
import History from "./components/Pages/history/history";
import Docs from "./components/Pages/docs/page";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="/Create-account" element={<Join />} />
      <Route exact path="/Payment" element={<Payment />} />
      <Route exact path="/Create-account/dashbord" element={<Dashbord />} />
      <Route exact path="/history" element={<History />} />
      <Route exact path="/docs" element={<Docs />} />
    </Routes>
  );
}

export default App;
// just making sure things are ok
