import { Piece, PieceType } from "../piece-manager.service";
import { generatePiece } from "./piece.generator";

export const generateWhitePieceSet = (): Piece[] => {
    const pieces: Piece[] = [];

    // Generate white pawns
    for(let i = 0; i < 8; i++) {
        pieces.push(generatePiece(PieceType.Pawn, "white", { x: i, y: 1 }));
    }

    // Generate white pieces
    pieces.push(generatePiece(PieceType.Rook, "white", { x: 0, y: 0 }));
    pieces.push(generatePiece(PieceType.Knight, "white", { x: 1, y: 0 }));
    pieces.push(generatePiece(PieceType.Bishop, "white", { x: 2, y: 0 }));
    pieces.push(generatePiece(PieceType.Queen, "white", { x: 3, y: 0 }));
    pieces.push(generatePiece(PieceType.King, "white", { x: 4, y: 0 }));
    pieces.push(generatePiece(PieceType.Bishop, "white", { x: 5, y: 0 }));
    pieces.push(generatePiece(PieceType.Knight, "white", { x: 6, y: 0 }));
    pieces.push(generatePiece(PieceType.Rook, "white", { x: 7, y: 0 }));

    return pieces;
};