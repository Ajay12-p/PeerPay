import { Box, Flex, Spacer, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
 function a (){
     navigate("/");
 }
  return (
    <Flex alignItems="center" p={4}  background="transparent" >
      <Box>
        <Button variant="ghost"  color="white" _hover="none">LIMIT-LESS</Button>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <Button variant="ghost" color="white"  _hover="none" mr={4} onClick={()=>{
            a();
        }}>Home</Button>
        <Button variant="ghost" color="white"  _hover="none" mr={4}>About</Button>
        <Button variant="ghost" color="white"  _hover="none"  mr={4}>Services</Button>
        <Button variant="ghost"  color="white"  _hover="none">Contact</Button>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Toggle navigation"
          icon={<HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
}

export default Nav;