import { Heading, Box } from "@chakra-ui/layout";
import { Floorplan } from "./Floorplan";
import { data } from "./data.json";
import { CellState } from "./Cell";
import { CellType as Cell } from "./Cell";
import { useState } from "react";

export type Grid = Cell[][];

const preProcessGrid = (grid: number[][]): Grid => {
  const newGrid = grid.map((row, rowIdx) => {
    return row.map((_col, colIdx) => {
      const cell = {
        row: rowIdx,
        col: colIdx,
        state: grid[rowIdx][colIdx] === 0 ? CellState.OPEN : CellState.WALL,
      };
      return cell;
    });
  });
  return newGrid;
};

const FloorPlanPage: React.FC<{}> = () => {
  const dataGrid = data.floorplan;
  const [grid, setGrid] = useState(preProcessGrid(dataGrid));

  return (
    <div>
      <Box>
        <Heading size="lg" margin="50">
          Your Floorplan
        </Heading>
        <Floorplan grid={grid} setGrid={setGrid} />
      </Box>
    </div>
  );
};

export default FloorPlanPage;
