import { Move } from "..";
import { Piece } from "../../../piece/piece-manager.service";
import { getMovesDown } from "./down-move.generator";
import { getMovesLeft } from "./left-move.generator";
import { getMovesRight } from "./right-move.generator";
import { getMovesUp } from "./up-move.generator";

export const generateKnightMoves = (piece: Piece, pieces: Piece[]): Move[] =>{
    const moves: Move[] = [];

    if(piece.position.x === -1 || piece.position.y === -1)
        return moves;

    const upMoves = getMovesUp(piece, pieces);
    if(upMoves.length){
        moves.push(...upMoves.map((move) => ({...move, to: {...move.to, wasMoved: true}})));
    }

    const downMoves = getMovesDown(piece, pieces);
    if(downMoves.length){
        moves.push(...downMoves.map((move) => ({...move, to: {...move.to, wasMoved: true}})));
    }

    const leftMoves = getMovesLeft(piece, pieces);
    if(leftMoves.length){
        moves.push(...leftMoves.map((move) => ({...move, to: {...move.to, wasMoved: true}})));
    }

    const rightMoves = getMovesRight(piece, pieces);
    if(rightMoves.length){
        moves.push(...rightMoves.map((move) => ({...move, to: {...move.to, wasMoved: true}})));
    }

    return moves;
};