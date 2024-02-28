import { describe } from "@jest/globals";
import { Piece, PieceType } from "../piece/piece-manager.service";
import { GameStates, checkGameState } from "./game-checker";

describe("GameChecker", () => {
    it("should return chess", () => {
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
                pieceType: PieceType.Rook,
                wasMoved: false,
                color: "black",
                position: { x: 0, y: 7 },
            },
            {
                pieceId: "3",
                pieceType: PieceType.Rook,
                wasMoved: false,
                color: "black",
                position: { x: 1, y: 7 },
            },
        ];

        const gameState = checkGameState(pieces);

        expect(gameState).toBe(GameStates.BlackWin);
    });

    // it("should return draw", () => {
    //     const pieces: Piece[] = [
    //         {
    //             pieceId: "1",
    //             pieceType: PieceType.King,
    //             wasMoved: false,
    //             color: "white",
    //             position: { x: 0, y: 0 },
    //         },
    //         {
    //             pieceId: "2",
    //             pieceType: PieceType.Rook,
    //             wasMoved: false,
    //             color: "black",
    //             position: { x: 1, y: 7 },
    //         },
    //         {
    //             pieceId: "3",
    //             pieceType: PieceType.Rook,
    //             wasMoved: false,
    //             color: "black",
    //             position: { x: 7, y: 1 },
    //         },
    //     ];

    //     const gameState = checkGameState(pieces);

    //     expect(gameState).toBe(GameStates.Draw);
    // });

    it("should return in progress", () => {
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
                pieceType: PieceType.Rook,
                wasMoved: false,
                color: "black",
                position: { x: 1, y: 7 },
            },
        ];

        const gameState = checkGameState(pieces);

        expect(gameState).toBe(GameStates.InProgress);
    });
});