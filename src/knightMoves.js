/* eslint-disable*/
import boardSquare from "./boardSquare";
import Queue from "./queue";

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
  
    // Fill in possible moves for each square
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

  function moveKnight(start, end) {
    const queue = new Queue();
    const shortestPath = [];
    const parentMap = {};

    queue.enqueue(start);
    parentMap[start.coordinate] = null;
    while (!queue.isEmpty()) {
      let currentSquare = queue.peek();
      if (currentSquare.coordinate === end) {
        while (currentSquare) {
          shortestPath.push(currentSquare.coordinate);
          currentSquare = parentMap[currentSquare.coordinate];
        }
        shortestPath.reverse();
        return shortestPath;
      }
      currentSquare.visited = true;
      moves += 1;
      queue.dequeue();
      for (let i = 0; i < currentSquare.possibleMoves.length; i+= 1) {
        if (currentSquare.possibleMoves[i].visited !== true) {
          queue.enqueue(currentSquare.possibleMoves[i]);
          parentMap[currentSquare.possibleMoves[i].coordinate] = currentSquare;
        }
      }
    }
  }

  
  buildBoard();
  console.log(board);
  return moveKnight(findStart(start), end);
}
