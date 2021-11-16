import { Box, Text } from "@chakra-ui/layout";
import { useDrag, useDrop } from "react-dnd";

export enum CellState {
  WALL = "wall",
  OPEN = "open",
  CAMERA = "camera",
}

export interface CellType {
  row: number;
  col: number;
  state: CellState;
}

type CellProps = {
  currCell: CellType;
  setCell: (cell: CellType) => void;
};

export const Cell: React.FC<CellProps> = ({ currCell, setCell }) => {
  const { row, col, state } = currCell;
  const handleClick = () => {
    if (state === CellState.OPEN) {
      setCell({ ...currCell, state: CellState.CAMERA });
    }
    if (state === CellState.CAMERA) {
      setCell({ ...currCell, state: CellState.OPEN });
    }
  };

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: CellState.OPEN || CellState.CAMERA,
      collect: (monitor: any) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    };
  });

  const [, drop] = useDrop(
    () => ({
      accept: CellState.OPEN || CellState.CAMERA,
      drop: () => {
        const updatedCell = {
          ...currCell,
          state: state === CellState.OPEN ? CellState.CAMERA : CellState.OPEN,
        };
        currCell.state !== CellState.WALL && setCell(updatedCell);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [currCell]
  );
  return (
    <div
      ref={drop}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
        }}
      >
        <Box boxShadow="xs" p="3" rounded="md" bg="white" onClick={handleClick}>
          <Text
            fontFamily="ttnormspro, sans-serif"
            lineHeight={1.67}
            fontWeight="bold"
          >
            {state}
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default Cell;
