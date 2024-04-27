/* eslint-disable */
export default class boardSquare {
  constructor(color, coordinate) {
    this.color = color;
    this.possibleMoves = [];
    this.coordinate = coordinate;
    this.visited = false;
  }

  getPossibleMoves(moves) {
    this.possibleMoves = moves;
  }
}
