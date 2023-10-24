import {Piece} from "../../../Piece/piece-manager.service";
import {Move} from "../../move-generators";
import {getMovesDown} from "./down-move.generator";
import {getMovesLeft} from "./left-move.generator";
import {getMovesRight} from "./right-move.generator";
import {getMovesUp} from "./up-move.generator";

export const generateRookMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    moves.push(...getMovesRight(piece, pieces));
    moves.push(...getMovesLeft(piece, pieces));
    moves.push(...getMovesUp(piece, pieces));
    moves.push(...getMovesDown(piece, pieces));

    return moves;
};
