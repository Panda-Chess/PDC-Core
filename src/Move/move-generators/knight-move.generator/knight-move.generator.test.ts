import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../../Piece/piece-manager.service";
import { Move } from "..";
import { generateKnightMoves } from "./knight-move.generator";

describe("generateKnightMoves", () => {
    it("should generate no moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Knight,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Knight,
                color: "white",
                position: { x: 2, y: 1 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Knight,
                color: "white",
                position: { x: 1, y: 2 },
            },
        ];
        const expectedMoves: Move[] = [];

        const result = generateKnightMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
    it("should generate all moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Knight,
            wasMoved: false,
            color: "white",
            position: { x: 5, y: 5 },
        };

        const pieces: Piece[] = [
            piece,
        ];
        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 4, y: 3 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 6, y: 3 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 4, y: 7 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 6, y: 7 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 3, y: 4 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 3, y: 6 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 7, y: 4 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 7, y: 6 },
                    wasMoved: true,
                },
            }
        ];

        const result = generateKnightMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
    it("should generate two attacks", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Knight,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Knight,
                color: "black",
                position: { x: 1, y: 2 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Knight,
                color: "black",
                position: { x: 2, y: 1 },
            },
        ];
        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 1, y: 2 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 2, y: 1 },
                    wasMoved: true,
                },
            },
        ];

        const result = generateKnightMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
});