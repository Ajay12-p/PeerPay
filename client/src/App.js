import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Rout from "./components/Routes/Path";
function App() {
  return (
    <ChakraProvider>
      <Rout />
    </ChakraProvider>
  );
}

export default App;
