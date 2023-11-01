import {Piece} from "../../../Piece/piece-manager.service";
import {Move} from "../../move-generators";
import { getCommonMoves } from "../common-move.generator";

export const generateRookMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    moves.push(...getCommonMoves(piece, pieces, {x: -1, y: 0}));
    moves.push(...getCommonMoves(piece, pieces, {x: 1, y: 0}));
    moves.push(...getCommonMoves(piece, pieces, {x: 0, y: -1}));
    moves.push(...getCommonMoves(piece, pieces, {x: 0, y: 1}));

    return moves;
};
