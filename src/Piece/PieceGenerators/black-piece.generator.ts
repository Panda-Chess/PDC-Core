import { Piece, PieceType } from "../piece-manager.service";
import { generatePiece } from "./piece.generator";

export const generateBlackPieceSet = (): Piece[] => {
  const pieces: Piece[] = [];

  // Generate white pawns
  for(let i = 0; i < 8; i++) {
    pieces.push(generatePiece(PieceType.Pawn, "black", { x: i, y: 6 }));
  }

  // Generate white pieces
  pieces.push(generatePiece(PieceType.Rook, "black", { x: 0, y: 7 }));
  pieces.push(generatePiece(PieceType.Knight, "black", { x: 1, y: 7 }));
  pieces.push(generatePiece(PieceType.Bishop, "black", { x: 2, y: 7 }));
  pieces.push(generatePiece(PieceType.Queen, "black", { x: 3, y: 7 }));
  pieces.push(generatePiece(PieceType.King, "black", { x: 4, y: 7 }));
  pieces.push(generatePiece(PieceType.Bishop, "black", { x: 5, y: 7 }));
  pieces.push(generatePiece(PieceType.Knight, "black", { x: 6, y: 7 }));
  pieces.push(generatePiece(PieceType.Rook, "black", { x: 7, y: 7 }));

  return pieces;
};