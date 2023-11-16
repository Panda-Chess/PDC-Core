import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../piece/piece-manager.service";
import { Move, getMoves } from "./move.generators";

describe("MoveGenerators", () => {
    it("should make simple move", () => {
        const piece: Piece = {
            pieceId: "1",
            color: "white",
            pieceType: PieceType.Pawn,
            wasMoved: false,
            position: {
                x: 0,
                y: 1,
            },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.King,
                wasMoved: false,
                position: {
                    x: 1,
                    y: 1,
                },
            }
        ];

        const expectedMoves = [
            {
                from: piece,
                to: {
                    pieceId: "1",
                    color: "white",
                    pieceType: PieceType.Pawn,
                    wasMoved: true,
                    position: {
                        x: 0,
                        y: 3,
                    },
                },
            },
            {
                from: piece,
                to: {
                    pieceId: "1",
                    color: "white",
                    pieceType: PieceType.Pawn,
                    wasMoved: true,
                    position: {
                        x: 0,
                        y: 2,
                    },
                },
            },
        ];

        const moves = getMoves(piece, pieces);

        expect(moves).toEqual(expectedMoves);
    });

    it("should make no move", () => {
            const piece: Piece = {
            pieceId: "1",
            color: "white",
            pieceType: PieceType.Pawn,
            wasMoved: false,
            position: {
                x: 0,
                y: 1,
            },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.King,
                wasMoved: false,
                position: {
                    x: 1,
                    y: 1,
                },
            },
            {
                pieceId: "3",
                color: "black",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 2,
                    y: 2,
                },
            }
        ];

        const expectedMoves: Move[] = [];

        const moves = getMoves(piece, pieces);

        expect(moves).toEqual(expectedMoves);
    });

    it("should make no move", () => {
            const piece: Piece = {
            pieceId: "1",
            color: "white",
            pieceType: PieceType.Pawn,
            wasMoved: false,
            position: {
                x: 1,
                y: 1,
            },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.King,
                wasMoved: false,
                position: {
                    x: 0,
                    y: 1,
                },
            },
            {
                pieceId: "3",
                color: "black",
                pieceType: PieceType.Queen,
                wasMoved: false,
                position: {
                    x: 2,
                    y: 1,
                },
            }
        ];

        const expectedMoves: Move[] = [];

        const moves = getMoves(piece, pieces);

        expect(moves).toEqual(expectedMoves);
    });
});