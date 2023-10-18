import { Piece } from "../../../Piece/piece-manager.service";
import { Move } from "./../../move-generators";
import { getAttackMoves } from "./attack-move.generator";
import { getChangePawn } from "./change-move.generator";
import { getDoubleMove } from "./double-move.generator";
import { getSimpleMove } from "./simple-move.generator";

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const doubleMove = getDoubleMove(piece, pieces, piece.color === "white" ? 1 : -1);
    if (doubleMove) {
        moves.push(doubleMove);
    }

    const simpleMove = getSimpleMove(piece, pieces, piece.color === "white" ? 1 : -1);
    if (simpleMove) {
        moves.push(simpleMove);
    }

    const attackMoves = getAttackMoves(piece, pieces, piece.color === "white" ? 1 : -1);
    moves.push(...attackMoves);

    const changePawn = getChangePawn(piece, pieces, piece.color === "white" ? 1 : -1);
    moves.push(...changePawn);

    return moves;
};
