import { getMoves } from "./Move/move-generator.srvice";
import { createPieceManager } from "./Piece/piece-manager.service";

const pieceManager = createPieceManager();

const pieces = pieceManager.getPieces();

for (const piece of pieces) {
    console.log(getMoves(piece, pieces));
}
