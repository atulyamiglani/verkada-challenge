import { Box } from "@chakra-ui/layout";
import { useState } from "react";

export enum CellState {
  WALL = "wall",
  OPEN = "open",
  CAMERA = "camera",
}

interface CellProps {
  row: number;
  col: number;
  state: CellState;
}

const Cell: React.FC<CellProps> = (cell: CellProps) => {
  let [currCell, setCell] = useState(cell);
  const { row, col, state } = currCell;
  const handleClick = () => {
    console.log(`Clicked on ${row}, ${col}`);
    if (state === CellState.OPEN) {
      setCell({ ...currCell, state: CellState.CAMERA });
    }
    if (state === CellState.CAMERA) {
      setCell({ ...currCell, state: CellState.OPEN });
    }

    console.log(currCell);
  };
  return (
    <Box boxShadow="xs" p="3" rounded="md" bg="white" onClick={handleClick}>
      {state}
    </Box>
  );
};

export default Cell;
