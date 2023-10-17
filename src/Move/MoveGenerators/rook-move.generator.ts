import { Piece } from "../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "../move-generator.srvice";

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  let i;
  let currentPiece;

  i = piece.position.x;
  currentPiece = findPieceFrom({ x: piece.position.x + 1, y: piece.position.y }, pieces);
  while (i >= 0) {
    if (currentPiece && currentPiece.color !== piece.color) {
      moves.push({
        from: piece,
        to: {
          ...piece,
          position: {
            x: piece.position.x + 1,
            y: piece.position.y,
          },
        },
      });
      break;
    }

    moves.push({
      from: piece,
      to: {
        ...piece,
        position: {
          x: piece.position.x + 1,
          y: piece.position.y,
        },
      },
    });
  }

  return moves;
};
