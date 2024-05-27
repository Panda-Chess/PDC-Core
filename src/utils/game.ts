import { Piece } from "../piece/piece-manager.service";
import { GameTypes } from "./gameTypes";
import { UserInGame } from "./userInGame";

export type Game = {
    _id?: string;
    users: UserInGame[];
    gamePieces: Piece[];
    gameType: GameTypes;
    currentColor: "white" | "black";
};