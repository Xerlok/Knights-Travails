/* eslint-disable*/
import boardSquare from "./boardSquare";

export default function knightMoves(start, end) {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let moves = 0;

  function buildBoard() {
    for (let i = 0; i < 8; i+=1) {
      for (let j = 0; j < 8; j+=1) {
        const color = (i + j) % 2 === 0 ? 'black' : 'white';
        board[i][j] = new boardSquare(color, `${i}-${j}`);
      }
    }
  
    for (let i = 0; i < 8; i+=1) {
      for (let j = 0; j < 8; j+=1) {
        const possibleMoves = [];
  
        if (board[i + 2] !== undefined && board[i + 2][j + 1] !== undefined) {
          possibleMoves.push(board[i + 2][j + 1]);
        }
  
        if (board[i + 2] !== undefined && board[i + 2][j - 1] !== undefined) {
          possibleMoves.push(board[i + 2][j - 1]);
        }
  
        if (board[i - 2] !== undefined && board[i - 2][j - 1] !== undefined) {
          possibleMoves.push(board[i - 2][j - 1]);
        }
  
        if (board[i - 2] !== undefined && board[i - 2][j - 1] !== undefined) {
          possibleMoves.push(board[i - 2][j - 1]);
        }
  
        if (board[i + 1] !== undefined && board[i + 1][j + 2] !== undefined) {
          possibleMoves.push(board[i + 1][j + 2]);
        }
  
        if (board[i + 1] !== undefined && board[i + 1][j - 2] !== undefined) {
          possibleMoves.push(board[i + 1][j - 2]);
        }
  
        if (board[i - 1] !== undefined && board[i - 1][j + 2] !== undefined) {
          possibleMoves.push(board[i - 1][j + 2]);
        }
  
        if (board[i - 1] !== undefined && board[i - 1][j - 2] !== undefined) {
          possibleMoves.push(board[i - 1][j -2 ]);
        }
        
        board[i][j].getPossibleMoves(possibleMoves);
      }
    }
  }

  function findStart(start) {
    let startingSquare = null;

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j+=1) {
        if (board[i][j].coordinate === start) {
          startingSquare = board[i][j];
        }
      }
    }

    return startingSquare;
  }

  function moveKnight(start, end, possibleMoves) {
    let startingSquare = start;
    
    if (startingSquare.visited) { return; }
    moves += 1;
    startingSquare.visited = true;

    console.log(startingSquare.coordinate);
    if (startingSquare.coordinate === end) {
      console.log('I came in: ' + moves);
      moves = 0;
      return;
    }

    for (let i = 0; i < startingSquare.possibleMoves.length; i += 1) {
      moveKnight(startingSquare.possibleMoves[i], end, startingSquare.possibleMoves);
    }
  }

  
  buildBoard();
  moveKnight(findStart(start), end);
  console.log(board);
  window.board = board;
}
