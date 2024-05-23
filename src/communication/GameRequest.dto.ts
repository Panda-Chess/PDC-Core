export type GameRequestDto = {
    initiatorId: string;
    receptorId: string;
    gameType: "casual" | "competitive"
};