import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../../piece/piece-manager.service";
import { Move } from "../../move-generators/move.generators";
import { generateBishopMoves } from "./bishop-move.generator";

describe('BishopMoveGenerator', () => {
    it('should generate no moves', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Bishop,
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
                position: { x: 1, y: 1 },
            },
        ];

        const expectedMoves: Move[] = [];

        const result = generateBishopMoves(piece, pieces);
    });

    it('should generate one move', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Bishop,
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
                position: { x: 2, y: 2 },
            },
        ];

        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {...piece, position: { x: 1, y: 1 }, wasMoved: true},
            },
        ];

        const result = generateBishopMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });

    it('should generate attack moves', () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.Bishop,
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
                position: { x: 1, y: 1 },
            },
        ];

        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {...piece, position: { x: 1, y: 1 }, wasMoved: true},
            },
        ];

        const result = generateBishopMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
});