import {getMoves} from "./move/move-generators";
import {
    createPieceManager
} from "./piece/piece-manager.service";

const pieceManager = createPieceManager();

const pieces = pieceManager
    .getPieces();

for (const piece of pieces) {
    console.log(getMoves(piece, pieces));
}
