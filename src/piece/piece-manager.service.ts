export enum PieceType {
  Pawn = "Pawn",
  Rook = "Rook",
  Knight = "Knight",
  Bishop = "Bishop",
  Queen = "Queen",
  King = "King",
}

export interface Position {
  x: number;
  y: number;
}

export interface Piece {
  pieceId: string;
  pieceType: PieceType;
  color: "white" | "black";
  position: Position;
  wasMoved: boolean;
}
