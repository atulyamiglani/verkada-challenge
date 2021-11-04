import { data } from "./data.json";
import styled from "styled-components";
import { CellState } from "./Cell";
import Cell from "./Cell";
import { Button } from "@chakra-ui/button";
import { Grid, Box, GridItem, SimpleGrid } from "@chakra-ui/layout";

const Row = styled.div`
  display: flex;
  border-bottom: 2px solid grey;
`;

const Col = styled.div`
  flex: ${(props: ColProps) => props.size};
  border-right: 2px solid grey;
`;

interface ColProps {
  size: number;
}

/**
 * 
 *  {grid.map((row, rowIdx) => (
          <Row>
            {row.map((cell, colIdx) => (
              <Box
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
                gridColumn={grid.length}
              >
                <Cell
                  row={rowIdx}
                  col={colIdx}
                  state={
                    grid[rowIdx][colIdx] === 1 ? CellState.WALL : CellState.OPEN
                  }
                />
              </Box>
            ))}
          </Row>
        ))}
 */
export const Floorplan: React.FC<{}> = () => {
  const grid = data.floorplan;
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gridAutoFlow="row"
        w="100%"
        gap={4}
      >
        {grid.map((row, rowIdx) => (
          <GridItem>
            {row.map((cell, colIdx) => (
              <Cell
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

      <div>
        <Button>Submit Plan</Button>
      </div>
    </>
  );
};
