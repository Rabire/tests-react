import { useState, useEffect } from 'react';
import { StartButton, Grid, Page, Cell } from './styles';

const ROAD_CELLS = [
  0, 1, 2, 17, 32, 47, 62, 63, 64, 79, 94, 109, 124, 139, 140, 141, 142, 143, 144, 145, 146, 161,
  176, 191, 206, 207, 208, 223, 224
];

const CELLS = new Array(225).fill('').map((el, i) => i);

const isOnRoad = (cell: number) => ROAD_CELLS.includes(cell);

export function DocteurMahboul() {
  const [isOK, setIsOK] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const onCellHover = (cell: number) => {
    if (!isPlaying) return;

    const onRoad = isOnRoad(cell);

    if (cell === 224) {
      alert('GG WP !');
      setIsPlaying(false);
    }

    if (!onRoad) {
      setIsOK(false);
    } else {
      setIsOK(true);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setIsOK(true);
  };

  useEffect(() => {
    if (!isOK) alert('PERDU !');
  }, [isOK]);

  return (
    <Page>
      <StartButton onClick={startGame}>START</StartButton>
      <Grid isPlaying={isPlaying}>
        {CELLS.map((cell) => (
          <Cell key={cell} isRoad={isOnRoad(cell)} onMouseEnter={() => onCellHover(cell)}>
            {cell}
          </Cell>
        ))}
      </Grid>
    </Page>
  );
}
