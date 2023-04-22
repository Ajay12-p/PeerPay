import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage/page';
import Rout from './Path/Path';
function App() {
  return (
    <ChakraProvider>

    
    <Rout/>


    
    </ChakraProvider>
   
  );
}

export default App;
