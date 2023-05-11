import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./components/pages/Home/home";
import Login from "./components/pages/Login/Login";
import Payment from "./components/pages/Payments/payments";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    console.log(user);
    if (user) {
      setFlag(true);
    }
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <header className="header">
          {/* <div>
            <SlArrowLeft
              style={{ fontSize: "1.25em" }}
              onClick={() => navigate(-1)}
            />
          </div> */}
          <div
            className="center"
            onClick={() => {
              navigate("/");
            }}
          >
            SuperPay
          </div>
          <div
            className="center"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Pay
          </div>
          {/* <div>
            <SlArrowRight
              style={{ fontSize: "1.25em" }}
              onClick={() => navigate(+1)}
            />
          </div> */}
        </header>
        <main className="main">
          <Routes>
            {flag ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/payment" element={<Payment />} />
          </Routes>

          {/* <Home /> */}

          {/* // <Login /> */}
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
