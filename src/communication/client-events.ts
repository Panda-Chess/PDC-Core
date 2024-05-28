import { Game, WantsToPlay } from "../utils";
import { GameRequestDto } from "./GameRequest.dto";

export enum ClientEvents {
    Connect = "connect",
    Disconnect = "disconnect",
    ConnectedUsers = "client:connected-users",
    UserConnected = "client:user-connected",
    UserDisconnected = "client:user-disconnected",
    OpponentDisconnect = "client:opponent-disconnect",
    GameStart = "client:game-start",
    GameContinue = "client:game-continue",
    ConnectError = "connect_error",
    GameRequest = "client:game-request",
}

export type ClientConnectEvent = () => void;
export type ClientDisconnectEvent = () => void;
export type ClientConnectedUsersEvent = (wantsToPlay: WantsToPlay[]) => void;
export type ClientUserConnectedEvent = (wantsToPlay: WantsToPlay) => void;
export type ClientUserDisconnectedEvent = (wantsToPlay: WantsToPlay) => void;
export type ClientOpponentDisconnectEvent = () => void;
export type ClientGameStartEvent = (game: Game) => void;
export type ClientConnectErrorEvent = () => void;
export type ClientGameRequestEvent = (gameRequestDTO: GameRequestDto) => void;
export type ClientGameContinueEvent = (gameRequestDTO: GameRequestDto) => void;
