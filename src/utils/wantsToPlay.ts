import { GameTypes } from "./gameTypes";
import { User } from "./user";

export type WantsToPlay = {
    user: User;
    socketId: string;
    gameType: GameTypes;
};