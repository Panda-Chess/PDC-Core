import { Piece, PieceType } from "../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "../move-generator.srvice";

const getDoubleMove = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
    const firstStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment }, pieces);
    const secondStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment * 2 }, pieces);

    if (!piece.wasMoved && !firstStep && !secondStep) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x,
                y: piece.position.y + increment * 2,
            },
        };

        return {
            from: piece,
            to: nextPosition,
        };
    }
};

const getSimpleMove = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
    const firstStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment }, pieces);
    const canMoveForward = piece.position.y + increment > 0;
    const canMoveBackward = piece.position.y + increment < 7;

    if (!firstStep && canMoveForward && canMoveBackward) {
        const nextPosition: Piece = {
            ...piece,
            position: {
                x: piece.position.x,
                y: piece.position.y + increment,
            },
        };

        return {
            from: piece,
            to: nextPosition,
        };
    }
};

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

const getAttackMoves = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
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

const getChangePawn = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
    const moves: Move[] = [];

    if ((piece.position.y === 7 && increment === 1) || (piece.position.y === 0 && increment === -1)) {
        Object.keys(PieceType).forEach((key) => {
            if (key === "Pawn") return;

            moves.push({
                from: piece,
                to: {
                    ...piece,
                    pieceType: key as PieceType,
                    position: {
                        x: piece.position.x,
                        y: piece.position.y + increment,
                    },
                },
            });
        });
    }

    return moves;
};

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const doubleMove = getDoubleMove(piece, pieces, piece.color === "white" ? 1 : -1);
    if (doubleMove) {
        moves.push(doubleMove);
    }

    const simpleMove = getSimpleMove(piece, pieces, piece.color === "white" ? 1 : -1);
    if (simpleMove) {
        moves.push(simpleMove);
    }

    const attackMoves = getAttackMoves(piece, pieces, piece.color === "white" ? 1 : -1);
    moves.push(...attackMoves);

    const changePawn = getChangePawn(piece, pieces, piece.color === "white" ? 1 : -1);
    moves.push(...changePawn);

    return moves;
};
