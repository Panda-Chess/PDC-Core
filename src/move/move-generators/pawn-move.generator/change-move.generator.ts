import {
    Piece, PieceType
} from "../../../piece/piece-manager.service";
import {Move} from "..";

const eliminatedPieces = (pieces: Piece[], color: "white" | "black"): Piece[] => {
    const eliminated: Piece[] = [];

    pieces.forEach((piece) => {
        if(piece.color !== color)
            return;

        if(piece.pieceType === PieceType.Pawn)
            return;

        if (piece.position.x === -1 || piece.position.y === -1)
            eliminated.push(piece);
    });

    return eliminated;
};

export const getChangePawn = (piece: Piece, pieces: Piece[]): Move[] => {
    const increment = piece.color === "white" ? 1 : -1;
    const moves: Move[] = [];

    if ((piece.position.y === 6 && increment === 1) || (piece.position.y === 1 && increment === -1)) {
        eliminatedPieces(pieces, piece.color).forEach((eliminatedPiece) => {
            moves.push({
                from: piece,
                to: {
                    ...piece,
                    pieceId: eliminatedPiece.pieceId,
                    pieceType: eliminatedPiece.pieceType,
                    position: {
                        x: piece.position.x,
                        y: piece.position.y + increment,
                    },
                },
            });
        });
    }

    return moves;
};
