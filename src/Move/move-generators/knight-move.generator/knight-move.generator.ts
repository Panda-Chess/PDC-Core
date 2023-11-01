import { Move } from "..";
import { Piece } from "../../../Piece/piece-manager.service";
import { getMovesDown } from "./down-move.generator";
import { getMovesLeft } from "./left-move.generator";
import { getMovesRight } from "./right-move.generator";
import { getMovesUp } from "./up-move.generator";

export const generateKnightMoves = (piece: Piece, pieces: Piece[]): Move[] =>{
    const moves: Move[] = [];

    const upMoves = getMovesUp(piece, pieces);
    if(upMoves.length){
        moves.push(...upMoves);
    }

    const downMoves = getMovesDown(piece, pieces);
    if(downMoves.length){
        moves.push(...downMoves);
    }

    const leftMoves = getMovesLeft(piece, pieces);
    if(leftMoves.length){
        moves.push(...leftMoves);
    }

    const rightMoves = getMovesRight(piece, pieces);
    if(rightMoves.length){
        moves.push(...rightMoves);
    }

    return moves;
};