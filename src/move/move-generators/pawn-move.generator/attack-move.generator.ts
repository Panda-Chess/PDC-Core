import { Piece } from "../../../piece/piece-manager.service";
import {
    Move, findPieceFrom
} from "..";

const getLeftAttack = (piece: Piece, pieces: Piece[]): Move | void => {
    const increment = piece.color === "white" ? 1 : -1;

    const leftAttack = findPieceFrom({
        x: piece.position.x - 1,
        y: piece.position.y + increment 
    }, pieces);

    if (leftAttack && leftAttack.color !== piece.color) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x - 1,
                y: piece.position.y + increment 
            } 
        };

        return {
            from: piece,
            to: nextPosition 
        };
    }
};

const getRightAttack = (piece: Piece, pieces: Piece[]): Move | void => {
    const increment = piece.color === "white" ? 1 : -1;

    const rightAttack = findPieceFrom({
        x: piece.position.x + 1,
        y: piece.position.y + increment 
    }, pieces);

    if (rightAttack && rightAttack.color !== piece.color) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x + 1,
                y: piece.position.y + increment 
            } 
        };

        return {
            from: piece,
            to: nextPosition 
        };
    }
};

export const getAttackMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const leftAttack = getLeftAttack(piece, pieces);

    if (leftAttack) {
        moves.push(leftAttack);
    }

    const rightAttack = getRightAttack(piece, pieces);

    if (rightAttack) {
        moves.push(rightAttack);
    }

    return moves;
};
