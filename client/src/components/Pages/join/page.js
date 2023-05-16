import { Button, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FormControl ,FormLabel,Input,Box, Card ,AbsoluteCenter} from "@chakra-ui/react";
const Join =()=>{
    const navigate = useNavigate();

    return(
        <>
  <Center mt="25vh">
        <Flex  > 
            <Card  background=" linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))" position="Cetner">
            <Box position="relative" padding={20}>
 

   
          <Box>

        <FormControl isRequired>
  <FormLabel>Enter the Address...</FormLabel>
  <Input width={80} height={20} placeholder='0x....' />
</FormControl>
          </Box>
          <Box>
        <FormControl isRequired>
  <FormLabel>companey Name</FormLabel>
  <Input width={80} height={20} placeholder='Enter the Name' />
</FormControl>
            
   
          </Box>
             <Box>
              <Button  borderRadius={12}  mt={4} onClick={()=>{
                navigate("dashbord")
              }}>
                submit
              </Button>
             </Box>
        </Box>

            </Card>
        </Flex>


  </Center>
        </>
    )
}


export default Join;