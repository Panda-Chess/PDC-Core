import { Move, findPieceFrom } from "..";
import { Piece } from "../../../Piece/piece-manager.service";
import { straightMoves } from "./straight-move.generator";

const diagonalMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const upLeftMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y - 1}, pieces);
    if(!upLeftMoves || upLeftMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x - 1, y: piece.position.y - 1}}});
    }

    const upRightMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y - 1}, pieces);
    if(!upRightMoves || upRightMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x + 1, y: piece.position.y - 1}}});
    }

    const downLeftMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y + 1}, pieces);
    if(!downLeftMoves || downLeftMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x - 1, y: piece.position.y + 1}}});
    }

    const downRightMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y + 1}, pieces);
    if(!downRightMoves || downRightMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x + 1, y: piece.position.y + 1}}});
    }

    return moves;
};

export const generateKingMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    moves.push(...straightMoves(piece, pieces).map((move) => ({...move, to: {...move.to, wasMoved: true}})));
    moves.push(...diagonalMoves(piece, pieces).map((move) => ({...move, to: {...move.to, wasMoved: true}})));

    return moves;
};