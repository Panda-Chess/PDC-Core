import {
    Move, findPieceFrom
} from "..";
import {Piece} from "../../../Piece/piece-manager.service";

export const getMovesRight = (piece: Piece, pieces: Piece[]): Move[] => {
    const moves: Move[] = [];

    for (let i = piece.position.x; i < 7; i++) {
        const currentPiece = findPieceFrom({
            x: i,
            y: piece.position.y
        }, pieces);
        if (currentPiece && currentPiece.color !== piece.color) {
            moves.push({
                from: piece,
                to: {
                    ...piece,
                    position: {
                        x: i,
                        y: piece.position.y
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
                    x: i,
                    y: piece.position.y
                }
            }
        });
    }

    return moves;
};
