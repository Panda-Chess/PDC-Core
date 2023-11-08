import { Piece, PieceType } from "../../../Piece/piece-manager.service";
import { Move } from "..";
import { generatePawnMoves } from "./pawn-move.generator";
import {describe, it, expect} from "@jest/globals";

describe("generatePawnMoves", () => {
    it("should generate no moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Pawn,
            wasMoved: false,
            color: "white",
            position: { x: 2, y: 1 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "black",
                position: { x: 2, y: 2 },
            },
        ];
        const expectedMoves: Move[] = [];

        const result = generatePawnMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it("should generate one move", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Pawn,
            wasMoved: true,
            color: "white",
            position: { x: 2, y: 1 },
        };

        const pieces: Piece[] = [
            piece,
        ];
        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {...piece, position: { x: 2, y: 2 }, wasMoved: true},
            },
        ];

        const result = generatePawnMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it("should generate two moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Pawn,
            wasMoved: false,
            color: "white",
            position: { x: 2, y: 1 },
        };

        const pieces: Piece[] = [
            piece,
        ];
        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {...piece, position: { x: 2, y: 3 }, wasMoved: true},
            },
            {
                from: piece,
                to: {...piece, position: { x: 2, y: 2 }, wasMoved: true},
            },
        ];

        const result = generatePawnMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it("should generate attack moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Pawn,
            wasMoved: true,
            color: "white",
            position: { x: 2, y: 1 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "black",
                position: { x: 3, y: 2 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "black",
                position: { x: 1, y: 2 },
            },
        ];
        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {...piece, position: { x: 2, y: 2 }, wasMoved: true},
            },
            {
                from: piece,
                to: {...piece, position: { x: 1, y: 2 }, wasMoved: true},
            },
            {
                from: piece,
                to: {...piece, position: { x: 3, y: 2 }, wasMoved: true},
            },
        ];

        const result = generatePawnMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
});
