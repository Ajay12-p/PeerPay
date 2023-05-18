import { Button, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/page";
import Submit from "../../../UI/Buttons/Submit/Submit";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Card,
  AbsoluteCenter,
} from "@chakra-ui/react";
const Join = () => {
  const navigate = useNavigate();

  const HandelSubmit = () => {
    console.log("heleof");
    navigate("/Thankyou");
  };

  return (
    <div className="Mainbody">
      <Navbar />
      <Center pt="25vh" pb="25vh">
        <Flex>
          <Card
            background=" linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))"
            position="Cetner"
          >
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
                  Name="Submit"
                  Nextname="ThankYOU"
                  Function={HandelSubmit}
                />
              </Box>
            </Box>
          </Card>
        </Flex>
      </Center>
    </div>
  );
};

export default Join;
