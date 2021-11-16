import { Grid as GridType } from "./FloorPlanPage";
import { DndProvider } from "react-dnd";
import { Grid, GridItem } from "@chakra-ui/layout";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, useToast } from "@chakra-ui/react";
import { Cell, CellType } from "./Cell";
import cloneDeep from "lodash/cloneDeep";

interface FloorplanProps {
  grid: GridType;
  setGrid: React.Dispatch<React.SetStateAction<GridType>>;
}

export const deepCopy = (obj: any) => {
  return cloneDeep(obj);
};

export const Floorplan: React.FC<FloorplanProps> = ({ grid, setGrid }) => {
  const toast = useToast();
  function handleSubmit(finalGrid: GridType): void {
    console.log(finalGrid);
    toast({
      title: "Success",
      description: "Check your console for the grid plan submitted!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Grid
          h="200px"
          alignSelf="center"
          templateRows={`repeat(${grid.length}, 1fr)`}
          templateColumns={`repeat(${grid[0].length}, 1fr)`}
          gridAutoFlow="row"
          padding="50px"
          gap={4}
        >
          {grid.map((row, rowIdx) => (
            <GridItem key={`${rowIdx} `}>
              {row.map((cell, colIdx) => {
                const setCell = (newCell: CellType) => {
                  const updatedGrid = deepCopy(grid);
                  updatedGrid[rowIdx][colIdx] = newCell;
                  setGrid(updatedGrid);
                };

                return (
                  <Cell
                    key={`${rowIdx} ${colIdx}`}
                    currCell={cell}
                    setCell={setCell}
                  />
                );
              })}
            </GridItem>
          ))}
        </Grid>
      </DndProvider>
      <Button
        color="blue"
        bottom="-310"
        margin="50"
        onClick={() => handleSubmit(grid)}
      >
        Submit
      </Button>
    </div>
  );
};
