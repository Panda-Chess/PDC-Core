export type User = {
    _id?: string;
    socketId?: string;
    name: string;
    email: string;
    password: string;
    wins: number;
    losses: number;
    draws: number;
    score: number;
};