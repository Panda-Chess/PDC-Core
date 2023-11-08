import { Move, findPieceFrom } from "..";
import { Piece } from "../../../Piece/piece-manager.service";

export const straightMoves = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const upMoves = findPieceFrom({x: piece.position.x, y: piece.position.y - 1}, pieces);
    if(!upMoves || upMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x, y: piece.position.y - 1}}});
    }

    const downMoves = findPieceFrom({x: piece.position.x, y: piece.position.y + 1}, pieces);
    if(!downMoves || downMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x, y: piece.position.y + 1}}});
    }

    const leftMoves = findPieceFrom({x: piece.position.x - 1, y: piece.position.y}, pieces);
    if(!leftMoves || leftMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x - 1, y: piece.position.y}}});
    }

    const rightMoves = findPieceFrom({x: piece.position.x + 1, y: piece.position.y}, pieces);
    if(!rightMoves || rightMoves.color !== piece.color){
        moves.push({from: piece, to: {...piece, position: {x: piece.position.x + 1, y: piece.position.y}}});
    }

    return moves;
};