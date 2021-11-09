import { CellState } from "./Cell";
import Cell from "./Cell";
import { DndProvider } from "react-dnd";
import { Grid, GridItem } from "@chakra-ui/layout";
import { HTML5Backend } from "react-dnd-html5-backend";

interface FloorplanProps {
  grid: number[][];
}

export const Floorplan: React.FC<FloorplanProps> = ({ grid }) => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Grid
          h="200px"
          alignSelf="center"
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gridAutoFlow="row"
          w="100%"
          gap={4}
        >
          {grid.map((row, rowIdx) => (
            <GridItem key={`${rowIdx} `}>
              {row.map((cell, colIdx) => (
                <Cell
                  key={`${rowIdx} ${colIdx}`}
                  row={rowIdx}
                  col={colIdx}
                  state={
                    grid[rowIdx][colIdx] === 1 ? CellState.WALL : CellState.OPEN
                  }
                />
              ))}
            </GridItem>
          ))}
        </Grid>
      </DndProvider>
    </div>
  );
};
