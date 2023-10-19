import { Piece } from "../../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "./../../move-generators";

export const getDoubleMove = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
  const firstStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment }, pieces);
  const secondStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment * 2 }, pieces);

  if (!piece.wasMoved && !firstStep && !secondStep) {
    const nextPosition: Piece = {
      ...piece,
      position: {
        x: piece.position.x,
        y: piece.position.y + increment * 2,
      },
    };

    return {
      from: piece,
      to: nextPosition,
    };
  }
};
