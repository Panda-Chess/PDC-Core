import { GameTypes } from "../utils/gameTypes";

export type GameRequestDto = {
    currentPlayer: string;
    opponentPlayer: string;
    gameType: GameTypes;
};