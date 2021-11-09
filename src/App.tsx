import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import FloorPlanPage from "./FloorPlanPage";
function App() {
  return (
    <ChakraProvider>
      <FloorPlanPage />
    </ChakraProvider>
  );
}

export default App;
