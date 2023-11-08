import {Piece} from "../../../Piece/piece-manager.service";
import {Move} from "./../../move-generators";
import {getAttackMoves} from "./attack-move.generator";
import {getChangePawn} from "./change-move.generator";
import {getDoubleMove} from "./double-move.generator";
import {getSimpleMove} from "./simple-move.generator";

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const doubleMove = getDoubleMove(piece, pieces);
    if (doubleMove) {
        moves.push({...doubleMove, to: {...doubleMove.to, wasMoved: true}});
    }

    const simpleMove = getSimpleMove(piece, pieces);
    if (simpleMove) {
        moves.push({...simpleMove, to: {...simpleMove.to, wasMoved: true}});
    }

    const attackMoves = getAttackMoves(piece, pieces);
    moves.push(...attackMoves.map((move) => ({...move, to: {...move.to, wasMoved: true}})));

    const changePawn = getChangePawn(piece);
    moves.push(...changePawn.map((move) => ({...move, to: {...move.to, wasMoved: true}})));

    return moves;
};
