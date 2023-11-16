import { Piece, PieceType } from "../../../piece/piece-manager.service";
import { Move } from "../../move-generators/move.generators";
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

    it("should generate change piece", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Pawn,
            wasMoved: true,
            color: "white",
            position: { x: 7, y: 6 },
        };

        const eliminatedPieces: Piece[] = [
            {
                pieceId: "2",
                pieceType: PieceType.Queen,
                wasMoved: false,
                color: "white",
                position: { x: -1, y: -1 },
            },
            {
                pieceId: "3",
                pieceType: PieceType.Bishop,
                wasMoved: false,
                color: "white",
                position: { x: -1, y: -1 },
            },
        ];

        const pieces: Piece[] = [
            piece,
            ...eliminatedPieces,
            {
                pieceId: "4",
                pieceType: PieceType.Pawn,
                wasMoved: false,
                color: "white",
                position: { x: -1, y: -1 },
            },
            {
                pieceId: "5",
                pieceType: PieceType.Queen,
                wasMoved: false,
                color: "black",
                position: { x: -1, y: -1 },
            },
        ];

        const expectedMoves: Move[] = eliminatedPieces.map((eliminatedPiece) => ({
            from: piece,
            to: {...eliminatedPiece, position: { x: 7, y: 7 }, wasMoved: true},
        }));

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
