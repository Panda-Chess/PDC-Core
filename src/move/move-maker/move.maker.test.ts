import { describe } from "@jest/globals";
import { Move } from "../move-generators";
import { Piece, PieceType } from "../../piece/piece-manager.service";
import { makeMove } from "./move.maker";

describe("MoveMaker", () => {
    it("should make simple move", () => {
        const move: Move = {
            from: {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 0,
                    y: 0,
                },
            },
            to: {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 1,
                    y: 1,
                },
            },
        };

        const pieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 0,
                    y: 0,
                },
            }
        ];

        const expectedPieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 1,
                    y: 1,
                },
            }
        ];

        const newPieces = makeMove(move, pieces);

        expect(newPieces).toEqual(expectedPieces);
    });

    it("should make capture move", () => {
        const move: Move = {
            from: {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 0,
                    y: 0,
                },
            },
            to: {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 1,
                    y: 1,
                },
            },
        };

        const pieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 0,
                    y: 0,
                },
            },
            {
                pieceId: "2",
                color: "black",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: 1,
                    y: 1,
                },
            }
        ];

        const expectedPieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 1,
                    y: 1,
                },
            },
            {
                pieceId: "2",
                color: "black",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: -1,
                    y: -1,
                },
            }
        ];

        const newPieces = makeMove(move, pieces);

        expect(newPieces).toEqual(expectedPieces);
    });

    it("should make change move", () => {
        const move: Move = {
            from: {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Pawn,
                wasMoved: true,
                position: {
                    x: 0,
                    y: 6,
                },
            },
            to: {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 0,
                    y: 7,
                },
            },
        };

        const pieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Pawn,
                wasMoved: true,
                position: {
                    x: 0,
                    y: 6,
                },
            },
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                position: {
                    x: -1,
                    y: -1,
                },
            }
        ];

        const expectedPieces: Piece[] = [
            {
                pieceId: "1",
                color: "white",
                pieceType: PieceType.Pawn,
                wasMoved: true,
                position: {
                    x: -1,
                    y: -1,
                },
            },
            {
                pieceId: "2",
                color: "white",
                pieceType: PieceType.Bishop,
                wasMoved: true,
                position: {
                    x: 0,
                    y: 7,
                },
            }
        ];

        const newPieces = makeMove(move, pieces);

        expect(newPieces).toEqual(expectedPieces);
    });
});
