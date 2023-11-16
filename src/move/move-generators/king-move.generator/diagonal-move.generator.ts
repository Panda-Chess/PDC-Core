import { Move, findPieceFrom, isPositionValid } from "../move.generators";
import { Piece } from "../../../piece/piece-manager.service";

const leftUpMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x - 1, y: piece.position.y - 1}))
        return moves;

    const leftUpMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y - 1}, pieces);
    if(!leftUpMoves || leftUpMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x - 1, 
                    y: piece.position.y - 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const rightUpMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x + 1, y: piece.position.y - 1}))
        return moves;

    const rightUpMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y - 1}, pieces);
    if(!rightUpMoves || rightUpMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x + 1, 
                    y: piece.position.y - 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const leftDownMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x - 1, y: piece.position.y + 1}))
        return moves;

    const leftDownMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y + 1}, pieces);
    if(!leftDownMoves || leftDownMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x - 1, 
                    y: piece.position.y + 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const rightDownMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x + 1, y: piece.position.y + 1}))
        return moves;

    const rightDownMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y + 1}, pieces);
    if(!rightDownMoves || rightDownMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x + 1, 
                    y: piece.position.y + 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

export const diagonalMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    moves.push(...leftUpMoves(piece, pieces));
    moves.push(...rightUpMoves(piece, pieces));
    moves.push(...leftDownMoves(piece, pieces));
    moves.push(...rightDownMoves(piece, pieces));

    return moves;
};