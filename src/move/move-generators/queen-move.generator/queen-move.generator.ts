import { Move } from "..";
import { Piece } from "../../../Piece/piece-manager.service";
import { generateBishopMoves } from "../bishop-move.generator";
import { generateRookMoves } from "../rook-move.generator";

export const generateQueenMoves = (piece: Piece, pieces: Piece[]): Move[] =>{
    const moves: Move[] = [];

    if(piece.position.x === -1 || piece.position.y === -1)
        return moves;

    moves.push(...generateRookMoves(piece, pieces));
    moves.push(...generateBishopMoves(piece, pieces));

    return moves;
};