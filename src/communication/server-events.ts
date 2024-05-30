import { Socket } from "socket.io";
import { GameRequestDto } from "./GameRequest.dto";
import { CasualGameDTO } from "./CasualGame.dto";
import { Move } from "../move/move-generators/move.generators";
import { GameTypes } from "../utils";

export enum ServerEvents {
    Connection = "connection",
    Disconnect = "disconnect",
    GameRequest = "server:game-request",
    CasualGame = "server:casual-game",
    GameContinue = "server:game-continue",
    Move = "server:move",
}

export type ServerConnectionEvent = (socket: Socket) => void;
export type ServerDisconnectEvent = () => void;

export type ServerGameRequestEvent = (gameRequestDTO: GameRequestDto) => void;
export type ServerGameCreateEvent = (casualGameDTO: CasualGameDTO, gameType: GameTypes) => void;
export type ServerMoveEvent = (move: Move) => void;

export type ServerGameContinueEvent = (gameRequestDTO: GameRequestDto) => void;