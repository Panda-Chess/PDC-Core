import { Piece } from "../piece/piece-manager.service";
import { PlayerDTO } from "./player.dto";

export type GameDTO = {
    currentPlayer: PlayerDTO;
    opponentPlayer: PlayerDTO;
    gamePieces: Piece[];
    gameType: "casual" | "competitive";
};