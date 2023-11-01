import { Move } from "..";
import { Piece } from "../../../Piece/piece-manager.service";
import { getCommonMoves } from "../common-move.generator";

export const generateBishopMoves = (piece: Piece, pieces: Piece[]): Move[] =>{
    const moves: Move[] = [];

    moves.push(...getCommonMoves(piece, pieces, {x: -1, y: -1}));
    moves.push(...getCommonMoves(piece, pieces, {x: 1, y: -1}));
    moves.push(...getCommonMoves(piece, pieces, {x: 1, y: 1}));
    moves.push(...getCommonMoves(piece, pieces, {x: -1, y: 1}));

    return moves;
};