import {
    Piece, PieceType, Position
} from "../../Piece/piece-manager.service";
import {generatePawnMoves} from "./pawn-move.generator/pawn-move.generator";
import {generateRookMoves} from "./rook-move.generator";

export interface Move {
  from: Piece;
  to: Piece;
}

export const findPieceFrom = (position: Position, pieces: Piece[]): Piece | void => {
    return pieces.find((x) => x.position.x === position.x && x.position.y === position.y);
};

export const isPositionValid = (position: Position): boolean => {
    return position.x >= 0 && position.x <= 7 && position.y >= 0 && position.y <= 7;
};

export const getMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    switch (piece.pieceType) {
    case PieceType.Pawn:
        moves.push(...generatePawnMoves(piece, pieces));
        break;
    case PieceType.Rook:
        moves.push(...generateRookMoves(piece, pieces));
        break;
    }

    return moves;
};
