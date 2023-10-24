import {
    Piece, PieceType, Position
} from "../piece-manager.service";
import { v4 as uuid } from "uuid";

export const generatePiece = (pieceType: PieceType, color: "white" | "black", position: Position): Piece => {
    return {
        pieceId: uuid(),
        wasMoved: false,
        pieceType: pieceType,
        color: color,
        position: position 
    };
};
