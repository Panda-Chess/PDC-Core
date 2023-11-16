import { Move } from "..";
import { Piece } from "../../../piece/piece-manager.service";
import { getCommonMoves } from "../common-move.generator";

export const generateBishopMoves = (piece: Piece, pieces: Piece[]): Move[] =>{
    const moves: Move[] = [];

    if(piece.position.x === -1 || piece.position.y === -1)
        return moves;

    moves.push(...getCommonMoves(piece, pieces, {x: -1, y: -1}));
    moves.push(...getCommonMoves(piece, pieces, {x: 1, y: -1}));
    moves.push(...getCommonMoves(piece, pieces, {x: 1, y: 1}));
    moves.push(...getCommonMoves(piece, pieces, {x: -1, y: 1}));

    return moves;
};