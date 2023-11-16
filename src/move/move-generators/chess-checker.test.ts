import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../piece/piece-manager.service";
import { isChess } from "./chess-checker";

describe('ChessChecker', () => {
    it('should return chess', () => {
        const pieces: Piece[] = [
            {
                pieceId: "1",
                pieceType: PieceType.King,
                wasMoved: false,
                color: "white",
                position: { x: 0, y: 0 },
            },
            {
                pieceId: "2",
                pieceType: PieceType.Queen,
                wasMoved: false,
                color: "black",
                position: { x: 0, y: 7 },
            },
        ];

        const chessChecker = isChess(pieces, "white");

        expect(chessChecker).toBeTruthy();
    });

    it('should return no chess', () => {
        const pieces: Piece[] = [
            {
                pieceId: "1",
                pieceType: PieceType.King,
                wasMoved: false,
                color: "white",
                position: { x: 0, y: 0 },
            },
            {
                pieceId: "2",
                pieceType: PieceType.Queen,
                wasMoved: false,
                color: "black",
                position: { x: 1, y: 7 },
            },
        ];

        const chessChecker = isChess(pieces, "white");

        expect(chessChecker).toBeFalsy();
    });
});