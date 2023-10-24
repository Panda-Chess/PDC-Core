import {Move, findPieceFrom, isPositionValid} from "..";
import {Piece, Position} from "../../../Piece/piece-manager.service";

export const getMovesLeftUp = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    const nextPosition: Position = {x: piece.position.x - 1, y: piece.position.y - 1};
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

        nextPosition.x--;
        nextPosition.y--;
    }

    return moves;
};
