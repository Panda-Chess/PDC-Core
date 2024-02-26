import { Move, getMoves } from "../move/move-generators/move.generators";
import { Piece } from "../piece/piece-manager.service";

export const canMove = (pieces: Piece[], color: "white" | "black") => {
    const moves: Move[] = [];

    pieces.forEach((piece) => {
        if (piece.color === color) {
            moves.push(...getMoves(piece, pieces));
        }
    });

    return moves.length > 0;
};