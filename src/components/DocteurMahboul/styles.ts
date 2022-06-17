import styled from 'styled-components';

export const Page = styled.div`
  padding: 5rem;
`;

type GridProps = {
  isPlaying: boolean;
};

export const Grid = styled.div<GridProps>`
  filter: grayscale(${(props) => (props.isPlaying ? '0%' : '100%')});
  cursor: ${(props) => !props.isPlaying && 'not-allowed'};

  display: inline-grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
`;

type CellProps = {
  isRoad: boolean;
};

export const Cell = styled.div<CellProps>`
  background: ${(props) => (props.isRoad ? 'lightgreen' : 'pink')};
  border: 1px solid silver;

  height: 50px;
  width: 50px;

  font-size: 1rem;
`;

export const StartButton = styled.div`
  background: lightgreen;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;

  cursor: pointer;
  padding: 1rem;
`;
