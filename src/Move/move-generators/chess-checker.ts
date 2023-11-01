import { Move } from ".";
import { Piece, PieceType } from "../../Piece/piece-manager.service";
import { generateQueenMoves } from "./queen-move.generator";

export const isChess = (piece: Piece, pieces: Piece[]) => {
    const queenMoves: Move[] = generateQueenMoves(piece, pieces);

    return queenMoves.some((x) => {
        const atacator = pieces.find((y) => y.position.x === x.to.position.x && y.position.y === x.to.position.y);

        if(!atacator)
            return false;

        if(atacator.color === piece.color)
            return false;

        if(atacator.pieceType === PieceType.Queen)
            return true;
    });
};