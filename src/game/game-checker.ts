import { isChess } from "./chess-checker";
import { Piece } from "../piece/piece-manager.service";
import { canMove } from "./move-checker";

export enum GameStates {
    InProgress = "InProgress",
    WhiteWin = "WhiteWin",
    BlackWin = "BlackWin",
    Draw = "Draw",
}

export const checkGameState = (pieces: Piece[], color: "white" | "black"): GameStates => {
    const playerCanMove = canMove(pieces, color);

    if(isChess(pieces, color) && !playerCanMove){
        return color === "white" ? GameStates.BlackWin : GameStates.WhiteWin;
    }

    if(!playerCanMove){
        return GameStates.Draw;
    }

    return GameStates.InProgress;
};