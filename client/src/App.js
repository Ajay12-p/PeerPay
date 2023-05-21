import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/Pages/HomePage/page";
import Dashbord from "./components/Pages/dashboard/page";
import Join from "./components/Pages/join/page";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Routes>
      <Sidebar>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashbord" element={<Dashbord />} />
        <Route exact path="/Create-account" element={<Join />} />
        <Route exact path="/Create-account/dashbord" element={<Dashbord />} />
      </Sidebar>
    </Routes>
  );
}

export default App;
// just making sure things are ok
