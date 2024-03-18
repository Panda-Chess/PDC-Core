import { User } from "./user";

export type UserInGame = {
    user: User;
    color: "white" | "black";
    gamePoints: number;
}