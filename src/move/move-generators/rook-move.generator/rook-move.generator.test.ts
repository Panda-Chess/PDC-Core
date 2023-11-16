import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../../piece/piece-manager.service";
import { generateRookMoves } from "./rook-move.generator";
import { Move } from "..";

describe('RookMoveGenerator', () => {
    it('should generate no moves', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Rook,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "white",
                position: { x: 0, y: 1 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "white",
                position: { x: 1, y: 0 },
            },
        ];

        const expectedMoves: Move[] = [];

        const result = generateRookMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it('should generate one move', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Rook,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "white",
                position: { x: 0, y: 2 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "white",
                position: { x: 1, y: 0 },
            },
        ];

        const expectedMoves: Move[] = [
            {
                from: piece,
                to: { ...piece, position: { x: 0, y: 1 }, wasMoved: true },
            },
        ];

        const result = generateRookMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it('should generate one attack moves', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Rook,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece,
            {
                pieceId: "2",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "black",
                position: { x: 0, y: 1 },
            },
            {
                pieceId: "3",
                wasMoved: false,
                pieceType: PieceType.Pawn,
                color: "white",
                position: { x: 1, y: 0 },
            },
        ];

        const expectedMoves: Move[] = [
            {
                from: piece,
                to: { ...piece, position: { x: 0, y: 1 }, wasMoved: true },
            }
        ];

        const result = generateRookMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
});