import { Piece, PieceType, Position } from "../../Piece/piece-manager.service";
import { Move, findPieceFrom } from "../move-generator.srvice";

const getDoubleMove = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
  const firstStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment }, pieces);
  const secondStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment * 2 }, pieces);

  if (!piece.wasMoved && !firstStep && !secondStep) {
    const nextPosition: Piece = {
      ...piece,
      position: {
        x: piece.position.x,
        y: piece.position.y + increment * 2,
      },
    };

    return {
      from: piece,
      to: nextPosition,
    };
  }
};

const getSimpleMove = (piece: Piece, pieces: Piece[], increment: number): Move | void => {
  const firstStep = findPieceFrom({ x: piece.position.x, y: piece.position.y + increment }, pieces);
  const canMoveForward = piece.position.y + increment > 0;
  const canMoveBackward = piece.position.y + increment < 7;

  if (!firstStep && canMoveForward && canMoveBackward) {
    const nextPosition: Piece = {
      ...piece,
      position: {
        x: piece.position.x,
        y: piece.position.y + increment,
      },
    };

    return {
      from: piece,
      to: nextPosition,
    };
  }
};

const getAttackMoves = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
  const moves: Move[] = [];

  const leftAttack = findPieceFrom({ x: piece.position.x - 1, y: piece.position.y + increment }, pieces);
  const rightAttack = findPieceFrom({ x: piece.position.x + 1, y: piece.position.y + increment }, pieces);

  if (leftAttack && leftAttack.color !== piece.color) {
    const nextPosition: Piece = {
      ...piece,
      position: {
        x: piece.position.x - 1,
        y: piece.position.y + increment,
      },
    };

    moves.push({
      from: piece,
      to: nextPosition,
    });
  }

  if (rightAttack && rightAttack.color !== piece.color) {
    const nextPosition: Piece = {
      ...piece,
      position: {
        x: piece.position.x + 1,
        y: piece.position.y + increment,
      },
    };

    moves.push({
      from: piece,
      to: nextPosition,
    });
  }

  return moves;
};

const getChangePawn = (piece: Piece, pieces: Piece[], increment: number): Move[] => {
  const moves: Move[] = [];

  if (piece.position.y === 7 && increment === 1) {
    Object.keys(PieceType).forEach((key) => {
      if (key === "Pawn") return;

      const nextPosition: Piece = {
        ...piece,
        pieceType: key as PieceType,
        position: {
          x: piece.position.x,
          y: piece.position.y + increment,
        },
      };

      moves.push({
        from: piece,
        to: nextPosition,
      });
    });
  }

  if (piece.position.y === 0 && increment === -1) {
    Object.keys(PieceType).forEach((key) => {
      if (key === "Pawn") return;

      const nextPosition: Piece = {
        ...piece,
        pieceType: key as PieceType,
        position: {
          x: piece.position.x,
          y: piece.position.y + increment,
        },
      };

      moves.push({
        from: piece,
        to: nextPosition,
      });
    });
  }

  return moves;
};

export const generatePawnMoves = (piece: Piece, pieces: Piece[]): Move[] => {
  const moves: Move[] = [];

  if (piece.color === "white") {
    const doubleMove = getDoubleMove(piece, pieces, 1);
    if (doubleMove) {
      moves.push(doubleMove);
    }

    const simpleMove = getSimpleMove(piece, pieces, 1);
    if (simpleMove) {
      moves.push(simpleMove);
    }

    const attackMoves = getAttackMoves(piece, pieces, 1);
    moves.push(...attackMoves);

    const changePawn = getChangePawn(piece, pieces, 1);
    moves.push(...changePawn);
  } else {
    const doubleMove = getDoubleMove(piece, pieces, -1);
    if (doubleMove) {
      moves.push(doubleMove);
    }

    const simpleMove = getSimpleMove(piece, pieces, -1);
    if (simpleMove) {
      moves.push(simpleMove);
    }

    const attackMoves = getAttackMoves(piece, pieces, -1);
    moves.push(...attackMoves);

    const changePawn = getChangePawn(piece, pieces, -1);
    moves.push(...changePawn);
  }

  return moves;
};
