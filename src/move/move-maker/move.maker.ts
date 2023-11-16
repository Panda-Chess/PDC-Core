import { Piece } from "../../piece/piece-manager.service";
import { Move, findPieceFrom } from "../move-generators/move.generators";

export const makeMove = (move: Move, pieces: Piece[]): Piece[] => {
    let newPieces = pieces;

    if(move.from.pieceId !== move.to.pieceId && move.from.color === move.to.color){
        newPieces = newPieces.map(p => {
            if (p.pieceId === move.from.pieceId) {
                return {
                    ...p,
                    position: {
                        x: -1,
                        y: -1,
                    }
                };
            }
    
            return p;
        });
    }

    const attackedPiece = findPieceFrom(move.to.position, pieces);
    if(attackedPiece && attackedPiece.color !== move.from.color){
        newPieces = newPieces.map(p => {
            if (p.pieceId === attackedPiece.pieceId) {
                return {
                    ...p,
                    position: {
                        x: -1,
                        y: -1,
                    }
                };
            }
    
            return p;
        });
    }

    newPieces = newPieces.map(p => {
        if (p.pieceId === move.to.pieceId) {        
            return {
                ...move.to,
            };
        }

        return p;
    });

    return newPieces;
};