import { Piece } from "../../../piece/piece-manager.service";
import {
    Move, findPieceFrom
} from "..";

export const getSimpleMove = (piece: Piece, pieces: Piece[]): Move | void => {
    const increment = piece.color === "white" ? 1 : -1;

    const firstStep = findPieceFrom({
        x: piece.position.x,
        y: piece.position.y + increment 
    }, pieces);
    const canMoveForward = piece.position.y + increment > 0;
    const canMoveBackward = piece.position.y + increment < 7;

    if (!firstStep && canMoveForward && canMoveBackward) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x,
                y: piece.position.y + increment 
            } 
        };

        return {
            from: piece,
            to: nextPosition 
        };
    }
};
