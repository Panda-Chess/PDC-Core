import { Move } from "../move/move-generators/move.generators";
import { Piece, PieceType } from "../piece/piece-manager.service";
import { generateBishopMoves } from "../move/move-generators/bishop-move.generator";
import { generateKnightMoves } from "../move/move-generators/knight-move.generator";
import { getAttackMoves } from "../move/move-generators/pawn-move.generator/attack-move.generator";
import { generateQueenMoves } from "../move/move-generators/queen-move.generator";
import { generateRookMoves } from "../move/move-generators/rook-move.generator";

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

const isQueenChess = (piece: Piece, pieces: Piece[]) => {
    const queenMoves: Move[] = generateQueenMoves(piece, pieces);
    return queenMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Queen);
    });
};

const isPawnChess = (piece: Piece, pieces: Piece[]) => {
    const pawnMoves: Move[] = getAttackMoves(piece, pieces);
    return pawnMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Pawn);
    });
};

const isRookChess = (piece: Piece, pieces: Piece[]) => {
    const rookMoves: Move[] = generateRookMoves(piece, pieces);
    return rookMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Rook);
    });
};

const isBishopChess = (piece: Piece, pieces: Piece[]) => {
    const bishopMoves: Move[] = generateBishopMoves(piece, pieces);
    return bishopMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Bishop);
    });
};

const isKnightChess = (piece: Piece, pieces: Piece[]) => {
    const knightMoves: Move[] = generateKnightMoves(piece, pieces);
    return knightMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.Knight);
    });
};

const isKingChess = (piece: Piece, pieces: Piece[]) => {
    const kingMoves: Move[] = generateQueenMoves(piece, pieces);
    return kingMoves.some((x) => {
        return getChessMoves(x.to, pieces, PieceType.King);
    });
};

export const isChess = (pieces: Piece[], color: "white" | "black") => {
    const piece = pieces.find((x) => x.pieceType === PieceType.King && x.color === color);

    if(!piece)
        return false;

    if(isQueenChess(piece, pieces))
        return true;

    if(isPawnChess(piece, pieces))
        return true;

    if(isRookChess(piece, pieces))
        return true;

    if(isBishopChess(piece, pieces))
        return true;

    if(isKnightChess(piece, pieces))
        return true;

    if(isKingChess(piece, pieces))
        return true;

    return false;
};