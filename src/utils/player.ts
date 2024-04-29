export type User = {
    _id?: string;
    name: string;
    email: string;
    password: string;
    wins: number;
    losses: number;
    draws: number;
    score: number;

    color: "white" | "black";
};