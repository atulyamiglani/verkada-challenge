import { Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Floorplan } from "./Floorplan";
import { data } from "./data.json";

const grid = data.floorplan;
const FloorPlanPage: React.FC<{}> = () => {
  const handleSubmit = (finalGrid: number[][]) => {
    console.log("yo");
    console.log(finalGrid);
  };
  return (
    <>
      <Box>
        <Heading size="lg">Your Floorplan</Heading>
        <Floorplan grid={grid} />
      </Box>
      <Button
        onSubmit={() => {
          handleSubmit(grid);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default FloorPlanPage;
