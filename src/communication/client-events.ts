import { Game, WantsToPlay } from "../utils";
import { GameRequestDto } from "./GameRequest.dto";

export enum ClientEvents {
    Connect = "connect",
    Disconnect = "disconnect",
    ConnectedUsers = "client:connected-users",
    UserConnected = "client:user-connected",
    UserDisconnected = "client:user-disconnected",
    OpponentDisconnect = "client:opponent-disconnect",
    GameCreated = "client:game-created",
    GameContinueRequest = "client:game-continue-request",
    GameContinue = "client:game-continue",
    ConnectError = "connect_error",
    GameRequest = "client:game-request",
}

export type ClientConnectErrorEvent = () => void;
export type ClientConnectEvent = () => void;
export type ClientDisconnectEvent = () => void;

export type ClientConnectedUsersEvent = (wantsToPlay: WantsToPlay[]) => void;
export type ClientUserConnectedEvent = (wantsToPlay: WantsToPlay) => void;
export type ClientUserDisconnectedEvent = (wantsToPlay: WantsToPlay) => void;

export type ClientGameRequestEvent = (gameRequestDTO: GameRequestDto) => void;
export type ClientGameCreatedEvent = (gameRequestDTO: GameRequestDto) => void;
export type ClientGameContinueEvent = (game: Game) => void;

export type ClientGameContinueRequestEvent = (gameRequestDTO: GameRequestDto) => void;

export type ClientOpponentDisconnectEvent = () => void;
