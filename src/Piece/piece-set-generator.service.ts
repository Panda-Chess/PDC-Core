import { generateBlackPieceSet } from "./PieceGenerators/black-piece.generator";
import { generateWhitePieceSet } from "./PieceGenerators/white-piece.generator";
import { Piece } from "./piece-manager.service";

export const generatePieceSet = (): Piece[] => {

    return [
        ...generateWhitePieceSet(),
        ...generateBlackPieceSet(),
    ];
};
