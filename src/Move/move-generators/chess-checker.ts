import { Move } from ".";
import { Piece, PieceType } from "../../Piece/piece-manager.service";
import { generateBishopMoves } from "./bishop-move.generator";
import { generateKnightMoves } from "./knight-move.generator";
import { getAttackMoves } from "./pawn-move.generator/attack-move.generator";
import { generateQueenMoves } from "./queen-move.generator";
import { generateRookMoves } from "./rook-move.generator";

const getChessMoves = (piece: Piece, pieces: Piece[], pieceType: PieceType): boolean => {
    const atacator = pieces.find((y) => y.position.x === piece.position.x && y.position.y === piece.position.y);

    if(!atacator)
        return false;

    if(atacator.color === piece.color)
        return false;

    if(atacator.pieceType === pieceType)
        return true;

    return false;
};

export const isChess = (pieces: Piece[], color: "white" | "black") => {
    const piece = pieces.find((x) => x.pieceType === PieceType.King && x.color === color);
    let isChess = false;

    if(!piece)
        return false;

    const queenMoves: Move[] = generateQueenMoves(piece, pieces);
    isChess = queenMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Queen);
    });

    const pawnMoves: Move[] = getAttackMoves(piece, pieces);
    isChess = pawnMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Pawn);
    });

    const rookMoves: Move[] = generateRookMoves(piece, pieces);
    isChess = rookMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Rook);
    });

    const bishopMoves: Move[] = generateBishopMoves(piece, pieces);
    isChess = bishopMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Bishop);
    });

    const knightMoves: Move[] = generateKnightMoves(piece, pieces);
    isChess = knightMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Knight);
    });

    return isChess;
};