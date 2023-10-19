import { Piece } from "../../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "../../move-generators";

const getMovesRight = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  for (let i = piece.position.x; i < 7; i++) {
    const currentPiece = findPieceFrom({ x: i, y: piece.position.y }, pieces);
    if (currentPiece && currentPiece.color !== piece.color) {
      moves.push({
        from: piece,
        to: { ...piece, position: { x: i, y: piece.position.y } },
      });
      break;
    }

    moves.push({
      from: piece,
      to: { ...piece, position: { x: i, y: piece.position.y } },
    });
  }

  return moves;
};

const getMovesLeft = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  for (let i = piece.position.x; i >= 0; i--) {
    const currentPiece = findPieceFrom({ x: i, y: piece.position.y }, pieces);
    if (currentPiece && currentPiece.color !== piece.color) {
      moves.push({ from: piece, to: { ...piece, position: { x: i, y: piece.position.y } } });
      break;
    }

    moves.push({ from: piece, to: { ...piece, position: { x: i, y: piece.position.y } } });
  }

  return moves;
};

const getMovesUp = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  for (let i = piece.position.y; i < 7; i++) {
    const currentPiece = findPieceFrom({ x: piece.position.x, y: i }, pieces);
    if (currentPiece && currentPiece.color !== piece.color) {
      moves.push({
        from: piece,
        to: { ...piece, position: { x: piece.position.x, y: i } },
      });
      break;
    }

    moves.push({
      from: piece,
      to: { ...piece, position: { x: piece.position.x, y: i } },
    });
  }

  return moves;
};

const getMovesDown = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  for (let i = piece.position.y; i >= 0; i--) {
    const currentPiece = findPieceFrom({ x: piece.position.x, y: i }, pieces);
    if (currentPiece && currentPiece.color !== piece.color) {
      moves.push({
        from: piece,
        to: { ...piece, position: { x: piece.position.x, y: i } },
      });
      break;
    }

    moves.push({
      from: piece,
      to: { ...piece, position: { x: piece.position.x, y: i } },
    });
  }

  return moves;
};

export const generateRookMoves = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  moves.push(...getMovesRight(piece, pieces));
  moves.push(...getMovesLeft(piece, pieces));
  moves.push(...getMovesUp(piece, pieces));
  moves.push(...getMovesDown(piece, pieces));

  return moves;
};
