import { Piece } from "../../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "./../../move-generators";

const getLeftAttack = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
    const leftAttack = findPieceFrom({ x: piece.position.x - 1, y: piece.position.y + increment }, pieces);

    if (leftAttack && leftAttack.color !== piece.color) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x - 1,
                y: piece.position.y + increment,
            },
        };

        return {
            from: piece,
            to: nextPosition,
        };
    }
};

const getRightAttack = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
    const rightAttack = findPieceFrom({ x: piece.position.x + 1, y: piece.position.y + increment }, pieces);

    if (rightAttack && rightAttack.color !== piece.color) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x + 1,
                y: piece.position.y + increment,
            },
        };

        return {
            from: piece,
            to: nextPosition,
        };
    }
};

export const getAttackMoves = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
    const moves: Move[] = [];

    const leftAttack = getLeftAttack(piece, pieces, increment);

    if (leftAttack) {
        moves.push(leftAttack);
    }

    const rightAttack = getRightAttack(piece, pieces, increment);

    if (rightAttack) {
        moves.push(rightAttack);
    }

    return moves;
};
