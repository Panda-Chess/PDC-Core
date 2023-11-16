import {Piece} from "../../../piece/piece-manager.service";
import {Move} from "..";
import {getAttackMoves} from "./attack-move.generator";
import {getChangePawn} from "./change-move.generator";
import {getDoubleMove} from "./double-move.generator";
import {getSimpleMove} from "./simple-move.generator";

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if (piece.position.x === -1 || piece.position.y === -1)
        return moves;

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

    const changePawn = getChangePawn(piece, pieces);
    moves.push(...changePawn.map((move) => ({...move, to: {...move.to, wasMoved: true}})));

    return moves;
};
