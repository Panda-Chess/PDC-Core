import {Move, findPieceFrom, isPositionValid} from "./move.generators";
import {Piece, Position} from "../../piece/piece-manager.service";

export const getCommonMoves = (piece: Piece, pieces: Piece[], displacement: Position): Move[] => {
    const moves: Move[] = [];

    const nextPosition: Position = {
        x: piece.position.x + displacement.x,
        y: piece.position.y + displacement.y
    };

    while(isPositionValid(nextPosition)){
        const nextPiecePosition = findPieceFrom(nextPosition, pieces);
        if(nextPiecePosition && nextPiecePosition.color !== piece.color){
            moves.push({from: piece, to: {...piece, position: nextPosition, wasMoved: true}});
            break;
        }

        if(nextPiecePosition && nextPiecePosition.color === piece.color){
            break;
        }

        moves.push({from: piece, to: {...piece, position: {...nextPosition}, wasMoved: true}});

        nextPosition.x += displacement.x;
        nextPosition.y += displacement.y;
    }

    return moves;
};
