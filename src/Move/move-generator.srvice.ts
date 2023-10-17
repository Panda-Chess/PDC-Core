import { Piece, Position } from "../Piece/piece-manager.service";
import { generatePawnMoves } from "./MoveGenerators/pawn-move.generator";

export interface Move {
  from: Piece;
  to: Piece;
}

export const findPieceFrom = (position: Position, pieces: Piece[]): Piece | void => {
  return pieces.find((x) => x.position.x === position.x && x.position.y === position.y);
};

export const getMoves = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  switch (piece.pieceType) {
    case "Pawn":
      moves.push(...generatePawnMoves(piece, pieces));
      break;
  }

  return moves;
};
