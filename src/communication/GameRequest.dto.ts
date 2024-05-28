import { User } from "../utils";
import { GameTypes } from "../utils/gameTypes";

export type GameRequestDto = {
    initiator: User;
    receptor: User;
    gameType: GameTypes;
};