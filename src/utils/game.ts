import { Piece } from "../piece/piece-manager.service";
import { UserInGame } from "./userInGame";

export type Game = {
    users: UserInGame[];
    gamePieces: Piece[]; 
    gameType: "casual" | "competitive";
};