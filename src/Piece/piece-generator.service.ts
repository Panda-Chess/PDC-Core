import { Piece, PieceType } from "./piece-manager.service";
import { v4 as uuid } from "uuid";

export const generatePieceSet = (): Piece[] => {
  const pieces: Piece[] = [];

  // Generate white pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      pieceId: uuid(),
      wasMoved: false,
      pieceType: PieceType.Pawn,
      color: "white",
      position: { x: i, y: 1 },
    });
  }

  // Generate white pieces
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Rook,
    color: "white",
    position: { x: 0, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Knight,
    color: "white",
    position: { x: 1, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Bishop,
    color: "white",
    position: { x: 2, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Queen,
    color: "white",
    position: { x: 3, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.King,
    color: "white",
    position: { x: 4, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Bishop,
    color: "white",
    position: { x: 5, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Knight,
    color: "white",
    position: { x: 6, y: 0 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Rook,
    color: "white",
    position: { x: 7, y: 0 },
  });

  // Generate black pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      pieceId: uuid(),
      wasMoved: false,
      pieceType: PieceType.Pawn,
      color: "black",
      position: { x: i, y: 6 },
    });
  }

  // Generate black pieces
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Rook,
    color: "black",
    position: { x: 0, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Knight,
    color: "black",
    position: { x: 1, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Bishop,
    color: "black",
    position: { x: 2, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Queen,
    color: "black",
    position: { x: 3, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.King,
    color: "black",
    position: { x: 4, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Bishop,
    color: "black",
    position: { x: 5, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Knight,
    color: "black",
    position: { x: 6, y: 7 },
  });
  pieces.push({
    pieceId: uuid(),
    wasMoved: false,
    pieceType: PieceType.Rook,
    color: "black",
    position: { x: 7, y: 7 },
  });

  return pieces;
};
