import {
    Piece, PieceType, Position
} from "../../Piece/piece-manager.service";
import { isChess } from "./chess-checker";
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

const eliminateChessMoves = (moves: Move[], pieces: Piece[]): Move[] => {
    moves = moves.filter((move) => {
        return !isChess([...pieces.filter(x=>x.pieceId !== move.from.pieceId), move.to], move.from.color);
    });

    return moves;
};

export const getMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    switch (piece.pieceType) {
    case PieceType.Pawn:
        moves.push(...eliminateChessMoves(generatePawnMoves(piece, pieces), pieces));
        break;
    case PieceType.Rook:
        moves.push(...eliminateChessMoves(generateRookMoves(piece, pieces), pieces));
        break;
    case PieceType.Knight:
        moves.push(...eliminateChessMoves(generateRookMoves(piece, pieces), pieces));
        break;
    case PieceType.Bishop:
        moves.push(...eliminateChessMoves(generateRookMoves(piece, pieces), pieces));
        break;
    case PieceType.Queen:
        moves.push(...eliminateChessMoves(generateRookMoves(piece, pieces), pieces));
        break;
    case PieceType.King:
        moves.push(...eliminateChessMoves(generateRookMoves(piece, pieces), pieces));
        break;
    }

    return moves;
};
