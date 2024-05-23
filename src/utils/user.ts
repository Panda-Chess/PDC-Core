export type User = {
    _id?: string;
    socketId?: string;
    name: string;
    email: string;
    password: string;
    status: "online" | "offline";
    wins: number;
    losses: number;
    draws: number;
    score: number;
};