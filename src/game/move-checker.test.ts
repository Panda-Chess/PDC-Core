import { describe } from "@jest/globals";
import { Piece, PieceType } from "../piece/piece-manager.service";
import { canMove } from "./move-checker";

describe('MoveChecker', () => {
    it('can move', () => {
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

        const move = canMove(pieces, "white");

        expect(move).toBeTruthy();
    });

    it('can not move', () => {
        const pieces: Piece[] = [
            {
                pieceId: "1",
                pieceType: PieceType.Pawn,
                wasMoved: false,
                color: "white",
                position: { x: 0, y: 0 },
            },
            {
                pieceId: "2",
                pieceType: PieceType.Queen,
                wasMoved: false,
                color: "black",
                position: { x: 0, y: 1 },
            },
        ];

        const move = canMove(pieces, "white");

        expect(move).toBeFalsy();
    });
});