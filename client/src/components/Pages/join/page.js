import { Button, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/page";
import Submit from "../../../UI/Buttons/Submit/Submit";
import { useDisclosure } from "@chakra-ui/react";
import Spacebutton from "../../../UI/Buttons/spacebutton/Spacebutton";
import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
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
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", detectResize);
    return () => {
      window.removeEventListener("resize", detectResize);
    };
  }, []);
  const detectResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const [flags, setFlags] = useState(false);
  const navigate = useNavigate();
  const HandelSubmit = () => {
    setFlagofcong(false);
    console.log("heleof");
    setFlags(true);
    // setTimeout(() => {
    //   navigate("/ThankYOU");
    // }, 8000);
  };
  return (
    <div className="Mainbody">
      <Navbar />
      {flags && (
        <ReactConfetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          width={windowDimensions.width}
          height={windowDimensions.height}
        />
      )}
      <Center pt="25vh" pb="25vh">
        {/* <Flex> */}
        <Card
          background=" linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))"
          position="Cetner"
          width={"30%"}
          height={"400px"}
        >
          {flagofcong ? (
            <Box position="relative" padding={20}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Enter the Address...</FormLabel>
                  <Input width={80} height={20} placeholder="0x...." />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>companey Name</FormLabel>
                  <Input width={80} height={20} placeholder="Enter the Name" />
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
            <Box position="relative" paddingTop={"29%"}>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",

                  fontSize: "40px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Congrats🎊🎊🥳
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5vh",
                }}
              >
                <button
                  className="SimpbleBtn"
                  onClick={() => {
                    navigate("/dashbord");
                  }}
                >
                  Dashboard
                </button>
              </div>
            </Box>
          )}
        </Card>
        {/* </Flex> */}
      </Center>
    </div>
  );
};

export default Join;
