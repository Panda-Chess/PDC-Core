export type PlayerDTO = {
    name: string;
    wins?: number;
    losses?: number;
    draws?: number;
    score?: number;

    color: "white" | "black";
};