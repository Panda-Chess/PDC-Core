import {
    Move, findPieceFrom
} from "..";
import {Piece} from "../../../Piece/piece-manager.service";

export const getMovesUp = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    for (let i = piece.position.y; i < 7; i++) {
        const currentPiece = findPieceFrom({
            x: piece.position.x,
            y: i
        }, pieces);
        if (currentPiece && currentPiece.color !== piece.color) {
            moves.push({
                from: piece,
                to: {
                    ...piece,
                    position: {
                        x: piece.position.x,
                        y: i
                    }
                }
            });
            break;
        }

        if (currentPiece) {
            break;
        }

        moves.push({
            from: piece,
            to: {
                ...piece,
                position: {
                    x: piece.position.x,
                    y: i
                }
            }
        });
    }

    return moves;
};
