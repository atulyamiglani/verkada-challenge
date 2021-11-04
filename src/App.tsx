import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Floorplan } from "./Floorplan";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Floorplan />
    </ChakraProvider>
  );
}

export default App;
