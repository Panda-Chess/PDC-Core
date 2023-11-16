import { Move } from "../../move-generators/move.generators";
import { Piece } from "../../../piece/piece-manager.service";
import { diagonalMoves } from "./diagonal-move.generator";
import { straightMoves } from "./straight-move.generator";

export const generateKingMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(piece.position.x === -1 || piece.position.y === -1)
        return moves;

    moves.push(...straightMoves(piece, pieces));
    moves.push(...diagonalMoves(piece, pieces));

    return moves;
};