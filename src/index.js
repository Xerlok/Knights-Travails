import './styles.css';
import knightMoves from './knightMoves';

const start = '2-2';
const end = '7-7';

console.log(
  `Knight Moves: 2-2 -> 7-7.
  You made it in: ${knightMoves(start, end).length - 1} moves
  The path was: ${knightMoves(start, end)}`,
);
