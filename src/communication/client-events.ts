import { Game, User } from "../utils";
import { GameRequestDto } from "./GameRequest.dto";

export enum ClientEvents {
    Connect = "connect",
    Disconnect = "disconnect",
    ConnectedUsers = "client:connected-users",
    UserConnected = "client:user-connected",
    UserDisconnected = "client:user-disconnected",
    OpponentDisconnect = "client:opponent-disconnect",
    GameStart = "client:game-start",
    ConnectError = "connect_error",
    GameRequest = "client:game-request",
}

export type ClientConnectEvent = () => void;
export type ClientDisconnectEvent = () => void;
export type ClientConnectedUsersEvent = (users: User[]) => void;
export type ClientUserConnectedEvent = (user: User) => void;
export type ClientUserDisconnectedEvent = (user: User) => void;
export type ClientOpponentDisconnectEvent = () => void;
export type ClientGameStartEvent = (game: Game) => void;
export type ClientConnectErrorEvent = () => void;
export type ClientGameRequestEvent = (gameRequestDTO: GameRequestDto) => void;
