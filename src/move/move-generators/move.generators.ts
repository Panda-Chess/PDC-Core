import {
    Piece, PieceType, Position
} from "../../piece/piece-manager.service";
import { makeMove } from "../move-maker";
import { generateBishopMoves } from "./bishop-move.generator";
import { isChess } from "../../game/chess-checker";
import { generateKingMoves } from "./king-move.generator/king-move.generator";
import { generateKnightMoves } from "./knight-move.generator";
import {generatePawnMoves} from "./pawn-move.generator/pawn-move.generator";
import { generateQueenMoves } from "./queen-move.generator";
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
        return !isChess(makeMove(move, pieces), move.from.color);
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
        moves.push(...eliminateChessMoves(generateKnightMoves(piece, pieces), pieces));
        break;
    case PieceType.Bishop:
        moves.push(...eliminateChessMoves(generateBishopMoves(piece, pieces), pieces));
        break;
    case PieceType.Queen:
        moves.push(...eliminateChessMoves(generateQueenMoves(piece, pieces), pieces));
        break;
    case PieceType.King:
        moves.push(...eliminateChessMoves(generateKingMoves(piece, pieces), pieces));
        break;
    }

    moves.filter((move) => {
        return !isChess(makeMove(move, pieces), move.from.color);
    });

    return moves;
};
