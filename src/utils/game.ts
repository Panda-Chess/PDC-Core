import { Piece } from "../piece/piece-manager.service";
import { UserInGame } from "./userInGame";

export type Game = {
    _id?: string;
    users: UserInGame[];
    gamePieces: Piece[]; 
    gameType: "casual" | "competitive";
    currentColor: "white" | "black";
};