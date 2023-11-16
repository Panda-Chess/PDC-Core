import {Move, findPieceFrom, isPositionValid} from "../../move-generators/move.generators";
import {Piece, Position} from "../../../piece/piece-manager.service";

export const getMovesDown = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const leftPosition: Position = {x: piece.position.x - 1, y: piece.position.y + 2};
    if(isPositionValid(leftPosition)) {        
        const leftPiece = findPieceFrom(leftPosition, pieces);
        if((leftPiece && leftPiece.color !== piece.color) || !leftPiece) {
            moves.push({from: piece, to: {...piece, position: leftPosition}});
        }
    }

    const rightPosition: Position = {x: piece.position.x + 1, y: piece.position.y + 2};
    if(isPositionValid(rightPosition)) {        
        const rightPiece = findPieceFrom(rightPosition, pieces);
        if((rightPiece && rightPiece.color !== piece.color) || !rightPiece) {
            moves.push({from: piece, to: {...piece, position: rightPosition}});
        }
    }

    return moves;
};
