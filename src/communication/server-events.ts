import { Socket } from "socket.io";
import { GameRequestDto } from "./GameRequest.dto";
import { Move } from "../move/move-generators/move.generators";
import { GameTypes } from "../utils";

export enum ServerEvents {
    Connection = "connection",
    Disconnect = "disconnect",
    GameRequest = "server:game-request",
    GameCreate = "server:game-create",
    GameContinue = "server:game-continue",
    Move = "server:move",
}

export type ServerConnectionEvent = (socket: Socket) => void;
export type ServerDisconnectEvent = () => void;

export type ServerGameRequestEvent = (gameRequestDTO: GameRequestDto) => void;
export type ServerGameCreateEvent = (gameRequestDTO: GameRequestDto, gameType: GameTypes) => void;
export type ServerMoveEvent = (move: Move) => void;

export type ServerGameContinueEvent = (gameRequestDTO: GameRequestDto) => void;