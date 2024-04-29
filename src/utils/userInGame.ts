import { UserStatus } from "./userStatus";
import { User } from "./user";

export type UserInGame = {
    socketId: string;
    user: User;
    color: "white" | "black";
    gamePoints: number;
    status: UserStatus;
}