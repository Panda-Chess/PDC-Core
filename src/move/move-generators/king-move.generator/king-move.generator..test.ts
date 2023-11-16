import { describe } from "@jest/globals";
import { Piece, PieceType } from "../../../piece/piece-manager.service";
import { Move } from "../../move-generators/move.generators";
import { generateKingMoves } from "./king-move.generator";

describe("generateKingMoves", () => {
    it("should generate three moves", () => {
        const piece: Piece = {
            pieceId: "1",
            pieceType: PieceType.King,
            wasMoved: false,
            color: "white",
            position: { x: 0, y: 0 },
        };

        const pieces: Piece[] = [
            piece
        ];

        const expectedMoves: Move[] = [
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 0, y: 1 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 1, y: 0 },
                    wasMoved: true,
                },
            },
            {
                from: piece,
                to: {
                    ...piece,
                    position: { x: 1, y: 1 },
                    wasMoved: true,
                },
            },
        ];

        const result = generateKingMoves(piece, pieces);

        expect(result).toEqual(expectedMoves);
    });
});