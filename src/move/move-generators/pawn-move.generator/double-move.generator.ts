import { Piece } from "../../../piece/piece-manager.service";
import {
    Move, findPieceFrom
} from "../../move-generators/move.generators";

export const getDoubleMove = (piece: Piece, pieces: Piece[]): Move | void => {
    const increment = piece.color === "white" ? 1 : -1;

    const firstStep = findPieceFrom({
        x: piece.position.x, y: piece.position.y + increment 
    }, pieces);
    const secondStep = findPieceFrom({
        x: piece.position.x, y: piece.position.y + increment * 2 
    }, pieces);

    if (!piece.wasMoved && !firstStep && !secondStep) {
        const nextPosition: Piece = {
            ...piece, position: {
                x: piece.position.x, y: piece.position.y + increment * 2 
            } 
        };

        return {
            from: piece, to: nextPosition 
        };
    }
};
