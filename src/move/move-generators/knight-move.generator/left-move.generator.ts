import {Move, findPieceFrom, isPositionValid} from "..";
import {Piece, Position} from "../../../piece/piece-manager.service";

export const getMovesLeft = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const upPosition: Position = {x: piece.position.x - 2, y: piece.position.y - 1};
    if(isPositionValid(upPosition)) {        
        const leftPiece = findPieceFrom(upPosition, pieces);
        if((leftPiece && leftPiece.color !== piece.color) || !leftPiece) {
            moves.push({from: piece, to: {...piece, position: upPosition}});
        }
    }

    const downPosition: Position = {x: piece.position.x - 2, y: piece.position.y + 1};
    if(isPositionValid(downPosition)) {        
        const rightPiece = findPieceFrom(downPosition, pieces);
        if((rightPiece && rightPiece.color !== piece.color) || !rightPiece) {
            moves.push({from: piece, to: {...piece, position: downPosition}});
        }
    }

    return moves;
};
