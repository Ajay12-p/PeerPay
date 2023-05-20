import { Accordion, Button, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/page";
import "./page.module.css";
import Submit from "../../../UI/Buttons/Submit/Submit";
import { useDisclosure } from "@chakra-ui/react";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";
import { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Card,
  AbsoluteCenter,
} from "@chakra-ui/react";
const Join = () => {
  const [flagofcong, setFlagofcong] = useState(true);
  const [data, setData] = useState({
    AccountAdress: "",
    BussinessName: "",
  });

  const [flags, setFlags] = useState(false);
  const navigate = useNavigate();

  const HandelSubmit = async () => {
    console.log(data.AccountAdress.length);
    // if (data.AccountAdress.length != 42) {
    //   alert("Please Enter a valid Account Address");
    //   return;
    // }
    // if (data.BussinessName.length < 3) {
    //   alert("Please Enter a valid Bussiness Name");
    //   return;
    // }

    // const response = await axios.post(
    //   "http://localhost:5000/api/Bussiness/register",
    //   data
    // );

    // console.log(response);
    setFlagofcong(false);
    console.log("heleof");
    setFlags(true);
  };
  return (
    <div className="Mainbody">
      <Navbar />

      {!flagofcong ? (
        <Center pt="25vh" pb="25vh">
          {/* <Flex> */}
          <Card
            background=" linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))"
            position="Cetner"
            width={"30%"}
            height={"400px"}
          >
            {!flagofcong ? (
              <Box position="relative" padding={20}>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Enter the Address...</FormLabel>
                    <Input
                      width={80}
                      height={20}
                      name="AccountAdress"
                      onChange={(e) => {
                        setData({ ...data, AccountAdress: e.target.value });
                      }}
                      placeholder="0x...."
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>companey Name</FormLabel>
                    <Input
                      width={80}
                      name="BussinessName"
                      onChange={(e) => {
                        setData({ ...data, BussinessName: e.target.value });
                      }}
                      height={20}
                      placeholder="Enter the Name"
                    />
                  </FormControl>
                </Box>

                <Box
                  style={{
                    marginTop: "5vh",
                  }}
                >
                  <Submit
                    Name="Submit 😀"
                    Nextname="Lets Go 🚀"
                    Function={HandelSubmit}
                  />
                </Box>
              </Box>
            ) : (
              <div>congratulation</div>
              // <Box position="relative" paddingTop={"29%"}>
              //   <h1
              //     style={{
              //       display: "flex",
              //       justifyContent: "center",

              //       fontSize: "40px",
              //       fontWeight: "bold",
              //       width: "100%",
              //     }}
              //   >
              //     Congrats{" "}
              //     {flags && (
              //       <ConfettiExplosion
              //         force={0.8}
              //         duration={10000}
              //         particleCount={300}
              //         width={1600}
              //       />
              //     )}
              //     🎊🎊🥳
              //   </h1>

              //   <div
              //     style={{
              //       display: "flex",
              //       justifyContent: "center",
              //       marginTop: "5vh",
              //     }}
              //   >
              //     <button
              //       className="SimpbleBtn"
              //       onClick={() => {
              //         navigate("/dashbord");
              //       }}
              //     >
              //       Dashboard
              //     </button>
              //   </div>
              // </Box>
            )}
          </Card>
          {/* </Flex> */}
        </Center>
      ) : (
        <div className="Congrats">
          <ConfettiExplosion
            force={0.8}
            duration={10000}
            particleCount={300}
            width={1600}
          />
          congratulation
        </div>
      )}
    </div>
  );
};

export default Join;
