import { isChess } from "./chess-checker";
import { Piece } from "../piece/piece-manager.service";
import { canMove } from "./move-checker";

export enum GameStates {
    InProgress = "InProgress",
    WhiteWin = "WhiteWin",
    BlackWin = "BlackWin",
    Draw = "Draw",
}

export const checkGameState = (pieces: Piece[]): GameStates => {
    if(isChess(pieces, "white")){
        if(!canMove(pieces, "white")){
            return GameStates.BlackWin;
        }
    }

    if(isChess(pieces, "black")){
        if(!canMove(pieces, "black")){
            return GameStates.WhiteWin;
        }
    }

    return GameStates.InProgress;
};