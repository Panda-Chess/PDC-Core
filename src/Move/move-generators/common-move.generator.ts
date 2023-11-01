import {Move, findPieceFrom, isPositionValid} from ".";
import {Piece, Position} from "../../Piece/piece-manager.service";

export const getCommonMoves = (piece: Piece, pieces: Piece[], displacement: Position): Move[] => {
    const moves: Move[] = [];

    const nextPosition: Position = {
        x: piece.position.x + displacement.x,
        y: piece.position.y + displacement.y
    };

    while(isPositionValid(nextPosition)){
        const nextPiecePosition = findPieceFrom(nextPosition, pieces);
        if(nextPiecePosition && nextPiecePosition.color !== nextPiecePosition.color){
            moves.push({from: nextPiecePosition, to: {...nextPiecePosition, position: nextPosition}});
            break;
        }

        if(nextPiecePosition && nextPiecePosition.color === piece.color){
            break;
        }

        moves.push({from: piece, to: {...piece, position: nextPosition}});

        nextPosition.x += displacement.x;
        nextPosition.y += displacement.y;
    }

    return moves;
};
