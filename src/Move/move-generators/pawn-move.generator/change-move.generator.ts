import { Piece, PieceType } from "../../../Piece/piece-manager.service";
import { Move } from "../../move-generators";

export const getChangePawn = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
  const moves: Move[] = [];

  if ((piece.position.y === 7 && increment === 1) || (piece.position.y === 0 && increment === -1)) {
    Object.keys(PieceType).forEach((key) => {
      if (key === "Pawn") return;

      moves.push({
        from: piece,
        to: {
          ...piece,
          pieceType: key as PieceType,
          position: {
            x: piece.position.x,
            y: piece.position.y + increment,
          },
        },
      });
    });
  }

  return moves;
};
