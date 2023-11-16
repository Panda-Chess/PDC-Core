import { Move, findPieceFrom, isPositionValid } from "../../move-generators/move.generators";
import { Piece } from "../../../piece/piece-manager.service";

const upMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x, y: piece.position.y - 1}))
        return moves;

    const upMoves = findPieceFrom({x: piece.position.x, y: piece.position.y - 1}, pieces);
    if(!upMoves || upMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x, 
                    y: piece.position.y - 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const downMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x, y: piece.position.y + 1}))
        return moves;

    const downMoves = findPieceFrom({x: piece.position.x, y: piece.position.y + 1}, pieces);
    if(!downMoves || downMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x, 
                    y: piece.position.y + 1
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const leftMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x - 1, y: piece.position.y}))
        return moves;

    const leftMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y}, pieces);
    if(!leftMoves || leftMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x - 1, 
                    y: piece.position.y
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

const rightMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    if(!isPositionValid({x: piece.position.x + 1, y: piece.position.y}))
        return moves;

    const rightMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y}, pieces);
    if(!rightMoves || rightMoves.color !== piece.color){
        moves.push({
            from: piece, 
            to: {
                ...piece, 
                position: {
                    x: piece.position.x + 1, 
                    y: piece.position.y
                },
                wasMoved: true
            }
        });
    }

    return moves;
};

export const straightMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    moves.push(...upMoves(piece, pieces));
    moves.push(...downMoves(piece, pieces));
    moves.push(...leftMoves(piece, pieces));
    moves.push(...rightMoves(piece, pieces));

    return moves;
};