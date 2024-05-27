import { GameTypes } from "../utils/gameTypes";

export type GameRequestDto = {
    initiatorId: string;
    receptorId: string;
    gameType: GameTypes;
};